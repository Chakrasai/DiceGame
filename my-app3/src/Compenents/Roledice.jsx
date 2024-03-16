import styled from 'styled-components';
import './Roledice.css';
import React, { useState } from 'react';
function Roledice({roledice,dice}) {
    // const [dice, setdice] = useState(1);
    // const generateRandom = (min,max) => {
    //     // console.log(Math.floor(Math.random() * (max - min + 1) + min));
    //     return Math.floor(Math.random() * (max - min + 1) + min);
   

  return (
      <dicecontainer>
        <div className='dice' onClick={roledice}><img src={`d${dice}.png`}/></div>
        <p>click on dice</p>

      </dicecontainer>

  )
}
export default Roledice;
// const dicecontainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;

//     .dice{
//         cursor: pointer;
//         img{
//             width: 200px;
//             height: 200px;
//         }

//     }
//     p{
//         font-size: 20px;
//         font-weight: bold;
//     }
//     `;                  