import React from "react";
import RepoItem from "./RepoItem";

interface Repo {
  id: number;
  html_url: string;
  name: string;
}

interface ReposProps {
  repos: Repo[];
}

const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </>
  );
};

export default Repos;
