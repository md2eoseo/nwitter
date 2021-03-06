import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Profile = ({ userObj, refreshUser }) => {
  const [myNweets, setMyNweets] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    setMyNweets(
      nweets.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };
  useEffect(() => {
    getMyNweets();
  });
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          className="formInput"
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
          autoFocus
        />
        <input
          className="formBtn"
          style={{
            marginTop: 10,
          }}
          type="submit"
          value="Update Profile"
        />
      </form>
      <div>
        {myNweets.length > 0
          ? myNweets.map((nweet) => (
              <Nweet
                key={nweet.id}
                nweet={nweet}
                isOwner={userObj.uid === nweet.creatorId}
              />
            ))
          : "There's no Nweet..."}
      </div>
    </div>
  );
};

export default Profile;
