import {welcomeType, LoadingType, ErrorType} from './welcomeType';


const initialState : any = {welcome:[], loading:true, error:''};

function welcomeReducer(state : any = initialState, action : any){
    switch(action.type){
        case welcomeType:
            return {...state, welcome : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        case ErrorType:
            return {...state, error : action.payload};
        default :
            return state;
    }
}

export default welcomeReducer