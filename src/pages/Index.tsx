import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0 1em;
  padding: 0;
`;

const Item = styled.li`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const Index: React.FC = () => (
  <div>
    <h1>React Suspense Router Demo</h1>
    <List>
      <Item>About is a static page without data fetching</Item>
      <Item>
        GitHub is a page with a single fetch request. The page has its own
        Suspense fallback.
      </Item>
      <Item>
        User is a page with a single fetch request. Fetching user 1 data takes
        about 1 second. Fetching user 2 data takes about 3 second.
      </Item>
    </List>
  </div>
);

export default Index;
