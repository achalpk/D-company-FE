import { useSelector, useDispatch } from 'react-redux';
import { setContact} from '../../redux/contactRedux/contactAction';
import './contact.css';
import saveContact from '../../APIs/contactAPI';
import { RootReducerType } from "../../redux/rootReducer";
import React from 'react';
import { contactInterface } from "../../interfaces/interfaces";
 
function Contacts() {
    const contact : contactInterface = useSelector((state : RootReducerType) => state.contactReducer.contact);
    const loading : boolean = useSelector((state : RootReducerType) => state.contactReducer.loading);
    const error : string = useSelector((state : RootReducerType) => state.contactReducer.error);
    const dispatch = useDispatch(); 

    const getDetails = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> , item : string )=>{
        const updateValue  : contactInterface = {};
        updateValue[item as keyof typeof updateValue] = e.target.value;       //keyof typeof updateValue === name|email|phone|subject|message
        dispatch(setContact({...contact,...updateValue}))
    }

    return (
        <div id="Contact us" className="contactus">
            <h2>Contact us</h2>
            <form action="#">
                <table id='contact-tbl'>
                    <tbody>
                        <tr>
                            <td className='td-label'>Name</td>
                            <td><input className='fields' type="text" value={contact.name} onChange={(e)=>getDetails(e,'name')}/></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Email</td>
                            <td><input className='fields' type="email" value={contact.email} onChange={(e)=>getDetails(e,'email')}/></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Phone no.</td>
                            <td><input className='fields' type="text" value={contact.phone} onChange={(e)=>getDetails(e,'phone')}/></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Subject</td>
                            <td><input className='fields' type="text" value={contact.subject} onChange={(e)=>getDetails(e,'subject')}/></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Message</td>
                            <td><textarea className='fields' value={contact.message} onChange={(e)=>getDetails(e,'message')} cols={70} rows={10}></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input id='submit-btn' type="button" onClick={()=>dispatch<any>(saveContact())} value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {loading?<p style={{textAlign:'center'}}>Loading..</p>:null}
            {error? <p style={{textAlign:'center'}}>error</p>:null}
        </div>
    )   
}

export default Contacts