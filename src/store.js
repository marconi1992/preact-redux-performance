import { configureStore } from '@reduxjs/toolkit';
import reducer from "./routes/redux/slice";

export default configureStore({
    reducer,
  })