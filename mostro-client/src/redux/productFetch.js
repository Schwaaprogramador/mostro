import axios from 'axios';
import { getProduct } from './productSlice';


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