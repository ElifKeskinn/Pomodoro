import React, { useState, useEffect } from 'react';

const Timer = ({ activeTab }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (activeTab) {
      case 'pomodoro':
        setTime(25 * 60);
        break;
      case 'shortBreak':
        setTime(5 * 60);
        break;
      case 'longBreak':
        setTime(15 * 60);
        break;
      default:
        setTime(25 * 60);
    }
  }, [activeTab]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(activeTab === 'pomodoro' ? 25 * 60 : activeTab === 'shortBreak' ? 5 * 60 : 15 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
      <button className="control-button" onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="control-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
