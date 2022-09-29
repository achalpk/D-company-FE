import { Link, useHistory } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

function Login(){ 
  const history = useHistory();
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const login = () => {
     axios.post('http://localhost:9000/login', {
            username:username,
            password:password
        })
        .then((response) => {
          if(response.data.success){
            localStorage.setItem('Token', response.data.token)
            sessionStorage.setItem('isAuth','true')
            sessionStorage.setItem('username',response.data.user)
            sessionStorage.setItem('userId',response.data.userId)
            history.push('/')
          }
          else{
            setStatus(response.data.message)
            setUsername('');
            setPassword('');
          }
        })
        .catch((Error)=>{
          console.log(Error.message)
        })
  }
  
  const userAdd = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }
  const passwordAdd = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return(
    <div style={{textAlign:'center', padding:'200px', height:'37vh'}}>
      <h2>Login</h2>
      <form method="POST">
      Username <input onChange={userAdd} value={username} onFocus={()=>setStatus('')} type="text"/><br/><br/>
      Password <input onChange={passwordAdd} value={password} onFocus={()=>setStatus('')} type="password"/><br/><br/>
      <input type="button" onClick={login} value="Login"/><br/><br/>
      For registration <Link to='/signup'><button>SignUp</button></Link><br/><br/>
      <>{status!==''?<p>{status}<br/></p>:null}</>
      </form>
    </div>
  )
}

export default Login;