import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text == "") {
      alertContext.setAlert("Please enter something", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="col">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            value={text}
            onChange={onChange}
            className="form-control"
            placeholder="Search Users..."
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className="form-group">
          <button
            className="btn btn-danger btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
