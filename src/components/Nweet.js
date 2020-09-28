import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
      if (nweet.attachmentUrl !== null) {
        await storageService.refFromURL(nweet.attachmentUrl).delete();
      }
      await dbService.doc(`nweets/${nweet.id}`).delete();
    }
  };
  return (
    <div className="nweet">
      {!editing ? (
        <div>
          {nweet.attachmentUrl && (
            <img src={nweet.attachmentUrl} alt="nweet.attachmentUrl" />
          )}
          <span>{nweet.text}</span>
          {nweet.updatedAt && <span>-edited</span>}
        </div>
      ) : (
        <form className="container nweetEdit" onSubmit={onEdit}>
          <input
            className="formInput"
            placeholder="Edit your nweet..."
            value={newNweet}
            onChange={onChange}
            maxLength={120}
            required
            autoFocus
          />
          <input className="formBtn" type="submit" value="edit" />
          <button className="formBtn cancelBtn" onClick={toggleEditing}>
            cancel
          </button>
        </form>
      )}
      {isOwner && !editing && (
        <div class="nweet__actions">
          <span onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span onClick={toggleEditing}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </span>
        </div>
      )}
    </div>
  );
};

export default Nweet;
