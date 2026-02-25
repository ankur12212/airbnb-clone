import { createContext } from "react";

export const authDataContext = createContext();

export const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:8000";

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
};