import {SetFeedbackType, GetFeedbackType, LoadingType, ErrorType} from './feedbackType';
import { initialStateInterface } from "../../interfaces/interfaces";

const initialState : initialStateInterface= {
    feedback:{feedbacktitle:'',feedbackMsg:'', id:0}, 
    feedbackData:[], 
    loading:true, 
    error:''
}

function feedbackReducer(state : initialStateInterface = initialState, action:any){
    switch(action.type){
        case SetFeedbackType:
            return {...state, feedback : action.payload};
        case GetFeedbackType:
            return {...state, feedbackData : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        case ErrorType:
            return {...state, error : action.payload};
        default :
            return state;
    }
}

export default feedbackReducer