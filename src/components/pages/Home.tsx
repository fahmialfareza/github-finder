import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => (
  <>
    <div className="row">
      <Search />
    </div>
    <div className="row">
      <Users />
    </div>
  </>
);

export default Home;
