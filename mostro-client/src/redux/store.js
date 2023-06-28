import {configureStore} from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice.js";
import productSlice from "./productSlice.js";
import cartSlice  from "./cartSlice.js";


const store = configureStore({
    
    reducer:{
        navbarStatus: navbarSlice,
        products: productSlice,
        cart: cartSlice
    }
})


export default store;