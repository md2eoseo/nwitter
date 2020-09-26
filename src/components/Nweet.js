import { dbService } from "fbase";
import React, { useState } from "react";

const Nweet = ({ nweet, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweet.text);
  const toggleEditing = () => {
    setEditing(!editing);
    setNewNweet(nweet.text);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewNweet(value);
  };
  const onEdit = async (e) => {
    e.preventDefault();
    try {
      if (newNweet !== "") {
        await dbService
          .doc(`nweets/${nweet.id}`)
          .update({ text: newNweet, updatedAt: Date.now() })
          .then(() => {
            toggleEditing();
          });
      } else {
        console.log("can't make Nweet empty!");
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  const onDelete = async () => {
    const ok = window.confirm("Are you sure to delete Nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweet.id}`).delete();
    }
  };
  return (
    <div>
      {!editing ? (
        <h4>{nweet.text}</h4>
      ) : (
        <form onSubmit={onEdit}>
          <input
            placeholder="Edit your nweet..."
            value={newNweet}
            onChange={onChange}
            maxLength={120}
            required
          ></input>
          <input type="submit" value="edit" />
          <button onClick={toggleEditing}>cancel</button>
        </form>
      )}
      {isOwner && !editing && (
        <>
          <button onClick={onDelete}>delete</button>
          <button onClick={toggleEditing}>edit</button>
        </>
      )}
    </div>
  );
};

export default Nweet;
