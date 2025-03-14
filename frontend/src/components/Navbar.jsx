import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Context } from '../main'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [show,setShow]=useState(true)
    const  { isAuthenticated, setIsAuthenticated }=useContext(Context)
    const navigateTo=useNavigate()
    const handleLogout=async()=>{
            await axios.get("http://localhost:4000/api/v1/users/patient/logout",{
                withCredentials:true,
            }).then((res)=>{
                toast.success(res.data.message)
                setIsAuthenticated(false)
                setShow(!show)
            }).catch((err)=> {
                toast.error(err.response.data.message)
        })}
    const handleLogin=()=>{
        setShow(!show)
        navigateTo("/login")
    }
    const close=()=>{
        setShow(!show)
    }
  return (
    <nav className='container'>
        <div className="logo"><img src="/logo.png" alt="logo" className="logo-img" /></div>
        <div className={show ? "navLinks showmenu": "navLinks"} >
            <div className="links">
                <Link to={"/"} onClick={close}>HOME</Link>
                <Link to={"/appointment"} onClick={close}>APPOINTMENT</Link>
                <Link to={"/about"} onClick={close}>ABOUT US</Link>
            </div>
            {isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button>) :(<button className='btn loginBtn' onClick={handleLogin}>LOGIN</button>)}
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
            <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar
