import {ServicesType, LoadingType, ErrorType} from './serviceType';
import { servicesInterface } from "../../interfaces/interfaces"


export function setServices(services : servicesInterface[]){
    return { 
        type : ServicesType,
        payload : services 
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

type setServicesType = ReturnType<typeof setServices>
type setLoadingType = ReturnType<typeof setLoading>
type setErrorType = ReturnType<typeof setError>

export type serviceActionType = setServicesType | setLoadingType | setErrorType;
