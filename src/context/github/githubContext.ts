import { createContext } from "react";

export interface GithubContextType {
  users: any[]; // Define the actual type of users if possible
  user: any | null; // Define the actual type of user if possible
  repos: any[]; // Define the actual type of repos if possible
  loading: boolean;
  searchUsers?: (text: string) => void;
  getUser?: (username: string) => void;
  getRepos?: (username: string) => void;
  getUserRepos?: (username: string) => void;
  clearUsers?: () => void;
  setLoading?: () => void;
}

const githubContext = createContext<GithubContextType>({
  loading: false,
  repos: [],
  user: null,
  users: [],
});

export default githubContext;
