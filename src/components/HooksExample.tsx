import React, { useState } from 'react';
import './HooksExample.css';

const HooksExample: React.FC = () => {
  // Basic state
  const [count, setCount] = useState<number>(0);
  
  // State with object
  const [user, setUser] = useState<{name: string, age: number}>({
    name: 'John',
    age: 25
  });
  
  // State with array
  const [items, setItems] = useState<string[]>([]);

  // Function to update count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Using previous state
  };

  // Function to update user object
  const updateUser = () => {
    setUser(prevUser => ({
      ...prevUser,  // Spread operator to keep existing properties
      age: prevUser.age + 1
    }));
  };

  // Function to add item to array
  const addItem = () => {
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div className="hooks-example">
      <h2>useState Examples</h2>
      
      <div className="example-section">
        <h3>Basic State</h3>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>

      <div className="example-section">
        <h3>Object State</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={updateUser}>Increase Age</button>
      </div>

      <div className="example-section">
        <h3>Array State</h3>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HooksExample; 