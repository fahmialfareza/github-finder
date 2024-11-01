import React from "react";
import { Link } from "react-router-dom";

interface User {
  login: string;
  avatar_url: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center p-4 my-4">
      <img
        src={avatar_url}
        alt=""
        className="rounded-circle m-auto"
        style={{ width: "60px" }}
      />
      <h3 className="text-truncate">{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm mt-2">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
