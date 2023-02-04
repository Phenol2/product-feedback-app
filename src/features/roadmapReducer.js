import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data.js';

//let product = require('../data/data.json');

let { productRequests } = products[0];

let planned = productRequests.filter((product) => {
  return product.status === 'planned';
});

let inProgress = productRequests.filter((product) => {
  return product.status === 'in-progress';
});

let live = productRequests.filter((product) => {
  return product.status === 'live';
});
/* console.log(planned);
console.log(inProgress)
console.log(live) */

let initialState = {
  planned,
  inProgress,
  live
};

let roadmapSlice = createSlice({
  name: 'roadmap',
  initialState,
  reducers: {
    getlow: () => {},
  },
});

//export const { product } = productSlice.actions
export default roadmapSlice.reducer;
