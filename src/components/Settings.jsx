import React, { useState } from 'react';

const Settings = ({ onApply, onClose }) => {
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [selectedFont, setSelectedFont] = useState('Kumbh Sans');
  const [selectedTheme, setSelectedTheme] = useState('#F87070');

  const fonts = ['Kumbh Sans', 'Roboto Slab', 'Space Mono'];
  const themes = ['#F87070', '#70F3F8', '#D881F8'];

  const handleApplySettings = () => {
    const newSettings = {
      pomodoroTime,
      shortBreakTime,
      longBreakTime,
      selectedFont,
      selectedTheme,
    };
    onApply(newSettings);
  };

  return (
    <div className="modal settings-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h2>Settings</h2>

        <div className="setting-group">
          <label>Time (minutes)</label>
          <div className="time-settings">
            <div>
              <label>Pomodoro</label>
              <input
                type="number"
                value={pomodoroTime}
                onChange={(e) => setPomodoroTime(parseInt(e.target.value))}
                min="1"
              />
            </div>
            <div>
              <label>Short Break</label>
              <input
                type="number"
                value={shortBreakTime}
                onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
                min="1"
              />
            </div>
            <div>
              <label>Long Break</label>
              <input
                type="number"
                value={longBreakTime}
                onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="setting-group">
          <label>Font</label>
          <div className="font-settings">
            {fonts.map((font) => (
              <button
                key={font}
                className={`font-button ${selectedFont === font ? 'active' : ''}`}
                onClick={() => setSelectedFont(font)}
                style={{ fontFamily: font }}
              >
                Aa
              </button>
            ))}
          </div>
        </div>

        <div className="setting-group">
          <label>Color</label>
          <div className="theme-settings">
            {themes.map((theme) => (
              <button
                key={theme}
                className={`theme-button ${selectedTheme === theme ? 'active' : ''}`}
                onClick={() => setSelectedTheme(theme)}
                style={{ backgroundColor: theme }}
              />
            ))}
          </div>
        </div>

        <button className="apply-button" onClick={handleApplySettings}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
