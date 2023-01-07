import React from 'react';
import { useState } from 'react';
import '../../styles/Navbar.css'
import logo from '../../assets/photos/logo.png'
const Navbar = () => {
    // const menu = document.querySelector(".menu-list");
    // const menuBtn = document.querySelector(".menu-btn");
    // const cancelBtn = document.querySelector(".cancel-btn");
    // menuBtn.onClick = ()=>{
    //     menu.classList.add("active");
    // }
    const [active, setActive]= useState(false);
    
    return (
        <nav className='navbar'>
            <div className='content'>
                <div className='logo'>
                    <img src={logo} alt="" />

                </div>
                <ul className={active ? "menu-list navbar activeD":"menu-list "}>
                <div onClick={()=> setActive(!active)} className='icon cancel-btn'>
                    <i className='fas fa-times'></i>

                </div>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>
                    <div className='navbar-btn'>Start a Company</div>
                    </li>
                    
                </ul>
                
                
                <div   className='icon menu-btn'>
                    <i onClick={()=> setActive(!active)} className='fas fa-bars'></i>

                </div>

            </div>
            
        </nav>
    );
};

export default Navbar;