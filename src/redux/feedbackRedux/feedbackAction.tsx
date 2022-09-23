import {SetFeedbackType, GetFeedbackType, LoadingType, ErrorType} from './feedbackType';
import { feedbackInterface } from "../../interfaces/interfaces";

export function setFeedback(feedback : feedbackInterface){
    return { 
        type : SetFeedbackType,
        payload : feedback 
    };
}

export function getFeedback(feedbackData : feedbackInterface[]){
    return { 
        type : GetFeedbackType,
        payload : feedbackData 
    };
}

export function setLoading(loading : boolean){
    return { 
        type : LoadingType,
        payload : loading
    };
}

export function setError(error : string){
    return { 
        type : ErrorType,
        payload : error 
    };
}


type setFeedbackType = ReturnType<typeof setFeedback>
type getFeedbackType = ReturnType<typeof getFeedback>
type setLoadingType = ReturnType<typeof setLoading>
type setErrorType = ReturnType<typeof setError>

export type feedbackActionType = setFeedbackType | getFeedbackType | setLoadingType | setErrorType;
