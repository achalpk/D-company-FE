import {ServicesType, LoadingType, ErrorType} from './serviceType';
import { initialStateInterface } from "../../interfaces/interfaces"


const initialState : initialStateInterface = {services:[], loading:true, error:''};

function serviceReducer(state : initialStateInterface = initialState, action : any){
    switch(action.type){
        case ServicesType:
            return {...state, services : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        case ErrorType:
            return {...state, error : action.payload};
        default :
            return state;
    }
}

export default serviceReducer