import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return user ? <h2>Welcome {user.username}</h2> : <h2>Please login</h2>;
};

export default Profile;
