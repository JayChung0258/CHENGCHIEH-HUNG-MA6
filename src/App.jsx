import { useState } from 'react';
import Cell from './Cell';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Function to update count based on cell activation
  const updateCount = (isActive) => {
    setCount(prevCount => prevCount + (isActive ? 1 : -1));
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <div className="container">
        <Cell updateCount={updateCount} />
        <Cell updateCount={updateCount} />
        <Cell updateCount={updateCount} />
        <Cell updateCount={updateCount} />
      </div>
    </>
  );
}

export default App;
