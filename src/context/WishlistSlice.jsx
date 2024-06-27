// context/WishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    like: (state, action) => {
      const exists = state.find(product => product.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      } else {
        return state.filter(product => product.id !== action.payload.id);
      }
    },
  },
});

export const { like } = wishlistSlice.actions;

export default wishlistSlice.reducer;
