import React from 'react';

function ColorDisplay({ color }) {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: color,
        margin: '20px auto',
        border: '1px solid #000',
      }}
    >
      <p style={{ color: '#000', paddingTop: '80px' }}>
        Color: {color}
      </p>
    </div>
  );
}

export default ColorDisplay;