import {loginType} from './loginType';
import { authInterface } from "../../interfaces/interfaces";

const initialState : authInterface = {
    auth : {
        isAuth : false, 
        authUser : ''
    }
}

function loginReducer(state : authInterface = initialState, action : any){
    switch(action.type){
        case loginType:
            return {...state, auth : action.payload};
            
        default :
            return state;
    }
}

export default loginReducer