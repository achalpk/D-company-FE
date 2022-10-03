import {setWelcome, setLoading, welcomeActionType} from '../redux/welcomeRedux/welcomeAction'
import axios from 'axios';
import { Dispatch } from 'redux';

function fetchWelcome(history:any){
    return (dispatch : Dispatch<welcomeActionType>)=>{
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/welcome`)
        .then(async res => { 
            if(res.data.success){
                dispatch(setLoading(false));
                dispatch(setWelcome(res.data.result));
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
                dispatch(setWelcome([]));
            }
        }); 
    }
}



export type FetchWelcomeType = ReturnType<typeof fetchWelcome>

export default fetchWelcome;