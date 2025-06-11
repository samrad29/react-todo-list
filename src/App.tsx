import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store our todos
  const [todos, setTodos] = useState<string[]>([]);
  // State to store the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Function to remove a todo
  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>My Todo List</h1>
        
        {/* Input field for new todos */}
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        {/* List of todos */}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
