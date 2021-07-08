import React from 'react';

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a `hit` is recorded.
// a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

const Dashboard = ({balls, strikes, setBalls, setStrikes, hit, foul, strikeCounter, ballCounter}) => {
  
  return (
    <div>
      <button onClick={() => strikeCounter()}>Add Strike</button>
      <button onClick={() => ballCounter()}>Add Ball</button>
      <button onClick={() => foul()}>Foul</button>
      <button onClick={() => hit()}>BASE HIT</button>
    </div>
  )
}

export default Dashboard;

