import React from 'react';

const input = (props) => {
  const inputStyle = {
    border: '2px solid grey'
  }

  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        value={props.username}
        onChange={props.changed} />
    </div>
  );
};

export default input;