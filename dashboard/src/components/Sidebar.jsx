import React, { useContext, useState } from 'react'
import { Context } from '../main'
import {TiHome} from 'react-icons/ti' 
import {RiLogoutBoxFill} from 'react-icons/ri' 
import {AiFillMessage} from 'react-icons/ai' 
import {GiHamburgerMenu} from 'react-icons/gi' 
import {FaUserDoctor} from 'react-icons/fa6'
import {MdAddModerator} from 'react-icons/md'
import {IoPersonAddSharp} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Sidebar = () => {
  const [show,setShow]=useState(false)
  const {isAuthenticated,setIsAuthenticated}=useContext(Context)
  const navigateTo=useNavigate()

  const goHome =()=>{
    navigateTo("/")
    setShow(!show)
  }
  const goDoctors =()=>{
    navigateTo("/doctors")
    setShow(!show)
  }
  const goMessage =()=>{
    navigateTo("/messages")
    setShow(!show)
  }
  const goAddDoctors =()=>{
    navigateTo("/addDoctor")
    setShow(!show)
  }
  const goAddAdmin =()=>{
    navigateTo("/addAdmin")
    setShow(!show)
  }
  const handleLogout=async()=>{
    await axios.get("http://localhost:4000/api/v1/users/admin/logout",{
        withCredentials:true,
    }).then((res)=>{
        toast.success(res.data.message)
        setIsAuthenticated(false)
        setShow(!show)
    }).catch((err)=> {
        toast.error(err.response.data.message)
})}

  return (
    <>
      <nav style={!isAuthenticated ? {display:"none"} : {display:'flex'}} className={show ? "show sidebar" :"sidebar"}>
        <div className="links">
          <TiHome onClick={goHome}/>
          <FaUserDoctor onClick={goDoctors}/>
          <MdAddModerator onClick={goAddAdmin}/>
          <IoPersonAddSharp onClick={goAddDoctors}/>
          <AiFillMessage onClick={goMessage}/>
          <RiLogoutBoxFill onClick={handleLogout}/>
        </div>
      </nav>
      <div className="wrapper" style={!isAuthenticated ? {display :"none"} : {display:'flex'}}>
        <GiHamburgerMenu className='hamburger' onClick={()=>setShow(!show)} />
      </div>
    </>
  )
}

export default Sidebar
