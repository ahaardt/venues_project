import React from 'react';
import './resources/styles.css';
//import classname from filename
import Header from './components/Header';
import Featured from './components/featured/';
import TimeUntil from './components/featured/';

function App() {
  return (
    <div className="App" style = {{height:"1500px", background:'cornflowerblue'}}>

    <div>
    <Header/>
    <Featured/>
    <TimeUntil/>
    </div>

    </div>



  );
}

export default App;
