import React from 'react'
import './index.css'

const ProductListing = (props) => {
  
  return (
    <div className='box'>

      <div>title {props.title}</div>
      <div><img src={props.image}/></div>
      <div>availability {props.availability}</div>
      <div>price {props.price}</div>
      <div className='button'><button onClick= {props.addToBasket}>Add To Basket</button></div>

    </div>
  )
};

export default ProductListing;
