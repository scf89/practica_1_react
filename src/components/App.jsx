import React, { useState } from 'react';
import ShowCount from './ShowCount/ShowCount';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div className="app">
      <h1>Contador de Clicks</h1>
      <ShowCount count={count} />
      <button onClick={incrementCount}>Incrementar</button>
      <button onClick={decrementCount}>Disminuir</button>
    </div>
  );
}

export default App;
