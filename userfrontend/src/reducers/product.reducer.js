import { productConstants } from "../actions/constants"


const initState = {
    products:[],
    productsByPrice: {
        under1k:[],
        under10k:[]
    },
    productDetails:{},
    loading:false
}

export default (state = initState, action )=>{
    switch(action.type){
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products:action.payload.products,
                productsByPrice:{
                    ...action.payload.productsByPrice
                    
                }
                
            }
            
            break;
            case productConstants.GET_PRODUCT_REQUEST:
                state={
                    ...state,
                    loading:true
                }
                break;
            case productConstants.GET_PRODUCT_SUCCESS:
                    state={
                        ...state,
                        loading:false,
                        productDetails:action.payload.productDetails
                    }
                    break;

            case productConstants.GET_PRODUCT_FAILURE:
                        state={
                            ...state,
                            loading:false,
                            error:action.payload.console.error
                        }
                        break;
    }
    return state;
}