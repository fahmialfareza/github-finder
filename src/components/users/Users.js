import React, { Fragment, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {users.map((user) => (
          <div key={user.id} className="col-md-4">
            <UserItem user={user} />
          </div>
        ))}
      </Fragment>
    );
  }
};

export default Users;
