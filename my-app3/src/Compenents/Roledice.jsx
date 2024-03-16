import './Roledice.css';
import React, { useState } from 'react';
function Roledice({roledice,dice}) {
 

  return (
      <dicecontainer>
        <div className='dice' onClick={roledice}><img src={`d${dice}.png`}/></div>
        <p>click on dice</p>

      </dicecontainer>

  )
}
export default Roledice;
