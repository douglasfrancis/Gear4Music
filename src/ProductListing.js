import React from 'react'
import './index.css'


const ProductListing = (props) => {
  const qty = (availability) => {
    if(availability > 20) {
      return '20+ in stock'
    } else if(availability < 5 && availability > 0){
      return "Less than 5 left, order yours now"
    } else if(availability === 0){
      return "Out of stock right now"
    } else {
      return availability + ' available'
    }
  }

  const delivery = (date) => {
    const today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const yyyy = tomorrow.getFullYear();
    tomorrow = yyyy + '-' + mm + '-' + dd;

    if(date == tomorrow) {
      return "Order now, get it tomorrow"
    } else {
      return 'Order now, get it by ' + date
    }
  };

  return (
    <a href={`/products/${props.code}`}>
      <div className='box'>

      <div>{props.title}</div>
      <div><img width= '100%' height= 'auto' src={props.image}/></div>
      <div className='qty'>{qty(props.availability)};</div>  
      <div className='delivery'>{delivery(props.delivery)}</div>
      <div className='price'>£{props.price}</div>
      <div className='button'><button onClick= {props.addToBasket}>Add To Basket</button></div>

    </div>
    </a>
  )
};

export default ProductListing;
