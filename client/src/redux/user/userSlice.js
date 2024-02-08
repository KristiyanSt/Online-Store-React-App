import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./userService.js";

export const signUpUser = createAsyncThunk(
    "auth/signup",
    async (userData, thunkApi) => {
        try {
            return await authService.signUp(userData);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });

export const signInUser = createAsyncThunk(
    "auth/signin",
    async (userData, thunkApi) => {
        try {
            return await authService.signIn(userData);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });

export const getUserWishlist = createAsyncThunk(
    "auth/getWishlist",
    async (thunkApi) => {
        try {
            return await authService.getWishlist()
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });
export const addToWishlist = createAsyncThunk(
    "auth/addToWishlist",
    async (productId, thunkApi) => {
        try {
            return await authService.addToWishlist(productId);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    });

export const getCart = createAsyncThunk(
    'auth/getCart',
    async (thunkApi) => {
        try {
            return await authService.getCart();
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
export const addToCart = createAsyncThunk(
    "auth/addToCart",
    async (productData,thunkApi) => {
        try {
            return await authService.addToCart(productData);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)
export const removeFromCart = createAsyncThunk(
    "auth/removeFromCart",
    async (productId,thunkApi) => {
        try {
            return await authService.removeFromCart(productId);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)
const getUserFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserFromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                //User created successfully
                //TODO notify message when notification component is created
                console.log('success')
                localStorage.setItem('token', JSON.stringify(action.payload.token));
                localStorage.setItem('user', action.payload);
            }
        }).addCase(signUpUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                //action.error
                //TODO notify message when notification component is created
                console.log('error')
            }
        }).addCase(signInUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(signInUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                //User sign in successfully
                //TODO notify message when notification component is created
                console.log('success')
                localStorage.setItem('token', JSON.stringify(action.payload.token));
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        }).addCase(signInUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            //TODO remove user/token from localStorage
            if (state.isError === true) {
                //action.error
                //TODO notify message when notification component is created
                console.log('error')
            }
        }).addCase(getUserWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(getUserWishlist.fulfilled, (state, action) => {
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
            state.wishlist = action.payload.wishlist;
        }).addCase(getUserWishlist.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.wishlist = action.payload.wishlist;
            state.message = "Product added to wishlist";
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(getCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cart = action.payload;
        }).addCase(getCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addToCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cart = action.payload;
        }).addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(removeFromCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(removeFromCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cart = action.payload;
        }).addCase(removeFromCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
    }
});

export default authSlice.reducer;