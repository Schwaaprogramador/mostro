import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status:false
}


export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        showNavbar: (state)=>{
            state.status = true; 
            //Se puede mutar directamente el estado. Porque , no se muta realmente, por detras utiliza una libreria llamada 'immer'//

        },
        closeNavbar: (state)=>{
            state.status = false;
        }
    }
})
export const { showNavbar, closeNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;