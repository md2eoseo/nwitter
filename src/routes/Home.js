import { dbService } from "fbase";
import React, { useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
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
    </>
  );
};
export default Home;
