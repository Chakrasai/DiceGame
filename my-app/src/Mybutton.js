import React from 'react'
import {useState} from 'react';
// const user = {
//     name: 'sai',
//     imageurl: 'https://picsum.photos/200/300',
//     imagesize: '200px',
// };
const products = [
    {title: 'React', id:1},
    {title: 'Angular', id:2},  
    {title: 'Angular', id:3}
];


function Mybutton() {
        
            {/* <button>Click me</button>
            <h1>{user.name}</h1>
      <img className='avatar'
      src={user.imageurl}
      style={{width: user.imagesize,height: user.imagesize}}
      /> */}
    const l = products.map(product =>
      <li key={product.id}>{product.title}</li>
      );
      return(
    <div>
       <ul>{l}</ul>
      </div>)
};
export default Mybutton;

function Button(){
  const [count,setcount] = useState(0); 
  function handleclick(){
    setcount(count+1);
  }
  return (
    <bottun onClick={handleclick}>
      clicked {count} times ;
    </bottun>
  );
}