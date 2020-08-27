import React from 'react';


function DisplayComponent(props) {
  return (
    <div >
      <span>{props.time.s} </span>&nbsp;
    </div>
  );
}

export default DisplayComponent;
