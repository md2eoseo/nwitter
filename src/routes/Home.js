import React from "react";
import NweetFactory from "components/NweetFactory";
import Feed from "components/Feed";

const Home = ({ userObj }) => {
  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <Feed userObj={userObj} />
    </div>
  );
};
export default Home;
