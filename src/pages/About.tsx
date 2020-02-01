import React from "react";

const About: React.FC = () => (
  <div>
    <h1>About</h1>
    <p>
      This is a demo app with React Router and React Suspense powered by{" "}
      <a href="https://github.com/dai-shi/react-suspense-router">
        react-suspense-router
      </a>
      . It show use cases to load pages lazilly and render as you fetch page
      data.
    </p>
  </div>
);

export default About;
