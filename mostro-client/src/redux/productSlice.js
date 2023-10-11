import { createSlice } from "@reduxjs/toolkit";
import {productos} from './productos.js';

const initialState = {
    products: productos,
    productDetail: {},
    colores:[],
    
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
        getDetail: (state, action ) => {
            
            const nombre = action.payload.nombre;
            const color = action.payload.color;
            const nuevoDetail = state.products.filter( product =>  product.nombre === nombre && product.color === color )
            
            const nuevosColores = state.products.filter( product =>  product.nombre === nombre)
            state.colores = nuevosColores;
            state.productDetail = nuevoDetail;
        },
        
    }
})
export const { getDetail } = productSlice.actions;

export default productSlice.reducer;