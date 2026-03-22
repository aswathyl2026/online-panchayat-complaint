import React, { useRef, useState } from 'react'
import Input from '@mui/material/Input';
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getUserAPI } from '../services/allServices';

function Login() {
  const [userData, setUserData] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  //get user from getuserapi
  const getUser = async () => {
    const uData = await getUserAPI()
    const user = uData.data
    //console.log(uData.data);
    if (uData.status = 200) {
      const validUser = user?.find(data =>
        data.userid == usernameRef.current.value && data.password == passwordRef.current.value)
        
      if (validUser) {
         if(validUser.userid=='admin'){
        navigate(`/login/admin/${validUser.name}`)
         }
         else{
          navigate(`/login/user/${validUser.name}/${validUser.id}`)
         }
      }
      else {
        alert("Invalid username or password")
        usernameRef.current.value = ""
        passwordRef.current.value = ""
      }

    }

  }
  return (
    <div style={{ height: '100vh', backgroundImage: 'url("/image.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex flex-column gap-5 shadow justify-content-center text-center text-light'>
      <div className="container rounded d-flex flex-column gap-5 shadow mt-5 mb-5 p-5 justify-content-center text-center text-light" style={{ height: '80vh', width: '500px', background: 'rgba(0, 0, 0, 0.5)' }} >
        <h3 >Log in</h3>
        <input ref={usernameRef} type="text" placeholder='Username' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button onClick={getUser} className='btn btn-warning btn-lg'>Login</button>
        <Link to={'/register'} style={{ textDecoration: 'none' }} className='text-light'>create an account</Link>
      </div>

    </div>
  )
}

export default Login
