import axios from "../helpers/axios";
import { cartConstants } from "./constants";
import store from "../store";
import ProductStore from "../containers/ProductListPage/ProductStore";

//get cart items.
const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axios.post(`/user/getCartItems`);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};//add items to the cart
export  const addToCart = (product) =>{
  return async dispatch =>{
    const { cartItems } = store.getState().cart;
    //console.log('action::products', products);
    const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + 1) : 1;
    localStorage.setItem('cart',JSON.stringify(cartItems )) ;  
    cartItems[product._id] ={
      ...product,
      qty
    };
    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: { cartItems }
    });
   }
}


