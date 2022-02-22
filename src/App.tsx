import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(previousCount => previousCount + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}
