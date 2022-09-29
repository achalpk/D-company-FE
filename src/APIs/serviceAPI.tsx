import {setServices, setLoading, setError} from '../redux/serviceRedux/serviceAction'
import axios from 'axios';
import { Dispatch } from 'redux';
import {serviceActionType} from "../redux/serviceRedux/serviceAction"

function getFetchServices(history:any){
    return (dispatch : Dispatch<serviceActionType>)=>{
        
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/services`,
        {headers:{'token':String(localStorage.getItem('Token'))}})
        .then(async res => { 
            if(res.data.success){
                dispatch(setLoading(false));
                dispatch(setServices(res.data.result));
                dispatch(setError(''));
            }
        })
        .catch((error)=>{
            if(!error.response.data.token){
                localStorage.removeItem('Token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('isAuth');
                history.push('/')
            }
            else{
                dispatch(setLoading(false));
                dispatch(setError(error.response.data.message));
                dispatch(setServices([]));
            }
        });
    }
}

export type getFetchServicesType = ReturnType<typeof getFetchServices>

export default getFetchServices;