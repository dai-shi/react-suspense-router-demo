import React from "react";
import { useRouteData, Link } from "react-suspense-router";

import { UserData } from "./User.data";

const User: React.FC = () => {
  const userData = useRouteData() as UserData;
  return (
    <div>
      <h1>User</h1>
      <ul>
        <li>User ID: {userData.data.id}</li>
        <li>First Name: {userData.data.first_name}</li>
        <li>Last Name: {userData.data.last_name}</li>
      </ul>
      <Link to="/user/-1">
        Go to Page that raises an error (User ID: -1)
      </Link>
    </div>
  );
};

export default User;
