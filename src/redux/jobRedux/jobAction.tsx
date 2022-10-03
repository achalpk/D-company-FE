import {JobType, JobLoadingType, ApplyJobType } from './jobType';

export function setJob(jobs : any){
    return { 
        type : JobType,
        payload : jobs 
    };
}

export function setJobLoading(JobLoading : boolean){
    return { 
        type : JobLoadingType,
        payload : JobLoading
    };
}

export function setApplyJob(applyData : any){
    return { 
        type : ApplyJobType,
        payload : applyData
    };
}


type setJobType = ReturnType<typeof setJob>
type setJobLoadingType = ReturnType<typeof setJobLoading>
type setApplyJobType = ReturnType<typeof setApplyJob>

export type jobActionType = setJobType | setJobLoadingType | setApplyJobType;
