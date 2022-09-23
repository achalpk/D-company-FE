import {ContactType, LoadingType, ErrorType} from './contactType';
import { initialStateInterface } from "../../interfaces/interfaces";

const initialState : initialStateInterface ={
    contact : { 'name':'', 'email':'', 'phone':'', 'subject':'', 'message':'' }, 
    loading : false, 
    error : '',
}

function contactReducer(state : initialStateInterface = initialState, action : any){
    switch(action.type){
        case ContactType:
            return {...state, contact : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        case ErrorType:
            return {...state, error : action.payload};
        default :
            return state;
    }
}

export default contactReducer;