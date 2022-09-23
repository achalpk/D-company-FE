import {TeamsType, LoadingType, ErrorType} from './expertType';
import { teamsInterface } from "../../interfaces/interfaces";



export function setTeams(teams : teamsInterface[]){
    return { 
        type : TeamsType,
        payload : teams 
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

type setTeamsType = ReturnType<typeof setTeams>
type setLoadingType = ReturnType<typeof setLoading>
type setErrorType = ReturnType<typeof setError>

export type aboutActionType = setTeamsType | setLoadingType | setErrorType;

