import Axios from "axios";
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./userActionTypes";

let registerUser = (user,history) =>{
    return async(dispatch) => {
        try{
            dispatch({
                type : REGISTER_USER_REQUEST
            });
            let config = {
                headers : {
                    'content-Type' : 'application/json'
                }
            }
            let response = await Axios.post(`/user/register` , JSON.stringify(user), config);
            dispatch({
                type : REGISTER_USER_SUCCESS,
                payload : response.data
            });
            history.push(`/login`);
        }
        catch(err){
            let errorList = err.response.data.errors;
            console.error(errorList);
            dispatch({
                type : REGISTER_USER_SUCCESS,
                payload : errorList
            });
        }
    };
};

export {registerUser};