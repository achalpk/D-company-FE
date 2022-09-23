import {welcomeType, LoadingType, ErrorType} from './welcomeType';

export function setWelcome(services : any){
    return { 
        type : welcomeType,
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

type setWelcomeType = ReturnType<typeof setWelcome>
type setLoadingType = ReturnType<typeof setLoading>
type setErrorType = ReturnType<typeof setError>

export type welcomeActionType = setWelcomeType | setLoadingType | setErrorType;
