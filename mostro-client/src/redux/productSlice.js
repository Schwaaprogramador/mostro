import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[{
        id:1,
        nombre: 'BASIC ELEMENTS',
        precio: 'COP 75.000',
        description: 'Elaborada en tela licra algodón color azul rey, con estampado en alta densidad del mismo tono de la tela y el logo estampado en plastisol plano color naranja.',
        color: 'azul',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/AzulFrente_iokvhs.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/AzulDetalleFrente_iiibhr.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/AzulEspalda_hhxoqu.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/AzulDetalleInferiorIzq_uz3mer.jpg']
    },
    {   
        id:2,
        nombre: 'BASIC ELEMENTS',
        precio: 'COP 75.000',
        description: 'Elaborada en tela licra algodón color blanco, con estampado en alta densidad del mismo tonode la tela y el logo estampado en plastisol plano color naranja.',
        color: 'blanca',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaFrente_gsna4w.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaEspalda_aifylj.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaDetalleFrente_lqee3n.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaDetalleInferiorIzq_wxpb29.jpg']
    },
    {   
        id:3,
        nombre: 'BASIC ELEMENTS',
        precio: 'COP 75.000',
        description: 'Elaborada en tela licra algodón color negro, con estampado en alta densidad del mismo tono de la tela y el logo estampado en plastisol plano color mostaza.',
        color: 'negra',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraFrente_rdieha.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraEspalda_gwjl2x.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraDetalleFrente_dmyhds.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraDetalleInferiorIzq_h8jbo7.jpg']
    },
    {   
        id:4,
        nombre: 'BASIC ELEMENTS PLACA',
        precio: 'COP 75.000',
        description: 'Elaborada en tela licra algodón color negro, con aplique en papel foil color tornasol.',
        color: 'negra',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraFrente-2_crhlni.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraEspalda-2_pw7t59.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840802/mostro-imagenes/NegraInferior_nuh8dy.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraDetalle_i2qggq.jpg']
    },
    {   
        id:5,
        nombre: 'STEEZ TIL DEF',
        precio: 'COP 65.000',
        description: 'Elaborada en tela licra algodón color blanco, con estampado en alta densidad en el frente y estampado textil en la parte de atrás color verde antioquia.',
        color: 'blanca',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaFrente-2_m8uygf.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/BlancaEspalda-2_dswz5z.jpg', 
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/DetalleFrente_bxger3.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840800/mostro-imagenes/FrenteDetalle2_fhzhax.jpg']
    },
    {   
        id:6,
        nombre: 'STEEZ TIL DEF',
        precio: 'COP 65.000',
        description: 'Elaborada en tela licra algodón color blanco, con estampado en alta densidad en el frente y estampado textil en la parte de atrás color verde antioquia.',
        color: 'negra',
        talla: '',
        imagenes: [ 'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraFrente332_gwwdri.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraEspalda2_x0gmuf.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840802/mostro-imagenes/NegroDetalleFrente332_azka2q.jpg',
                    'https://res.cloudinary.com/drnryofoj/image/upload/v1687840801/mostro-imagenes/NegraDetalleFrente2_ztriin.jpg']
        }
    ],
    productDetail: {},
    colores:[]
    
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