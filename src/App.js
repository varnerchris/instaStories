import React from 'react';
//import logo from './logo.svg';
import './App.css';
import InstaStories from './Components/InstaStories/InstaStories';
//import Instagram from './Components/Instagram/Instagram';
import background from './background.png'
import InstaLikes from './Components/InstaLikes/InstaLikes';

function App() {
  return (
    <div className="App">
    <div className="likes">
    <InstaLikes/>
    </div>
    <img src={background} alt="background"/>

      <div className="stories">
      <InstaStories/>
      </div>



    </div>
  );
}

export default App;
