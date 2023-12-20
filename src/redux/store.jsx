import { ConfigureStore } from '@reduxjs/toolkit/query/react';
import reducers from '@reduxjs/toolkit'
export default   ConfigureStore({
  reducers: {
    counter: counterReducer,
  },
});
