import React from 'react'
import './index.css'


const ProductListing = (props) => {
  
  return (
    <a href={`'/products/${props.code}'`}>
      <div className='box'>

      <div>{props.title}</div>
      <div><img width= '50' height= 'auto' src={props.image}/></div>
      <div>{props.availability}</div>
      <div>£{props.price}</div>
      <div className='button'><button onClick= {props.addToBasket}>Add To Basket</button></div>

    </div>
    </a>
  )
};

export default ProductListing;
