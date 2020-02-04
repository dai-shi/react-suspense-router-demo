import React from "react";
import styled from "styled-components";
import { Link, useSuspensePending } from "react-suspense-router";

const NavList = styled.ul`
  list-style-type: none;
  margin: 30px 20px;
  padding: 0;
  a {
    text-decoration: none;
  }
`;

const NavItem = styled.li`
  color: white;
  background-color: gray;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 5px 15px;
  text-align: center;
  white-space: nowrap;
`;

const NavLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: blue;
  color: white;
  font-size: small;
  padding: 2px 4px;
  &::after {
    content: 'Loading...';
  }
`;

const NavPending: React.FC = () => {
  const isPending = useSuspensePending();
  if (isPending) {
    return <NavLoader />;
  }
  return null;
};

const Nav: React.FC = () => (
  <>
    <NavPending />
    <NavList>
      <Link to="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/about">
        <NavItem>About</NavItem>
      </Link>
      <Link to="/github/react">
        <NavItem>GitHub react</NavItem>
      </Link>
      <Link to="/user/1">
        <NavItem>User 1</NavItem>
      </Link>
      <Link to="/user/2">
        <NavItem>User 2</NavItem>
      </Link>
    </NavList>
  </>
);

export default Nav;
