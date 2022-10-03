import {setServices, setLoading} from '../redux/serviceRedux/serviceAction'
import axios from 'axios';
import { Dispatch } from 'redux';
import {serviceActionType} from "../redux/serviceRedux/serviceAction";

function getFetchServices(history:any){
    return (dispatch : Dispatch<serviceActionType>)=>{
        
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/services`)
        .then(res => { 
            if(res.data.success){
                dispatch(setLoading(false));
                dispatch(setServices(res.data.result));
            }
        })
        .catch((error)=>{
            if(error.response.data.noToken){
                localStorage.removeItem('Token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('isAuth');
                history.push('/')
            }
            else{
                dispatch(setLoading(false));
                dispatch(setServices([]));
            }
        });
    }
}

export type getFetchServicesType = ReturnType<typeof getFetchServices>

export default getFetchServices;