import axios from "../helpers/axios";
import { categoryConstansts } from "./constants";
//get all category from db
export const getAllCategory = ()=>{
    return async dispatch => {

        dispatch({ type:categoryConstansts.GET_ALL_CATEGORIES_REQUEST});
        const res = await axios.get(`catogory/getcat`);
        console.log('dewwwwww');
        console.log(res);
       
        if(res.status === 201){
            console.log('dewwwwww222');
            const { categorylist } = res.data;
             dispatch({
                type:categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload:{ categories: categorylist }
            });
        }else{
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
               payload:{ error:res.data.error } 
            });
        }
    
    }
}


