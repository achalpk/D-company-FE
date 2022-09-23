/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{ useEffect } from "react";
import ShowFeedback from "./showfeedback";
import { useSelector, useDispatch } from "react-redux";
import { setFeedback } from "../../redux/feedbackRedux/feedbackAction";
import { saveFeedback, getFetchFeedback } from "../../APIs/feedbackAPI";
import { RootReducerType } from "../../redux/rootReducer";
import { feedbackInterface } from "../../interfaces/interfaces"

export interface valuesInterface{
    "feedbacktitle" ?: string,
    "feedbackMsg" ?: string
}

export default function AddFeedbacks(){ 
    
    const feedback : feedbackInterface = useSelector((state : RootReducerType) => state.feedbackReducer.feedback);
    const dispatch = useDispatch();

    const getFeedback = (e : React.ChangeEvent<HTMLInputElement>, item : string)=>{
        const values : valuesInterface ={}
        values[item as keyof typeof values] = e.target.value;
        dispatch(setFeedback({...feedback,...values}))
    }

    useEffect(()=>dispatch<any>(getFetchFeedback()),[dispatch])
 
    return(
        <div>
            <div style={{textAlign:'center', width:'30%', height:'250px', margin:'20px auto', padding:'20px',boxShadow:'0px 0px 10px rgb(29, 28, 28)',backgroundColor:'white'}}>
                <h1>FEEDBACK</h1><br/><br/><br/>
                Feedback Title:<input value={feedback.feedbacktitle} onChange={(e)=>getFeedback(e,'feedbacktitle')} type='text'/><br/><br/>
                Feedback Message:<input value={feedback.feedbackMsg} onChange={(e)=>getFeedback(e,'feedbackMsg')} type='text'/><br/><br/>
                <input type="button" 
                    style={{padding:'0px 20px'}} 
                    value="Send" 
                    onClick={()=>dispatch<any>(saveFeedback())}/>
            </div>
            <div>
                <h3 style={{margin:"20px 20px"}}><u>Your feedbacks</u></h3>
                <ShowFeedback/><br/>
            </div>

        </div>
    )
}