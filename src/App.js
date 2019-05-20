import React from 'react';
import './resources/styles.css';
//import classname from filename
import Header from './components/Header';
import Featured from './components/featured/';
import TimeUntil from './components/featured/';
import VenueInfo from './components/venueinfo';

function App() {
  return (
    <div className="App">

    <div>
    <Header/>

    <TimeUntil/>
    <VenueInfo/>
    </div>

    </div>



  );
}

export default App;
