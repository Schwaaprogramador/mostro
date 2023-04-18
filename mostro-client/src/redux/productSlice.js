import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
        getProduct: (state, action)=> {
            state.products = action.payload
        }
    }
})
export const { getProduct } = productSlice.actions;

export default productSlice.reducer;