import {loginType} from './loginType';
import { authStateInterface } from "../../interfaces/interfaces"

function setAuthenticate(auth : authStateInterface){
    return { 
        type : loginType,
        payload : auth 
    };
}
export type setAuthenticateType = ReturnType<typeof setAuthenticate>
export { setAuthenticate };