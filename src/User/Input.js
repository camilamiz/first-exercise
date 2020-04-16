import React from 'react';

const input = (props) => {
  return (
    <div>
      <input type="text" name={props.username} onChange={props.changed}/>
    </div>
  );
};

export default input;