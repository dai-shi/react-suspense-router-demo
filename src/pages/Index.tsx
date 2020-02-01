import React from "react";

const Index: React.FC = () => (
  <div>
    <h1>React Suspense Router Demo</h1>
    <ul>
      <li>About is a static page without data fetching</li>
      <li>User is a page with a single fetch request</li>
      <ul>
        <li>Fetching user 1 data takes about 1 second</li>
        <li>Fetching user 2 data takes about 3 second</li>
      </ul>
    </ul>
  </div>
);

export default Index;
