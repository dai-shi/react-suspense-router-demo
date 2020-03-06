import React from "react";
import { useRouteData, Link } from "react-suspense-router";

import { UserData } from "./User.data";

const UserID: React.FC = () => {
  const userData = useRouteData() as UserData;
  return <li>User ID: {userData.data.id}</li>;
};

const FirstName: React.FC = () => {
  const userData = useRouteData() as UserData;
  return <li>First Name: {userData.data.first_name}</li>;
};

const LastName: React.FC = () => {
  const userData = useRouteData() as UserData;
  return <li>Last Name: {userData.data.last_name}</li>;
};

const User: React.FC = () => (
  <div>
    <h1>User</h1>
    <ul>
      <UserID />
      <FirstName />
      <LastName />
    </ul>
    <Link to="/user/-1">
      Go to Page that raises an error (User ID: -1)
    </Link>
  </div>
);

export default User;
