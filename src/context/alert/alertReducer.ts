import { SET_ALERT, REMOVE_ALERT } from "../types";

// Define the structure of the alert
interface Alert {
  type: string;
  message: string;
}

// Define the types for actions
interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: Alert;
}

interface RemoveAlertAction {
  type: typeof REMOVE_ALERT;
}

// Define a union type for all possible actions in this reducer
type AlertAction = SetAlertAction | RemoveAlertAction;

// Reducer function with state and action types
const alertReducer = (
  state: Alert | null,
  action: AlertAction
): Alert | null => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
