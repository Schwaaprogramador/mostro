import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    postProducts:'',
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
        getProduct: (state, action)=> {
            state.products = action.payload
        },
        postProduct: (state, action) => {
            state.postProducts = action.payload
        }
    }
})
export const { getProduct, postProduct } = productSlice.actions;

export default productSlice.reducer;