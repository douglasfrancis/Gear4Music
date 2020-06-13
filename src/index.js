import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListing from './ProductListing';
import items from './products.json'

const addToBasket = (id) => {
  alert('Hey, thanks for adding Product ID #' + id + ' to your basket!');
};

const init = () => {
  const listingsPage = document.getElementById('container');

  if (listingsPage) {
    return <ProductListing addToBasket={addToBasket} />
  }
};

function App() {

  return <div className='products'>

              {items.items.map((item, index) => <ProductListing addToBasket={addToBasket} id= {index} title={item.title} image={item.image} availability={item.stock} price={item.price} code={item.code} delivery={item.delivery_estimate}/> )}
              
          </div>

};
ReactDOM.render(<App />, document.getElementById('container'));

document.addEventListener('DOMContentLoaded', init);
