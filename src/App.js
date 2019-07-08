import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstaStories from './Components/InstaStories/InstaStories';
import Instagram from './Components/Instagram/Instagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InstaStories/>
      <Instagram/>
      </header>
    </div>
  );
}

export default App;
