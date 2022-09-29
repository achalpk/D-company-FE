import {setWelcome, setLoading, setError, welcomeActionType} from '../redux/welcomeRedux/welcomeAction'
import axios from 'axios';
import { Dispatch } from 'redux';

function fetchWelcome(history:any){
    return (dispatch : Dispatch<welcomeActionType>)=>{
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/welcome`,{
            headers:{'token':String(localStorage.getItem('Token'))}
        })
        .then(async res => { 
            if(res.data.success){
                dispatch(setLoading(false));
                dispatch(setWelcome(res.data.result));
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
                dispatch(setWelcome([]));
            }
        }); 
    }
}



export type FetchWelcomeType = ReturnType<typeof fetchWelcome>

export default fetchWelcome;