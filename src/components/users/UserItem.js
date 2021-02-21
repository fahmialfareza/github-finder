import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
