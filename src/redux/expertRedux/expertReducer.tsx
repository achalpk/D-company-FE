import {TeamsType, LoadingType, ErrorType} from './expertType';
import { initialStateInterface } from "../../interfaces/interfaces";

const initialState : initialStateInterface = {teams:[], loading:true, error:''};

function aboutReducer(state : initialStateInterface = initialState, action : any){
    switch(action.type){
        case TeamsType:
            return {...state, teams : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        case ErrorType:
            return {...state, error : action.payload};
        default :
            return state;
    }
}

export default aboutReducer