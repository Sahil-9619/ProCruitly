import React from 'react'
import Homepage from './Components/Homepage'
import { Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import ThanksPage from './Components/User/ThanksPage';
import UserWelcome from './Components/User/UserWelcome';
import UserForm from './Components/User/UserForm';
import CompanyWelcome from './Components/Company/CompanyWelcome';
import UserDetail from './Components/Company/UserDetail';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminInterface from './Components/Admin/AdminInterface';






const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>

      {/* USER */}
      <Route path="/form" element={<UserForm/>}/>
      <Route path="/user" element={<UserWelcome/>}/>
      <Route path="/registered" element={<ThanksPage/>}/>

      {/* COMPANY*/}
      <Route path="/company" element={<CompanyWelcome/>}/>
      <Route path="/userdetails" element={<UserDetail/>}/> 
      <Route path="/user/:id" element={<UserDetail />} />

      {/* Admin */}
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminInterface />} />

    </Routes> 
  )
}

export default App