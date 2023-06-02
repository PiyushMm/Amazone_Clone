import React from 'react'
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export default function Login() {
    const app = initializeApp(firebaseConfig);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = getAuth();
const navigate = useNavigate();
const {myreducer} = useStateValue();
const [,dispatch] = myreducer;


const SignIn = (e) =>{
e.preventDefault();
signInWithEmailAndPassword(auth,email,password)
.then( auth =>{
    if(auth){
        dispatch({
            type : 'SIGN_IN',
            payload : auth
        })
      navigate("/");
    }
  })
  .catch( error => alert(error.message)); 
}



const Register = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then( auth =>{
      if(auth){
        navigate("/");
      }
    })
    .catch( error => alert(error.message)); 
}
    return (
        <div className='login'>
            <form className='login_container'>
                <h1>Sign in</h1>
                <label>Email <br />
                    <input  className="login_input" type={'email'} value = {email}  onChange = {(e)=>{setEmail(e.target.value)}}/>
                </label>
                <br />
                <label>Password <br />
                    <input  className="login_input" type={'password'} value = {password}  onChange= {(e) =>{setPassword(e.target.value)}}/>
                </label>
                <br />
                <button onClick={SignIn}>Login</button>
                <hr />
                <h1>Don't have an account</h1>
                <button onClick={Register}>Sign Up</button>
            </form>

        </div>
    )
}
