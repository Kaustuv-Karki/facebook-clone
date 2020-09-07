import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import StoryReel from './components/StoryReel/StoryReel';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <StoryReel/>
      </div>
    </div>
  );
}

export default App;
