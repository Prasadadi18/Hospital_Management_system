import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Context } from '../main'
import axios from 'axios'

const Login = () => {
  const [show,setShow]=useState(false)
  const {isAuthenticated,setIsAuthenticated}=useContext(Context)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const navigateTo=useNavigate()
  const handleLogin =async(e)=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/api/v1/users/login",{email,password,confirmPassword,role:"Admin"},{
        withCredentials:true,headers:{
          "Content-Type":"application/json"
        }
      }).then((res)=>{
        toast.success(res.data.message)
        setIsAuthenticated(true)
        navigateTo("/")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setShow(!show)
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  if(isAuthenticated){
    return <Navigate to={"/"} />
  }
  return (
    <>
      <div className="container form-component">
        <img src="/logo.png" className='logo'/>
        <h1 className="form-title">Welcome To Zeecare</h1>
        <p>Only Admins are allowed to access this Resource</p>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e)=>setEmail((e.target.value))} placeholder='Email'/>
        <input type="password" value={password} onChange={(e)=>setPassword((e.target.value))} placeholder='Password' />
        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword((e.target.value))} placeholder='Confirm Password' />
        <div style={{justifyContent:"center",alignItems:"center"}}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login
