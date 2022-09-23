import { setError, setLoading, setTeams } from "../redux/expertRedux/expertAction";
import axios from 'axios';
import { Dispatch } from "redux";
import { aboutActionType } from "../redux/expertRedux/expertAction"

function getFetchTeams(){
    return (dispatch : Dispatch<aboutActionType>)=>{
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_LOCALHOST_URL}/teams`)
        .then((response)=> {
            dispatch(setLoading(false));
            dispatch(setTeams(response.data));
            dispatch(setError(''));
        })
        .catch((error)=>{
            dispatch(setLoading(false));
            dispatch(setError(error.message));
            dispatch(setTeams([]));
        });
    }
}

export type getFetchTeamsType = ReturnType<typeof getFetchTeams>

export default getFetchTeams;