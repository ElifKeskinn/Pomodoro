import React, { useState } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import './App.css';
import { FaCog } from 'react-icons/fa';

const App = () => {
  const [activeTab, setActiveTab] = useState('pomodoro');
  const [settings, setSettings] = useState({
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    selectedFont: 'Kumbh Sans',
    selectedTheme: '#F87070',
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleApplySettings = (newSettings) => {
    setSettings(newSettings);
    setIsSettingsOpen(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="app" style={{ fontFamily: settings.selectedFont }}>
      <div className="tabs">
        <button
          className="tab-button"
          style={{ backgroundColor: activeTab === 'pomodoro' ? settings.selectedTheme : 'transparent' }}
          onClick={() => setActiveTab('pomodoro')}
        >
          Pomodoro
        </button>
        <button
          className="tab-button"
          style={{ backgroundColor: activeTab === 'shortBreak' ? settings.selectedTheme : 'transparent' }}
          onClick={() => setActiveTab('shortBreak')}
        >
          Short Break
        </button>
        <button
          className="tab-button"
          style={{ backgroundColor: activeTab === 'longBreak' ? settings.selectedTheme : 'transparent' }}
          onClick={() => setActiveTab('longBreak')}
        >
          Long Break
        </button>
      </div>

      <Timer activeTab={activeTab} settings={settings} />

      <button className="settings-button" onClick={handleOpenSettings}>
        <FaCog />
      </button>

      {isSettingsOpen && <Settings onApply={handleApplySettings} onClose={handleCloseSettings} />}
    </div>
  );
};

export default App;
