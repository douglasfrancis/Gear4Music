import React from 'react'
import './index.css'
import image from './Guitar.jpg'

const ProductListing = (props) => {
  
  return (
    <a href='/products/{code}'>
      <div className='box'>

      <div>{props.title}</div>
      <div><img src={image}/></div>
      <div>{props.availability}</div>
      <div>{props.price}</div>
      <div className='button'><button onClick= {props.addToBasket}>Add To Basket</button></div>

    </div>
    </a>
  )
};

export default ProductListing;
