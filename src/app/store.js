import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../features/Carousel_1slice'



export const store = configureStore({
  reducer: {
     images :imagesReducer
  },
});
