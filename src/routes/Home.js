import React from "react";
import NweetFactory from "components/NweetFactory";
import Feed from "components/Feed";

const Home = ({ userObj }) => {
  return (
    <>
      <NweetFactory userObj={userObj} />
      <Feed userObj={userObj} />
    </>
  );
};
export default Home;
