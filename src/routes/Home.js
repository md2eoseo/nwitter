import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState(null);
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (nweet !== "") {
        const nweetObj = {
          text: nweet,
          creatorId: userObj.uid,
          createdAt: Date.now(),
          attachmentUrl: null,
        };
        if (attachment !== null) {
          const fileRef = storageService
            .ref()
            .child(`${userObj.uid}/${uuidv4()}`);
          const response = await fileRef.putString(attachment, "data_url");
          nweetObj.attachmentUrl = await response.ref.getDownloadURL();
        }
        await dbService
          .collection("nweets")
          .add(nweetObj)
          .then(() => {
            setNweet("");
            setAttachment(null);
          });
      } else {
        console.log("Nweet is empty!");
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      setAttachment(finishedEvent.target.result);
    };
  };
  const onClearAttachment = () => {
    setAttachment(null);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          placeholder="Nweet your thoughts..."
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        {attachment && (
          <div>
            <img src={attachment} alt="attachment" height="100px" />
            <button onClick={onClearAttachment}>Clear Photo</button>
          </div>
        )}
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweet={nweet}
            isOwner={userObj.uid === nweet.creatorId}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
