import React, {useState} from 'react';

function App() {
  const[count, setCount] = useState(0);
  return (
    <div style={{textAlign:'center', marginTop: '50px'}}>
      <h1>Counter: {count} </h1>
      <button onClick= {() => setCount(count + 1)}>Increment</button>
      <br></br><br></br>
      <button onClick= {() => setCount(count -1)}>Decrement</button>
      <br></br><br></br>
      
      <button onClick= {() => setCount(count + 3)}>Incre3</button>
      <br></br><br></br>
      <button onClick= {() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;