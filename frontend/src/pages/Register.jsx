import React,{useContext,useState} from 'react'
import { Context } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  const {isAuthenticated,setIsAuthenticated}=useContext(Context)
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [age,setAge]=useState("")
  const [password,setPassword]=useState("")
  const [gender,setGender]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")

  const navigateTo=useNavigate()

  const handleRegister=async (e) =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/api/v1/users/patient/register",{firstName,lastName,email,age,phone,gender,password,role:"Patient"},{
        withCredentials:true,headers:{
          "Content-Type":"application/json"
        }
      }).then((res)=>{
        toast.success(res.data.message)
        setIsAuthenticated(true)
        navigateTo("/")
        setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setAge("");
          setGender("");
          setPassword("");
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  if(isAuthenticated){
    return <Navigate to={"/"} />
  }
  return (
    <div className='container form-component register-form'>
  <h2>Sign Up</h2>
  <p>Please Sign Up To continue</p> 
  <form onSubmit={handleRegister}>
    <div>
      <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder='First Name'/>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name'/>
    </div>
    <div>
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
      <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone Number'/>
    </div>
    <div>
      <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} placeholder='Age'/>
      <select value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Gender">
        <option value="Select Gender"> Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      </div>
      <div><input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      </div>
      <div style={{gap:"10px",justifyContent:"flex-end",flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Already Registered?</p>
          <Link to={"/login"} style={{textDecoration:"none",alignItems:"center"}}>Login Now!</Link>
        </div>
        <div style={{justifyContent:"center",alignItems:"center"}}>
          <button type="submit">Register</button>
        </div>
    </form>    
    </div>
  )
}

export default Register
