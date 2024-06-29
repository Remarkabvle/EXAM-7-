import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
import wishlistSlice from "../context/WishlistSlice";
import cartSlice from "../context/cartSlice"; // Import the cart slice

// Load initial state from local storage
const preloadedState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from local storage
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice, // Add cart slice to the store
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Save state to local storage on changes
store.subscribe(() => {
  localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
  localStorage.setItem('cart', JSON.stringify(store.getState().cart)); // Save cart state to local storage
});
