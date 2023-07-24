import React from "react";
import { useAuth } from "../components/AuthContext";

const UserStatus = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <p>User is logged in. Email: {user.email}</p>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
  );
};

export default UserStatus;
