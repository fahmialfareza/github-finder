import React, { useReducer, ReactNode } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

interface AlertStateProps {
  children: ReactNode;
}

const AlertState: React.FC<AlertStateProps> = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (message: string, type: string) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        ...setAlert, // Fix here
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
