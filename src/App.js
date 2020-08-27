import React, { useState } from 'react';
import DisplayComponent from './component/DisplayContent';
import BtnComponent from './component/BtnComponent';
import './App.css';

function App() {
  const [time, setTime]=useState({s:0});
  const [interv, setInterv] = useState();

  var  updatedS =time.s;

  const start = () => {
    time.s=0;
    updatedS =0;
    clearInterval(interv);
    run();
    setInterv(setInterval(run,1000));
  }

 

  const run = ()=> {
    updatedS++;
    return setTime({ s:updatedS});
  }
  const stop = () => {
    clearInterval(interv);
   
  };
  return (
    <div className="main-section">
    <div className="clock-holder">
      <div className="stopwatch ">
          <DisplayComponent time={time} />
          <BtnComponent stop={stop} start={start}/>
      </div>

    </div>
    </div>
  );
}

export default App;
