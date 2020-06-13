import React from 'react'
import './index.css'


const ProductListing = (props) => {
  const qty = (availability) => {
    if(availability > 20) {
      return '20+ in stock'
    } else if(availability < 5){
      return "Less than 5 left, order yours now"
    } else {
      return availability + ' available'
    }
  }
  return (
    <a href={`/products/${props.code}`}>
      <div className='box'>

      <div>{props.title}</div>
      <div><img width= '100%' height= 'auto' src={props.image}/></div>
      <div className='qty'>{qty(props.availability)}</div>

  
      <div className='price'>£{props.price}</div>
      <div className='button'><button onClick= {props.addToBasket}>Add To Basket</button></div>

    </div>
    </a>
  )
};

export default ProductListing;
