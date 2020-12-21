import Axios from "axios";
import { REGISTER_USER_REQUEST } from "./userActionTypes";

let registerUser = (user) =>{
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
            let response = await Axios.post(`/user/register`);
        }
        catch(err){

        }
    };
};