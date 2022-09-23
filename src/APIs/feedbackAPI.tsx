import { Dispatch } from "redux";
import { feedbackInterface } from "../interfaces/interfaces";
import { setFeedback, getFeedback } from "../redux/feedbackRedux/feedbackAction";
import {feedbackActionType} from "../redux/feedbackRedux/feedbackAction";
import { RootReducerType } from "./../redux/rootReducer"


function saveFeedback(){
    return (dispatch : Dispatch<feedbackActionType> ,getState : ()=>RootReducerType)=>{
        const feedback : feedbackInterface = getState().feedbackReducer.feedback
        const flag = Object.values(feedback).every(element => element ==='');
        if(!flag){
            fetch(`${process.env.REACT_APP_LOCALHOST_URL}/feedbacks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
            })
            .then(res => res.json())
            .then(()=>{dispatch<any>(getFetchFeedback())})
            .catch((error) => {
                alert(`Error : ${error.message}`);
            });
            dispatch(setFeedback({feedbacktitle:'', feedbackMsg:'',id:0}));
        }
        else{alert('Fields required')}
    }
}

function getFetchFeedback(){
    return (dispatch : Dispatch<feedbackActionType>)=>{
        fetch(`${process.env.REACT_APP_LOCALHOST_URL}/feedbacks`)
        .then(res => res.json())
        .then(result =>{
            dispatch(getFeedback(result))
        })
    }
}


const deleteItem = (id : number)=>{
    return (dispatch : Dispatch<feedbackActionType>)=>{
        if (window.confirm("Do you want to delete?") === true)
        {
            fetch(`${process.env.REACT_APP_LOCALHOST_URL}/feedbacks/` + id, 
            {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(()=>{dispatch<any>(getFetchFeedback())})

        }
    }
}

const updateItem = (id: number,updatedfeedback:{feedbacktitle:string,feedbackMsg:string})=>{
    console.log(id,updatedfeedback)
    return (dispatch : Dispatch<feedbackActionType>)=>{
        
        fetch(`${process.env.REACT_APP_LOCALHOST_URL}/feedbacks/${id}`, 
        {
            method: 'PATCH',
            body: JSON.stringify(updatedfeedback),
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(()=>{dispatch<any>(getFetchFeedback())})
    }
}


export {saveFeedback, getFetchFeedback, deleteItem, updateItem}
















