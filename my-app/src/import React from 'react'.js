import React from 'react'

const products = [
    {title: 'React', id:1},
    {title: 'Angular', id:2},  
    {title: 'Angular', id:3}
];

function Mybutton() {
    const list = products.map(product =>
      <li key={product.id}>{product.title}</li>
    );

    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
}

export default Mybutton;