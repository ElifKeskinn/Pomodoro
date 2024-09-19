import React, { useState } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('pomodoro');

  return (
    <div className="app">
      <div className="tabs">
        <button className="tab-button" onClick={() => setActiveTab('pomodoro')}>Pomodoro</button>
        <button className="tab-button" onClick={() => setActiveTab('shortBreak')}>Short Break</button>
        <button className="tab-button" onClick={() => setActiveTab('longBreak')}>Long Break</button>
      </div>
      <Timer activeTab={activeTab} />
      <Settings />
    </div>
  );
};

export default App;
