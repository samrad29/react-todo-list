import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  // State to store the count value
  const [count, setCount] = useState<number>(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter; 