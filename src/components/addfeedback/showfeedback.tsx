import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem, updateItem } from '../../APIs/feedbackAPI'
import { RootReducerType } from "../../redux/rootReducer";
import { ShowFeedbackProps } from "../../interfaces/interfaces";
import { valuesInterface } from "./addfeedbackjson"


interface ShowFeedbackState{
    flag:number|null,
    updatedFeedback:{feedbacktitle:string,feedbackMsg:string}
}

class ShowFeedback extends Component<ShowFeedbackProps,ShowFeedbackState>{

    constructor(props:ShowFeedbackProps){
        super(props)
        this.state = {        
            flag:null,
            updatedFeedback:{feedbacktitle:'',feedbackMsg:''}
        }
    }

    getFeedback = (e : React.ChangeEvent<HTMLInputElement>, item : string)=>{
        const values:valuesInterface ={}
        values[item as keyof typeof values] = e.target.value;
        this.setState({updatedFeedback:{...this.state.updatedFeedback,...values}})
    }

    updateOnClick = (id:number)=>{
        this.props.updateItem(id,this.state.updatedFeedback);
        this.setState({flag:null});
    }

    render(){
        return (
            <div>
                {this.props.feedbackData.map((feed)=>
                <div key={feed.id} style={{margin:'10px 20px', overflowWrap: 'break-word', padding:'25px',  backgroundColor:'#bcba7e'}}>
                    {this.state.flag!==feed.id?
                        <div>
                            <h3>{feed.feedbacktitle}</h3>
                            <div>{feed.feedbackMsg}</div><br/>
                            <button onClick={()=>{
                                this.setState({flag:feed.id});
                                this.setState({updatedFeedback:{feedbacktitle:'',feedbackMsg:''}})
                            }}>Update</button>&nbsp; &nbsp; 
                            <button onClick={()=>this.props.deleteItem(feed.id)}>Delete</button>
                        </div>
                        :   
                        <div>
                            Feedback Title:<input type="text" onChange={(e)=>this.getFeedback(e, 'feedbacktitle')} value={this.state.updatedFeedback.feedbacktitle}/><br/><br/>
                            Feedback Message:<input type="text" onChange={(e)=>this.getFeedback(e,'feedbackMsg')} value={this.state.updatedFeedback.feedbackMsg}/><br/><br/>
                            <button onClick={()=>this.updateOnClick(feed.id)}>Update</button>&nbsp; &nbsp; 
                            <button onClick={()=>this.setState({flag:null})}>Cancel</button>
                        </div>}
                </div>    
                )}
            </div>
        )
    }
}

const mapStateToProps=(state : RootReducerType)=>{
    return{
        feedbackData : state.feedbackReducer.feedbackData,
        feedback : state.feedbackReducer.feedback
    }
}

const mapDispatchToProps=(dispatch : any)=>{
    return{
        deleteItem : (id : number)=>dispatch(deleteItem(id)),
        updateItem : (id : number, updatedfeedback:{feedbacktitle:string,feedbackMsg:string})=>dispatch(updateItem(id,updatedfeedback)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowFeedback)





