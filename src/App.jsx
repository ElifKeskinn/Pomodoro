import React, { useState } from 'react';
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
    </div>
  );
};

export default App;
