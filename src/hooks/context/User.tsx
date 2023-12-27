import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "MR Masum",
      email: "mrmasum@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <h3>User name - {userContext?.user?.name}</h3>
      <p>User email - {userContext?.user?.email}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
