import React, { useEffect, useRef } from 'react';

/*BİTMEMİŞ COMPONENT*/

const ProgressCircle = ({ time, duration, isActive, selectedTheme }) => {
  const circleRef = useRef(null);
  const radius = 60; 
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progress = (time / duration) * circumference;
    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = `${circumference - progress}`; 
    }
  }, [time, duration]);

  return (
    <svg height="150" width="150" style={{ position: 'absolute', top: '0', left: '0' }}>
      <circle
        ref={circleRef}
        cx="75" // Merkez X
        cy="75" // Merkez Y
        r={radius}
        stroke={selectedTheme} 
        strokeWidth="10"
        fill="transparent"
        style={{
          transition: 'stroke-dashoffset 1s linear',
          opacity: isActive && time > 0 ? 1 : (time === 0 ? 0 : 1),
        }}
      />
    </svg>
  );
};

export default ProgressCircle;
