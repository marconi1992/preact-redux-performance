import { configureStore } from '@reduxjs/toolkit';
import reducer from "./routes/home/slice";

export default configureStore({
    reducer,
  })