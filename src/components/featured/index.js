import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div style = {{position: "relative"}}>

        <Carrousel/>
        <div className="title_name">
            <div className ="wrapper">
                Ragnarok Tours
            </div>
        </div>

        <TimeUntil/>
    </div>
  )
}

export default Featured;