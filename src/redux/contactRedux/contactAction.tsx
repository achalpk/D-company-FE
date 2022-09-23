import {ContactType, LoadingType, ErrorType} from './contactType';
import { contactInterface } from "../../interfaces/interfaces"

export function setContact(contact : contactInterface){
    return { 
        type : ContactType,
        payload : contact 
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

type setContactType = ReturnType<typeof setContact>
type setLoadingType = ReturnType<typeof setLoading>
type setErrorType = ReturnType<typeof setError>

export type contactActionType = setContactType | setLoadingType | setErrorType;
