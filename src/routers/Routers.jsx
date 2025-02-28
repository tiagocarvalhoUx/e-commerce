import {Routes, Route, Navigate} from 'react-router-dom'

import React from "react"
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers =()=>{
        return (

        <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="Shop" element={<Shop/>}/>
        <Route path="Shop/:id" element={<ProductDetails/>}/>
        <Route path="Cart" element={<Cart/>}/>
        <Route path="Checkout" element={<Checkout/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        </Routes>
)
}

export default Routers;