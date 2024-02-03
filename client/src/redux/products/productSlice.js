import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService.js";

export const getAllProducts = createAsyncThunk(
    "product/get",
    async (thunkApi) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });
export const addToWishlist = createAsyncThunk(
    "product/wishlist",
    async (productId,thunkApi) => {
        try {
            return await productService.addToWishlist(productId);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });

const initialState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;

        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message = "Product added to wishlist";
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
});

export default productSlice.reducer;