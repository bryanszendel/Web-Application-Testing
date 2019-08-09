import React, { useState } from 'react';
import './App.css';

import Dashboard from './Dashboard'
import Display from './Display'

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const strikeCounter = () => {
    if (strikes + 1 >= 3) {
      setStrikes(0);
      setBalls(0)
    }
    else setStrikes(strikes +1);
  }
  
  const ballCounter = () => {
    if (balls +1 >= 4) {
      setBalls(0);
      setStrikes(0);
    }
    else setBalls(balls +1);
  }
  
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  };

  const foul = () => {
    if ( strikes < 2 ) setStrikes(strikes +1);
    else if (balls < 3) setBalls(balls +1);
  }
  

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard 
        hit={hit} 
        balls={balls} 
        strikes={strikes} 
        ballCounter={ballCounter} 
        strikeCounter={strikeCounter}
        foul={foul}
      />
    </div>
  );
}

export default App;
