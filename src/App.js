import React from 'react';
import './resources/styles.css';
//import classname from filename
import Header from './components/Header';

function App() {
  return (
    <div className="App" style = {{height:"1500px", background:'cornflowerblue'}}>
      Hello There, General Kenobi

    <div>
    <Header/>
    </div>

    </div>



  );
}

export default App;
