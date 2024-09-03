import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../Redux/Form/inputSlice';

const store = configureStore({
  reducer: {
    data: inputReducer
  }
});

export default store;
