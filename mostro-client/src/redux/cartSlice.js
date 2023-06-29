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
            let newItem = action.payload;
            let itemCart = state.items.find( item => item.id === action.payload.id )

            //si ya existe un itemCart, aumentarle la cantidad.   
            if(itemCart){
                itemCart.cantidad =  itemCart.cantidad + 1    
            } 
            // Si el estado esta vacio, agregar el que llega por parametro
            else {
                state.items.push(newItem)                           
            }
  
        },
        deleteCart: (state, action)=>{
            
            let itemId = action.payload.id;
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                // Si se encuentra el item, eliminarlo del carrito
                state.items.splice(itemIndex, 1);
            }
        },
        restarCantidad: ()=>{},
        openCart: (state)=>{
            state.status = true;
        },
        closeCart:(state)=>{
            state.status = false;
        }
    }
})

export const { addCart, deleteCart, openCart, closeCart , restarCantidad} = cartSlice.actions;


export default cartSlice.reducer;