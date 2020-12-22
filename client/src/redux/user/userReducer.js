import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./userActionTypes";

let initialState = {
    loading : false,
    isAuthenticated : false,
    token : null,
    user : {}
};
let userReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading : true
            };
            case REGISTER_USER_SUCCESS:
                localStorage.setItem('token', payload.token);
                return {
                    ...state,
                    loading : false,
                    isAuthenticated : true,
                    token : payload.token
                };
            case REGISTER_USER_FAILURE:
                localStorage.removeItem('token');
                return {
                    ...state,
                    loading : false,
                    isAuthenticated : false
                };
            default : return state;
    }
};  


export {userReducer};