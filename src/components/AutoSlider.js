import React, { useState, useEffect, useRef } from 'react';
import { Slider } from '@mui/material';
import './styles.css';

const AUTO_INTERVAL_MS = 1000;

const App = () => {
  const [value, setValue] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const autoIntervalRef = useRef(null);

  useEffect(() => {
    if (isAuto) {
      autoIntervalRef.current = setInterval(() => {
        setValue((prevValue) => (prevValue + 1) % 100);
      }, AUTO_INTERVAL_MS);
    } else {
      clearInterval(autoIntervalRef.current);
    }

    return () => clearInterval(autoIntervalRef.current);
  }, [isAuto]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSliderDragStart = () => {
    setIsAuto(false);
  };

  const handleSliderDragEnd = () => {
    setIsAuto(true);
  };

  return (
    <div className="App">
      <Slider
        value={value}
        onChange={handleSliderChange}
        onDragStart={handleSliderDragStart}
        onDragEnd={handleSliderDragEnd}
        disabled={!isAuto}
        className="slider"
      />
      <button onClick={() => setIsAuto((prevIsAuto) => !prevIsAuto)}>
        {isAuto ? 'Stop' : 'Start'} Auto Slider
      </button>
    </div>
  );
};

export default App;




