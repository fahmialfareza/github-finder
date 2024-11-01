import React, { useContext } from "react";
import AlertContext, {
  AlertContextType,
} from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext<AlertContextType>(AlertContext);

  const { alert } = alertContext;

  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.message}
      </div>
    )
  );
};

export default Alert;
