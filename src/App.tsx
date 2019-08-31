import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from './Pages/Home';

const StyledApp = styled.div`
    text-align: center;
    overflow: hidden;
`;

const App = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <Router>
      <StyledApp>
        <Route path={baseUrl + "/"} component={Home as any} />
      </StyledApp>
    </Router>
  );
};

export default App;