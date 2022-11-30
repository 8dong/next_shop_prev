import { configureStore } from '@reduxjs/toolkit';

import cartStateSlice from './cartStateSlice';

const store = configureStore({
  reducer: {
    cart: cartStateSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
