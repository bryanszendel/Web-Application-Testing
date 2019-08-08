import React, { useState } from 'react';
import './App.css';

import Dashboard from './Dashboard'
import Display from './Display'

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard balls={balls} strikes={strikes} setBalls={setBalls} setStrikes={setStrikes}/>
    </div>
  );
}

export default App;
