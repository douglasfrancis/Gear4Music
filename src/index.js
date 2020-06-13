import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListing from './ProductListing';

const addToBasket = (id) => {
  alert('Hey, thanks for adding Product ID #' + id + ' to your basket!');
};

const init = () => {
  const listingsPage = document.getElementById('container');

  if (listingsPage) {
      ReactDOM.render(<ProductListing addToBasket={addToBasket} />, listingsPage);
  }
};

document.addEventListener('DOMContentLoaded', init);
