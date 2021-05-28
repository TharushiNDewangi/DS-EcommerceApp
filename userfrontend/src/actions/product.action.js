
import axios from "../helpers/axios"
import { productConstants } from "./constants";
//use slug to fetch data instead of id
export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product/${slug}`);
        
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data 
            });
        }else{
            // dispatch({
            //     type:
            // })
        }
        console.log(res);
    }
}
//fetch product details by id
export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({type : productConstants.GET_PRODUCT_REQUEST});
        let res;
        try{
            const { productid } = payload.params;
            res = await axios.get(`/products/${productid}`);
            console.log(res);
            dispatch({
                type: productConstants.GET_PRODUCT_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        }catch(error){
            console.log(error);
                dispatch({
                    type: productConstants.GET_PRODUCT_FAILURE,
                    payload: { error:res.data.error}
                });
            }
        }
    }