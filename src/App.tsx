import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, useNavigate } from "react-suspense-router";

import { ErrorBoundary } from "./utils/ErrorBoundary";
import Nav from "./Nav";
import MyRoutes from "./MyRoutes";

const Layout = styled.div`
  display: flex;
`;

const AppLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: black;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    border: 4px dotted white;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    animation: spinner 3s infinite linear;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Fallback: React.FC<{ retry?: () => void }> = ({ retry }) => {
  const navigate = useNavigate();
  const goToHome = retry && (() => {
    retry();
    navigate('/');
  });
  return (
    <div>
      <h1>Something went wrong</h1>
      {goToHome && (
        <button type="button" onClick={goToHome}>
          Back to Home
        </button>
      )}
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter timeout={2000}>
    <Layout>
      <Nav />
      <ErrorBoundary fallback={(_err, retry) => <Fallback retry={retry} />}>
        <Suspense fallback={<AppLoader />}>
          <MyRoutes />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  </BrowserRouter>
);

export default App;
