import {configureStore} from "@reduxjs/toolkit"
import navbarSlice from "./navbarSlice.js";


const store = configureStore({
    reducer:{
        navbarStatus: navbarSlice,
    }
})


export default store;