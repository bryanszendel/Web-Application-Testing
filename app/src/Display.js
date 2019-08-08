import React from 'react';

const Display = ({strikes, balls}) => {
  return (
    <div>
      <div>{strikes}</div>
      <div>{balls}</div>
    </div>
  )
}

export default Display;