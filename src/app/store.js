// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
import wishlistSlice from "../context/WishlistSlice";

// Load initial state from local storage
const preloadedState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Save state to local storage on changes
store.subscribe(() => {
  localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
});
