import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link, RouteComponentProps } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

interface UserParams {
  login: string;
}

interface UserProps extends RouteComponentProps<UserParams> {}

const User: React.FC<UserProps> = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    if (getUser) {
      getUser(match.params.login);
    }
    if (getUserRepos) {
      getUserRepos(match.params.login);
    }
  }, [getUser, getUserRepos, match.params.login]);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user || {};

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-primary mr-3">
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card my-4">
        <div className="row">
          <div className="col-md-6 text-center p-4">
            <img
              src={avatar_url}
              alt=""
              className="rounded-circle m-auto"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className="col-md-6 p-4">
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <a
              href={html_url}
              target="_blank"
              className="btn btn-primary my-1"
              rel="noreferrer"
            >
              Visit Github Profile
            </a>
            <br />
            <br />

            {login && (
              <Fragment>
                Username: {login} <br />
              </Fragment>
            )}

            {company && (
              <Fragment>
                Company: {company} <br />
              </Fragment>
            )}

            {blog && (
              <Fragment>
                Website: {blog} <br />
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="card text-center p-4 mb-4">
        <div className="row">
          <div className="col">
            <div className="badge badge-secondary mx-2 p-2">
              Followers: {followers}
            </div>
            <div className="badge badge-secondary mx-2 p-2">
              Following: {following}
            </div>
            <div className="badge badge-secondary mx-2 p-2">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-secondary mx-2 p-2">
              Public Gists: {public_gists}
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
