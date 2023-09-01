import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const logIn = () => {
    setIsAuth(true);
  };

  const logOut = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
