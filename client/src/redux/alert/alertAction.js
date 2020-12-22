import {REMOVE_ALERT, SET_ALERT} from "./alertActionTypes";
import {v4 as uuid} from "uuid";

let setAlert = (message, color) => {
    return() => {
        try{
            let id = uuid();
            dispatchEvent({
                type:SET_ALERT,
                payload: {message, color, id}
            });
            setTimeout(() => {
                dispatchEvent({
                    type : REMOVE_ALERT, 
                    payload: {id}});
            }, 3000);
        }
        catch(err){
            console.log(err);
        }
    };
};

let removeAlert = (id) => {
    return(dispatch) => {
        try{
            dispatch({
                type: REMOVE_ALERT,
                payload: {id}
            });
        }
        catch(err){
            console.log(err);
        }
    };
};

export {setAlert, removeAlert};