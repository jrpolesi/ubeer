import {  Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const RoutesPages = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/ >
            <Route path="signup" element={}/>            
            <Route path="login" element={}/>
            <Route path="dashboard" element={}/>
            <Route path="wallet" element={}/>
            <Route path="history" element={}/>
        </Routes>
    )
} 
export default RoutesPages