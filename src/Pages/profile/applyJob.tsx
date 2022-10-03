import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../../redux/rootReducer';
import { setApplyJob } from '../../redux/jobRedux/jobAction';
import {applyJob} from '../../APIs/jobAPI';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
// import CircularProgress from '@mui/material/CircularProgress';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  textAlign: 'center',
  borderRadius: 2,
};

export default function AddService(props:any) {
    const userId : any = sessionStorage.getItem('userId');
    const applyData : any = useSelector((state : RootReducerType )=>state.jobReducer.applyData);
    const dispatch = useDispatch();
    const history = useHistory();


    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(setApplyJob({name:'', phone:'', email:'', address:'', resume:''}));
    }

    const applyButton = async ()=>{
        const formData = new FormData();
        formData.append('name',applyData.name);
        formData.append('phone',applyData.phone);
        formData.append('email',applyData.email);
        formData.append('address',applyData.address);
        formData.append('resume',applyData.resume);
        formData.append('user_id',userId);
        dispatch<any>(applyJob(props.id, formData, history, handleClose))
    }



    return (
        <div>
        <Button variant="contained" color="primary" size="small" onClick={handleOpen}>Apply</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <h2>Apply for "{props.title}" job</h2>
                <TextField
                    name="name"                
                    id="name"
                    label="Name"
                    fullWidth
                    autoFocus
                    size="small"
                    onChange={(e)=>dispatch(setApplyJob({...applyData, name:e.target.value}))}
                />
                <br/>
                <br/>
                <TextField
                    name="phone"
                    id="phone"
                    label="Mobile no."
                    fullWidth
                    size="small"
                    onChange={(e)=>dispatch(setApplyJob({...applyData, phone:e.target.value}))}
                />
                <br/>
                <br/>
                <TextField
                    name="email"
                    id="email"
                    label="Email address"
                    fullWidth
                    size="small"
                    onChange={(e)=>dispatch(setApplyJob({...applyData, email:e.target.value}))}
                />
                <br/>
                <br/>
                <TextField
                    name="email"
                    id="email"
                    label="Address"
                    multiline
                    fullWidth
                    size="small"
                    rows={5}
                    onChange={(e)=>dispatch(setApplyJob({...applyData, address:e.target.value}))}
                />
                <br/>
                <br/>
                <b>Upload Resume :</b> 
                <Button variant="outlined" color="success" size="small" component="label">
                    Upload
                    <input hidden type="file" name="resume" onChange={(e:any)=>{dispatch(setApplyJob({...applyData, resume:e.target.files[0]}))}}/>
                </Button>
                <br/>{applyData.resume.size > 3e+6 ? <p>File size exceeded (max 3mb)</p>:<p>{applyData.resume.name}</p>}
                <br/>

                <Button onClick={()=>applyButton()} variant="contained" color="primary" size="small">
                    Apply
                </Button>
                {/* Save &nbsp; {loading.add ?<CircularProgress size="18px" sx={{color:'black'}}/> : null} */}
                {/* </Button> */}
            </Box>
        </Modal>
        </div>
    );
}
