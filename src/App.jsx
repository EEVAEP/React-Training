import React, { useState } from 'react';
import ColorDisplay from './ColorDisplay';
function App() {
  const [color, setColor] = useState('#ffffff');
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Color-Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter a task"
      />
      <ColorDisplay color= {color}/>
      
    </div>
  );
}

export default App;