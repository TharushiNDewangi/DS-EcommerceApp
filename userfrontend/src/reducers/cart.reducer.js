import { cartConstants } from "../actions/constants";

const initState = {
    
   cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'harry potter',
        //     img: 'harry.jpg',
        //     price: 1000,
        //     qty: 10,
        // }
    },
    
};

export default (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action.payload.cartItems
            }
     }
    return state;
}