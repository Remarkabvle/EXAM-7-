// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchProduct = createAsyncThunk(
//   'product/fetchProduct',
//   async (productId) => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch product.');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error('Network error occurred.');
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'product',
//   initialState: {
//     product: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProduct.pending, (state) => {
//         state.status = 'loading';
//         state.error = null; // Clear any previous errors
//       })
//       .addCase(fetchProduct.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.product = action.payload;
//         state.error = null; // Clear any previous errors
//       })
//       .addCase(fetchProduct.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default productSlice.reducer;
