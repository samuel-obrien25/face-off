import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components';
import Schedule from './Pages/Schedule';

const StyledApp = styled.div`
    text-align: center;
    overflow: hidden;
`;

const App = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <Router>
      <StyledApp>
        <Route path={baseUrl + "/"} component={Schedule} />
      </StyledApp>
    </Router>
  );
};

export default App;