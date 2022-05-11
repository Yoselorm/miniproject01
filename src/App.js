import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navigator from './Navigation/Navigator';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [workers, setworker] = useState([
    {
      name: 'Selorm',
      age: 21,
      occupation: "Software engineer",
      id: uuidv4()
    },
    {
      name: 'Ayornu',
      age: 22,
      occupation: "IT specialist",
      id: uuidv4()
    }
  ])

  const addWorker = (worker) => {
    let newWorker = { ...worker, id: uuidv4() };
    setworker([...workers, newWorker]);
  }
  return (
    <div className="App">
      <Navigator workersData={workers} addWorker={addWorker} />
    </div>
  );
}

export default App;
