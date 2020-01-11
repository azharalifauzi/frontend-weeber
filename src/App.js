import React from 'react';

import HomePage from './pages/homepage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fab, faBars);

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
