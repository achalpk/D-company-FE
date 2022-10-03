import {setJob, setJobLoading, setApplyJob, jobActionType} from '../redux/jobRedux/jobAction'
import axios from 'axios';
import { Dispatch } from 'redux';



function fetchJob(history:any){
    return (dispatch : Dispatch<jobActionType>)=>{
        const userId : any = sessionStorage.getItem('userId');
        dispatch(setJobLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/job`,
            {headers:{'userid': String(userId)}})
        .then((res)=>{
            dispatch(setJobLoading(false));
            dispatch(setJob(res.data.result));
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
                dispatch(setJobLoading(false));
            }
        })
    }
}


function applyJob(id:number, formData:any, history:any, handleClose:any){
    return (dispatch : Dispatch<jobActionType>)=>{
        axios.post(`${process.env.REACT_APP_LOCALHOST_URLS}/jobApply/${id}`,
            formData,
            {headers:{
                'content-type':'multipart/form-data'
            }}
        )
        .then(()=>{
            handleClose();
            dispatch(setApplyJob({name:'', phone:'', email:'', address:'', resume:''}));
            dispatch<any>(fetchJob(history));
        })
        .catch((error)=>{
            if(error.response.data.noToken){
                localStorage.removeItem('Token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('isAuth');
                history.push('/');    
            }
        })
    }
}

export {fetchJob, applyJob};