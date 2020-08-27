import React from 'react';


function BtnComponent(props) {
  return (
    <div >
      <button className ="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Start
        </button> 
        <button className ="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>Stop
      </button> 
    </div>
  );
}

export default BtnComponent;
