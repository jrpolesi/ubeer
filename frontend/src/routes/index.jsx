import {  Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const RoutesPages = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/ >
            <Route path="register" element={}/>            
            <Route path="login" element={}/>
            <Route path="dashboard" element={}/>
            <Route path="wallet" element={}/>
        </Routes>
    )
} 
export default RoutesPages