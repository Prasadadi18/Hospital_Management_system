import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddAdmin = () => {
  const {isAuthenticated,setIsAuthenticated}=useContext(Context)
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [age,setAge]=useState("")
  const [password,setPassword]=useState("")
  const [gender,setGender]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")

  const navigateTo = useNavigate();

const handleAddAdmin = async (e) => {
  e.preventDefault();
  try {
    await axios
        .post(
          "http://localhost:4000/api/v1/users/admin/addNew",
          { firstName, lastName, age, password, gender, email, phone},
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setAge("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };
  if(!isAuthenticated){
    return <Navigate to={"/login"} />
  }
  return (
    <div>
      <section className="page">
      <div className='container form-component add-admin-form'>
  <img src="/logo.png" />
  <h1 className="form-title">Add New Admin</h1>
  <form onSubmit={handleAddAdmin}>
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
          <button type="submit">ADD NEW ADMIN</button>
        </div>
    </form>    
    </div>
      </section>
    </div>
  )
}

export default AddAdmin
