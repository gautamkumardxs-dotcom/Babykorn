import React, { useState } from 'react'
import { NavLink, BrowserRouter, useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { useEffect } from 'react';
import styles from './Navbar.module.css'
import header_logo from '../../assets/images/logos/header_logo.svg'
const Navbar = () => {


    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();
    useEffect(() => {


        setCurrentPath(location.pathname.replace('/', '').toUpperCase() || 'HOME');
       

    },[location.pathname]);


    const handleHamburger = () => {
        const open = document.getElementById(styles.open);
        const close = document.getElementById(styles.close);
        const midContainer = document.querySelector(`.${styles.midContainer}`);
        if (open.style.display === "none") {
            open.style.display = "block";
            close.style.display = "none";
            midContainer.style.transform = "translateX(-100%)";
        }
        else {
            open.style.display = "none";
            close.style.display = "block";
            midContainer.style.transform = "translateX(0%)";
        }
    }
    const navLinkHandler = () => {
        const midContainer = document.querySelector(`.${styles.midContainer}`);
        if (window.innerWidth < 768) {
            midContainer.style.transform = "translateX(-100%)";
            const open = document.getElementById(styles.open);
            const close = document.getElementById(styles.close);
            open.style.display = "block";
            close.style.display = "none";
        }
    }






    return (

        <nav className={styles.nav}>
            <div className={styles.topContainer}>
                <img src={header_logo} alt="Logo" />
            <div  className={styles.currentPath} id={styles.currentPath}>{currentPath}</div>

                <i onClick={() => { handleHamburger() }} id={styles.open} className="ri-menu-5-line"></i>
                <i onClick={() => { handleHamburger() }} id={styles.close} className="ri-close-line"></i>
            </div>
            <div className={styles.midContainer}>
                <hr style={{ width: '90%', margin: '0 auto', color: 'rgba(0, 0, 0, 0.4)' }} />
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/" >Home</NavLink>
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/games" >Games</NavLink>
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/news" >News</NavLink>
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/about" >About Us</NavLink>
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/publishing" >Publishing</NavLink>
                <NavLink onClick={() => { navLinkHandler() }} className={({ isActive }) => `${styles.navlink} ${isActive ? styles.activeLink : ''}`} to="/contact">Contact</NavLink>

            </div>

        </nav>

    )



}
export default Navbar
