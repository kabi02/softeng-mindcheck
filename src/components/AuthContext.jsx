import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there is a user in the local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to set the user when logged in
  const setUserLoggedIn = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to log out the user
  const logout = () => {
    alert("Logged out successfully!");
    setUser(null);

    // Remove the user from local storage
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUserLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};