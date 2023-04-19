import axios from 'axios';
import { getProduct, postProduct } from './productSlice';


export const fetchAllproducts = () => (dispatch) => {
    axios.get('http://localhost:3001/product')
    .then((response)=>{
        dispatch(getProduct(response.data.data  ));
    })
    .catch((error)=>console.log(error))
}   


export const getProducts = ()=> {
    return async function(dispatch){
        const product = await axios.get("http://localhost:3001/product");
        return dispatch(getProduct(product.data));
    };
};

//------------POST PRODUCT-------------------
export const postProducts = (payload)=>{
    return async function(dispatch){
        const createdProducts = await axios.post('http://localhost:3001/product', payload);
        console.log(createdProducts);
        console.log(createdProducts.data);
        return dispatch(postProduct(createdProducts.data));

    }
}
