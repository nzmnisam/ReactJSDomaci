//rfce - function, rafce - const
//<></> - fragments

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Navbar.css';
import '../../App.css'
import { Button } from '../Button';

function Navbar() {
    const[click, setClick] = useState(false);//koristi se stanje, pocetna vrednost je false jer
    //ikonica menija nije pritisnuta na pocetku
    const[button, setButton] = useState(true);

    //reverse state from false to true..
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    //kada se refreshuje stranica poziva funkciju showButton() koja proverava velicinu ekrana
    //i na osnovu toga sakriva ili prikazuje dugme Sign Up
    useEffect(() => {
        showButton();
    },[])
    //kada se prozor browsera smanji ili poveca event listener salje tu vrednost funkciji showButton
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        GMS <i className="fab fa-accusoft"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-links-mobile" to="/Sign-up" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>   
                    {button && <Button route="/Sign-up" buttonStyle='btn--outline'>SIGN-UP</Button>} 
                </div>
            </nav>
        </>
    )
}

export default Navbar
