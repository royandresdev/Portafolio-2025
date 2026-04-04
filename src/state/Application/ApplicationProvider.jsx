import { useState, useEffect } from "react";
import { ApplicationContext } from "./ApplicationContext";

export default function ApplicationProvider({ children }) {
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(localStorage.getItem("acceptedCookies"));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  const handleAcceptedCookies = (accepted) => {
    setIsAcceptedCookies(accepted);
    localStorage.setItem("acceptedCookies", accepted);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  // Mantener sincronización si cambia el localStorage desde otra pestaña
  useEffect(() => {
    const syncUser = () => {
      const stored = localStorage.getItem("authUser");
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  return (
    <ApplicationContext.Provider value={{
      isAcceptedCookies,
      handleAcceptedCookies,
      user,
      handleLogin,
      handleLogout,
    }}>
      {children}
    </ApplicationContext.Provider>
  );
}
