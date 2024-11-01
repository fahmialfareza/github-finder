import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search: React.FC = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text === "") {
      if (alertContext && alertContext?.setAlert) {
        alertContext?.setAlert("Please enter something", "danger");
      }
    } else {
      if (githubContext && githubContext?.searchUsers) {
        githubContext?.searchUsers(text);
        setText("");
      }
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
      {githubContext?.users.length > 0 && (
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
