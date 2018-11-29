import React, { lazy, Suspense } from 'react';
import { Router } from "@reach/router";

import TabContainer from './TabContainer';
import NavLink from './NavLink';
import Spinner from './Spinner';
import Profile from './Profile';

import './App.css';

const Albums = lazy(() => import('./Albums'));
const Voting = lazy(() => import('./Voting'));

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
        <Suspense fallback={<Spinner />}>
          <Router>
              <Profile path="/" />
              <Albums path="albums" />
              <Voting path="voting" />
          </Router>
        </Suspense>
      </TabContainer>
    </div>
  );
}

export default App;
