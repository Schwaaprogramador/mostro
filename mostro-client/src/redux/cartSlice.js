import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    items: [],
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action)=>{
            console.log(action.payload)
            state.items.push(action.payload)
        },
        deleteCart: ()=>{},
        openCart: (state)=>{
            state.status = true;
        },
        closeCart:(state)=>{
            state.status = false;
        }
    }
})

export const { addCart, deleteCart, openCart, closeCart} = cartSlice.actions;


export default cartSlice.reducer;