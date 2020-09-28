import React, { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import { dbService } from "fbase";

const Feed = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  return (
    <div className="feed">
      {nweets.map((nweet) => (
        <Nweet
          key={nweet.id}
          nweet={nweet}
          isOwner={userObj.uid === nweet.creatorId}
        />
      ))}
    </div>
  );
};
export default Feed;
