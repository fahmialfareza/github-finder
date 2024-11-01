import { createContext } from "react";

export interface AlertType {
  type: string;
  message: string;
}

export interface AlertContextType {
  alert: AlertType | null;
  setAlert?: (message: string, type: string) => void;
}

const alertContext = createContext<AlertContextType>({
  alert: { message: "", type: "" },
});

export default alertContext;
