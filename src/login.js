import  './login.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userAction } from './Actions/homelistAction'
import { useNavigate } from 'react-router-dom';


function  Login(props){

 // const [Userlogin,setUserlogin] = useState(false)

  const [userEmail,setuserEmail] = useState('');
  const [userPassword,setuserPassword] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

    const userlogin=()=>{

              if(userEmail !== '' && userPassword !==''){
                dispatch(userAction(userEmail));
                 props.updateinfo(true)
                   nav('/home')
              }
            }
    return (
        <div className='loginBox'>
            <div className="form">
                <h2>Sign in to your Account </h2>
       <div className="input-container">
         <label>Enter email</label><br></br>
         <input type="text" name="uname" className='inputFields' onChange={(event)=> setuserEmail(event.target.value) }  required  />
       </div><br></br>
       <div className="input-container">
         <label>Password </label><br></br>
         <input type="password" name="pass" onChange={(event)=> setuserPassword(event.target.value) } className='inputFields' required  />
       </div>
       <div className="button-container">
         <br></br><button className='loginBtn' onClick={userlogin}>Login</button>
       </div>
        </div>
        </div>
    )
}

export default Login;