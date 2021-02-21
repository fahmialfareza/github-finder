import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => (
  <Fragment>
    <div className="row">
      <Search />
    </div>
    <div className="row">
      <Users />
    </div>
  </Fragment>
);

export default Home;
