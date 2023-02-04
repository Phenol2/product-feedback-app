import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data.js';

//let product = require('../data/data.json');

let { productRequests } = products[0];

let suggestion = productRequests.filter((product) => {
  return product.status === 'suggestion';
});
console.log(suggestion);
//console.log(productRequests)

let initialState = {
  products: suggestion,
};

let productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getlow: () => {},
  },
});

//export const { product } = productSlice.actions
export default productSlice.reducer;
