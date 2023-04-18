import {configureStore} from "@reduxjs/toolkit"
import navbarSlice from "./navbarSlice.js";
import productSlice from "./productSlice.js";


const store = configureStore({
    reducer:{
        navbarStatus: navbarSlice,
        products: productSlice,
    }
})


export default store;