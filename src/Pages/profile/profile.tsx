import './profile.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../redux/rootReducer';
import {fetchJob} from '../../APIs/jobAPI';
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AddService from './applyJob';


function Profile(){ 
    const jobs : any = useSelector((state : RootReducerType )=>state.jobReducer.jobs);
    const loading : boolean = useSelector((state : RootReducerType )=>state.jobReducer.jobLoading);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch<any>(fetchJob(history));
    },[])

    return(
        <div className='profile'>
            <h1>Careers</h1>
            {loading?
                <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px' }}>
                <CircularProgress/>&nbsp;&nbsp;
                <h3>Loading...</h3>
                </Box>
            :
                <div>
                    {jobs.length<1 && !loading ?<p>No job is available for now.</p>:
                    <table className='jobTable'>
                        <thead className='jobTableHead'>
                            <tr>
                                <th className='jobTableCell'>TITLE</th>
                                <th className='jobTableCell'>DESCRIPTION</th>
                                <th className='jobTableCell'>EXPERIENCE</th>
                                <th className='jobTableCell'>LOCATION</th>
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
                                    {/* <td className='jobTableCell'>
                                        <Button variant="outlined" color="success" size="small" component="label">
                                            Upload
                                            <input hidden type="file" name="resume" onChange={(e:any)=>setFile(e.target.files[0])}/>
                                        </Button>
                                    </td> */}
                                   
                                    <td className='jobTableCell' style={{borderRadius: '0 10px 10px 0'}}>
                                        {/* <Button onClick={()=>applyJob(job.id)} variant="contained" color="primary" size="small">
                                            Apply
                                        </Button> */}
                                         <AddService title={job.title} id={job.id}/>
                                    </td>
                                </tr>
                                )
                            })}   
                        </tbody>
                    </table>
                    }
                </div>
            }
        </div>
    )
}



export default Profile;