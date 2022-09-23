import React, { Component } from "react";
import AddFeedbacks from "../components/addfeedback/addfeedbackjson";
export default class Feedback extends Component{
    render(){
        return(
            <div style={{paddingTop:'100px',minHeight:'75.1vh'}}>
                <AddFeedbacks/>
            </div>
        )
    }
}