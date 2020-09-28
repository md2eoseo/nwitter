import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState(null);
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
    <form className="factoryForm" onSubmit={onSubmit}>
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          placeholder="Nweet your thoughts..."
          maxLength={120}
        />
        <input
          className="formFileInput"
          id="attach-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <input value="&rarr;" className="factoryInput__arrow" type="submit" />
      </div>
      <label for="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      {attachment && (
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            alt="attachment"
            style={{
              backgroundImage: attachment,
            }}
          />
          <div className="factoryForm__clear" onClick={onClearAttachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
