import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
import wishlistSlice from "../context/WishlistSlice";
import cartSlice from "../context/cartSlice"; 


const preloadedState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || [], 
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice, 
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


store.subscribe(() => {
  localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
  localStorage.setItem('cart', JSON.stringify(store.getState().cart)); 
});
