import React from "react";

interface Repo {
  html_url: string;
  name: string;
}

interface RepoItemProps {
  repo: Repo;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className="card my-1 p-2">
      <h6>
        <a href={repo.html_url}>{repo.name}</a>
      </h6>
    </div>
  );
};

export default RepoItem;
