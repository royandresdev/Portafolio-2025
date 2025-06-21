import { useState } from "react";
import { ApplicationContext } from "./ApplicationContext";

export function ApplicationProvider({ children }) {
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(localStorage.getItem("acceptedCookies"));

  const handleAcceptedCookies = (accepted) => {
    setIsAcceptedCookies(accepted);
    localStorage.setItem("acceptedCookies", accepted);
  };

  return (
    <ApplicationContext.Provider value={{ isAcceptedCookies, handleAcceptedCookies }}>
      {children}
    </ApplicationContext.Provider>
  );
}
