import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddAdmin from './components/AddAdmin'
import AddNewDoctor from './components/AddNewDoctor'
import Doctors from './components/Doctors'
import Login from './components/Login'
import Messages from './components/Messages'
import Sidebar from './components/Sidebar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Context} from './main'
import axios from 'axios'

const App = () => {
  const {isAuthenticated,setIsAuthenticated,user,setUser} =useContext(Context)
  useEffect(()=>{
    const fetchUser=async ()=>{
      try {
        const response=await axios.get("http://localhost:4000/api/v1/users/admin/me",{withCredentials:true},
        )
        setIsAuthenticated(true)
        setUser(response.data.user)
      } catch (error) {
        setIsAuthenticated(false)
        setUser({})
      }
    }
    fetchUser()
  },[isAuthenticated])
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addAdmin" element={<AddAdmin/>}/>
          <Route path="/addDoctor" element={<AddNewDoctor/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  )
}

export default App
