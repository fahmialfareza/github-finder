import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  // Add more fields as needed
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  // Add more fields as needed
}

interface State {
  users: User[];
  user: User | null;
  repos: Repo[];
  loading: boolean;
}

interface SearchUsersAction {
  type: typeof SEARCH_USERS;
  payload: User[];
}

interface GetUserAction {
  type: typeof GET_USER;
  payload: User;
}

interface GetReposAction {
  type: typeof GET_REPOS;
  payload: Repo[];
}

interface ClearUsersAction {
  type: typeof CLEAR_USERS;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

type Action =
  | SearchUsersAction
  | GetUserAction
  | GetReposAction
  | ClearUsersAction
  | SetLoadingAction;

const githubReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
