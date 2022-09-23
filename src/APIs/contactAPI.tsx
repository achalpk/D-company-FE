import { setContact, setLoading, setError } from '../redux/contactRedux/contactAction';
import axios from 'axios';
import {contactActionType} from "../redux/contactRedux/contactAction";
import { Dispatch } from 'redux';
import { contactInterface } from "../interfaces/interfaces"
import { RootReducerType } from "./../redux/rootReducer"

export default function saveContact(){
    return ((dispatch : Dispatch<contactActionType> ,getState : ()=>RootReducerType)=>{
        const contact : contactInterface = getState().contactReducer.contact;
        const flag : boolean = Object.values(contact).every(element => element ==='');
        if(!flag){
            dispatch(setError(''));
            dispatch(setLoading(true));
            axios.post(`${process.env.REACT_APP_LOCALHOST_URL}/contacts`, contact)
            .then(() => {
                    alert("Successfully submitted")
                    dispatch(setLoading(false));
                    dispatch(setContact({name:'', email:'', phone:'', subject:'', message:''}))
            })
            .catch((error)=>{
                dispatch(setLoading(false));
                dispatch(setError(error.message));
                setTimeout(()=>dispatch(setError('')),100);
            })
        }
        else{
            alert("Please fill the form")
        }
    })
}