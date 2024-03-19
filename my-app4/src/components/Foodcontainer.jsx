import React from 'react'
import './Foodcontainer.css'
const foodData = [
    {
        name: "Boilded Egg",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/wT910f4Z/Ellipse-1.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/2y7VChy0/Ellipse-1-1.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/VL4dTq36/Ellipse-1-2.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/VL4dTq36/Ellipse-1-2.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/cCSvqXxK/Ellipse-1-4.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://i.postimg.cc/pT8m1gHb/Ellipse-1-5.png",
        type: "dinner",
    },
];
function Foodcontainer({search}) {
  // const filteredData = foodData.filter((foodItem) => {
  //   foodItem.name.toLowerCase().includes(search.toLowerCase())
  // });
  
  return (
    <div className='foodbody'>
      {foodData.map((foodItem, index) => (
        <div className='foodcard' key={index}>
          <img src={foodItem.image} alt={foodItem.name}/>
          <div className='dicedetails'>
            <h2>{foodItem.name}</h2>
            <ul>
              <li>Price: {foodItem.price}</li>
              <li>{foodItem.text}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Foodcontainer
