import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const nweetsFromDB = await dbService.collection("nweets").get();
    nweetsFromDB.forEach((doc) => {
      const nweetObject = {
        ...doc.data(),
        id: doc.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
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
        await dbService
          .collection("nweets")
          .add({ text: nweet, createdAt: Date.now() })
          .then(() => {
            setNweet("");
          });
      } else {
        console.log("Nweet is empty!");
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          placeholder="Nweet your thoughts..."
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
