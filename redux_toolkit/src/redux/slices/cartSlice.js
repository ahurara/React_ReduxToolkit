import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
});

// Define an input selector to extract the cart items from the state
const selectCartItems = (state) => state.cart;

// Define the output selector to compute the total and return transformed data
export const getItemSelector = createSelector(
    [selectCartItems],
    (cartItems) => {
        // Apply transformation logic here if needed
        const total = cartItems.reduce((accumulator, item) => {
            return item && item.price ? accumulator + item.price : accumulator;
        }, 0);
        return { cartItems, total }; // Return the transformed result
    }
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
