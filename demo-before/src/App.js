import React from 'react';
import { Router } from "@reach/router";

import TabContainer from './TabContainer';
import NavLink from './NavLink';

import Profile from './Profile';
import Albums from './Albums';
import Voting from './Voting';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="coldpedia-title">COLDPEDIA</h1>
      <nav>
        <NavLink to="/">Profile</NavLink>
        <NavLink to="albums">Albums</NavLink>
        <NavLink to="voting">Voting</NavLink>
      </nav>
      <TabContainer>
        <Router>
          <Profile path="/" />
          <Albums path="albums" />
          <Voting path="voting" />
        </Router>
      </TabContainer>
    </div>
  );
}

export default App;
