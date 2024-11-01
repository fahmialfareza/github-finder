import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const Users: React.FC = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {users.map((user: User) => (
          <div key={user.id} className="col-md-4">
            <UserItem user={user} />
          </div>
        ))}
      </>
    );
  }
};

export default Users;
