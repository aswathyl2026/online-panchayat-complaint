import React, { useState } from 'react'
import { registerUserAPI } from '../services/allServices'
import { useNavigate } from 'react-router-dom'

function Registration() {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    userid: "",
    password: ""
  })


  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
  const registerUserFun = async () => {
    const { name, userid, password } = registerUser
    if (password === confirmPassword) {
      console.log();

      if (name && userid && password) {
        const res = await registerUserAPI(registerUser)
        console.log(res);
        if(res.status==201){
        alert("Registered succesfully")
        navigate('/login')
        }
      } else {
        alert("Fill all fields")
      }
    } else {
      alert("Password Mismatch")
      setConfirmPassword("")
    }

  }
  return (
    <div style={{ height: '100vh', backgroundImage: 'url("/image.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex flex-column gap-5 shadow justify-content-center text-center text-light'>
      <div className="container rounded d-flex flex-column gap-5 shadow mt-5 mb-5 p-5 justify-content-center text-center text-light" style={{ height: '80vh', width: '500px', background: 'rgba(0, 0, 0, 0.5)' }} >
        <h3 >Register</h3>
        <input type="text" placeholder='Enter your name' onChange={(e) => setRegisterUser({ ...registerUser, name: e.target.value })} />
        <input type="text" placeholder='Username' onChange={(e) => setRegisterUser({ ...registerUser, userid: e.target.value })} />
        <input type="password" placeholder='Password' onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })} />
        <input value={confirmPassword} type="password" placeholder='Re-enter password' onChange={e => setConfirmPassword(e.target.value)} />
        <button onClick={registerUserFun} className='btn btn-warning btn-lg'>Register</button>
      </div>
    </div>
  )
}

export default Registration
