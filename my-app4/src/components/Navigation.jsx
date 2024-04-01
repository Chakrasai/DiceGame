import React from 'react'
import { useState } from 'react';
import './Navigation.css';
import Details from './details';
function Navigation() {
  const [search,setsearch] = useState("");
  const handlesearch = ((event) => {
      setsearch(event.target.value);
  })
  return (
    <nav>
    <div className='nav-container'>
        <div className='nav-top'>
        <div className='brand-logo'><img src='FoodyZone.png' alt='logo'/></div>
        <div className='search'> 
        <input 
        type="text" 
        placeholder="Search.."
        value = {search}
        onChange = {handlesearch}/>
        <button onClick={handlesearch}>search</button></div>
    </div>
    <Details /> 
    </div>
    </nav>
  )
}

export default Navigation
