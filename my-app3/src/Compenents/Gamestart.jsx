import React from 'react'
import Totalscore from './Totalscore';
import Selectnum  from './Selectnum';
import './Gamestart.css';
import Roledice from './Roledice';
import { useState } from 'react';
import Rules from './Rules';
function Gamestart() {
  const [error, seterror] = useState('');
  const [score, setscore] = useState(0);
  const [selectnum,setselectnum] = useState(0);
  const [dice, setdice] = useState(1);
  const [showrules,setshowrules] = useState(false);

  
  const generateRandom = (min,max) => {
    // console.log(Math.floor(Math.random() * (max - min + 1) + min));
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const roledice = () => {
  if(!selectnum){
    return;
  }
  setselectnum('');
    const random = generateRandom(1,6);
    setdice((prev) => random);
    if(random === selectnum){
      setscore((prev) => prev + selectnum);
    }else{
      setscore((prev) => prev-2)
    }
}
  const resetscore = () => {
    setscore(0);
  }
  const toggleshowrules = () => {
    setshowrules((prev) => !prev);

  }

  return (
    <div className='gamecontainer'>
      <div className='score_selecter'> 
      <div><Totalscore score = {score} error = {error}/> </div>
      <div><Selectnum 
      selectnum = {selectnum}
      setselectnum = {setselectnum}/></div>
    </div>
     <Roledice 
     dice = {dice}
     roledice={roledice}/>
     <div className='rulebuttons'>
      <button onClick={resetscore}>Reset</button>
      <button onClick={toggleshowrules}>{showrules ? "hide" : "show"} Rules</button>
     </div>
    { showrules && <Rules />}
    </div>
  )
}

export default Gamestart
