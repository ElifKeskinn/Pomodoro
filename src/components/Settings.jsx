import React, { useState } from 'react';

const Settings = () => {
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [theme, setTheme] = useState('light');

  const handleApply = () => {
    console.log('Settings applied:', { pomodoroTime, shortBreakTime, longBreakTime, theme });
  };

  return (
    <div className="settings">
      <div className="setting-group">
        <label>Pomodoro Time (minutes):</label>
        <input
          type="number"
          value={pomodoroTime}
          onChange={(e) => setPomodoroTime(parseInt(e.target.value))}
        />
      </div>
      <div className="setting-group">
        <label>Short Break Time (minutes):</label>
        <input
          type="number"
          value={shortBreakTime}
          onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
        />
      </div>
      <div className="setting-group">
        <label>Long Break Time (minutes):</label>
        <input
          type="number"
          value={longBreakTime}
          onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
        />
      </div>
      <div className="setting-group">
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button className="apply-button" onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Settings;
