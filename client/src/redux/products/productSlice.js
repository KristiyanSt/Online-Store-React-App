import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService.js";

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (thunkApi) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });
    
export const addToWishlist = createAsyncThunk(
    "products/wishlist",
    async (productId,thunkApi) => {
        try {
            return await productService.addToWishlist(productId);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });

export const getSingleProduct = createAsyncThunk(
    "products/getSingleProduct",
    async(productId, thunkApi) => {
        try {
            return productService.getSingleProduct(productId);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

const initialState = {
    products: "",
    singleProduct: "",
    message: "",
    isError: false,
    isSuccess: false,
    isLoading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload;
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
        }).addCase(getSingleProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(getSingleProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleProduct = action.payload;
        }).addCase(getSingleProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
    }
});

export default productSlice.reducer;