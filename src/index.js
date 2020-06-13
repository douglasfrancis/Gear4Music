import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListing from './ProductListing';

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
            <ProductListing addToBasket={addToBasket} title='Guitar 1' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 2' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 3' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 4' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 5' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 6' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 7' image='Guitar.jpg' availability='5 available' price='£550' />
            <ProductListing addToBasket={addToBasket} title='Guitar 8' image='Guitar.jpg' availability='5 available' price='£550' />

          </div>

};
ReactDOM.render(<App />, document.getElementById('container'));

document.addEventListener('DOMContentLoaded', init);
