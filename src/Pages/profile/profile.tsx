import './profile.css'
import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';


function Profile(){ 
    const userId = sessionStorage.getItem('userId');
    const [jobs,setJobs] = useState([]);
    const [file,setFile] = useState<any>();
    const [render,setRender] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_LOCALHOST_URLS}/job`,
        {headers:{'token':String(localStorage.getItem('Token')), 'userid': String(userId)}})
        .then((res)=>{
            setJobs(res.data.result)
        })
        .catch((error)=>{
            if(!error.response.data.token){
                localStorage.removeItem('Token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('isAuth');
                history.push('/')
                toast.error("Invalid User!", {
                    position: toast.POSITION.TOP_RIGHT
                });    
            }
            else{
                toast.error("Some error occurred!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    },[render])

    const applyJob = (id:number)=>{
        const formData: any = new FormData();
        formData.append('user_id',userId);
        formData.append('resume',file);
        axios.post(`${process.env.REACT_APP_LOCALHOST_URLS}/jobApply/${id}`,
            formData,
            {headers:{
                'token':String(localStorage.getItem('Token')),
                'content-type':'multipart/form-data'
            }}
        )
        .then((res)=>{
            render ? setRender(false) : setRender(true);
            toast.success(res.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch((error)=>{
            if(!error.response.data.token){
                localStorage.removeItem('Token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('isAuth');
                history.push('/');
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });     
            }
            else{
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    return(
        <div className='profile'>
            <h1>Careers</h1>
            {jobs.length<1?<p>No job is available for now.</p>:
            <table className='jobTable'>
                <thead className='jobTableHead'>
                    <tr>
                        <th className='jobTableCell'>TITLE</th>
                        <th className='jobTableCell'>DESCRIPTION</th>
                        <th className='jobTableCell'>EXPERIENCE</th>
                        <th className='jobTableCell'>LOCATION</th>
                        <th className='jobTableCell'>RESUME</th>
                        <th className='jobTableCell'>APPLY</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job:any)=>{
                        return (
                        <tr className='jobTableRow' key={job.id}>
                            <td className='jobTableCell' style={{borderRadius: '10px 0 0 10px'}}>{job.title}</td>
                            <td className='jobTableCell'>{job.description}</td>
                            <td className='jobTableCell'>{job.experience}</td>
                            <td className='jobTableCell'>{job.location}</td>
                            <td className='jobTableCell'>
                                <Button variant="outlined" color="success" size="small" component="label">
                                    Upload
                                    <input hidden type="file" name="resume" onChange={(e:any)=>setFile(e.target.files[0])}/>
                                </Button>
                            </td>
                            <td className='jobTableCell' style={{borderRadius: '0 10px 10px 0'}}>
                                <Button onClick={()=>applyJob(job.id)} variant="contained" color="primary" size="small">
                                    Apply
                                </Button>
                            </td>
                        </tr>
                        )
                    })}   
                </tbody>
            </table>
            }
        </div>
    )
}



export default Profile;