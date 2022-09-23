import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


function Signup(){ 
    const history = useHistory();
    const [stus, setStatus] = useState('')

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');

    const signup = () => {
        axios.post('http://localhost:9000/signUp', {
            username:username,
            password:password,
            first_name:fname,
            last_name:lname,
            phone:phone,
            email:email,
            address:address,
            dob:dob,
        })
        .then((response) => {
          if(!response.data.success){
            setStatus(response.data.message);
          }
          else{
            console.log(response.data.message);
            history.push('/login');
          }
        })
        .catch((Error)=>{
          setStatus(Error.response.data.message);
        })
        
    }

  return(
    <div style={{textAlign:'center', padding:'50px', height:'37vh'}}>
      <h2>Register</h2>
      Username <input onChange={(e)=>setUsername(e.target.value)} type="text"/><br/><br/>
      Password <input onChange={(e)=>setPassword(e.target.value)} type="password"/><br/><br/>
      First Name <input onChange={(e)=>setFname(e.target.value)} type="text"/><br/><br/>
      Last Name <input onChange={(e)=>setLname(e.target.value)} type="text"/><br/><br/>
      Phone no <input onChange={(e)=>setPhone(e.target.value)} type="text"/><br/><br/>
      Email <input onChange={(e)=>setEmail(e.target.value)} type="text"/><br/><br/>
      Address <input onChange={(e)=>setAddress(e.target.value)} type="text"/><br/><br/>
      Date of Birth (YYYY-MM-DD) <input onChange={(e)=>setDob(e.target.value)} type="text"/><br/><br/>
      <input type="button" onClick={signup} value="SignUp"/><br/><br/>
      Already an User? <Link to='/login'><button>Login</button></Link>
      {stus!==''?<p>{stus}<br/></p>:null}
    </div>
  )
}

export default Signup;