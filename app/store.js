import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import basketReducer from '../slices/basketSlice'

export const store = configureStore({
  reducer: {
    
    basket : basketReducer,

  },
});
