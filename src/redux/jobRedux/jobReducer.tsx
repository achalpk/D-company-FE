import {JobType, JobLoadingType, ApplyJobType} from './jobType';


const initialState : any = {
    jobs: [], 
    jobLoading: false, 
    applyData: {name:'', phone:'', email:'', address:'', resume:''}
};

function jobReducer(state : any = initialState, action : any){
    switch(action.type){
        case JobType:
            return {...state, jobs : action.payload};
        case JobLoadingType:
            return {...state, jobLoading : action.payload};
        case ApplyJobType:
            return {...state, applyData : action.payload};
        default :
            return state;
    }
}

export default jobReducer;