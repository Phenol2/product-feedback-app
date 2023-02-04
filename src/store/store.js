import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productReducer';
import roadmapReducer from '../features/roadmapReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
    roadmap: roadmapReducer
  },
});
