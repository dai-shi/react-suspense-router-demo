import React from "react";
import { Routes, Route, FetchDataLazy } from "react-suspense-router";

const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));

const GitHubSearch = React.lazy(() => import("./pages/GitHubSearch"));
const fetchGitHubRepoData = FetchDataLazy(() => import("./pages/GitHubSearch.data"));

const User = React.lazy(() => import("./pages/User"));
const fetchUserData = FetchDataLazy(() => import("./pages/User.data"));

const MyRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/github/:query" element={<GitHubSearch />} fetchData={fetchGitHubRepoData} />
    <Route path="/user/:uid" element={<User />} fetchData={fetchUserData} />
  </Routes>
);

export default MyRoutes;
