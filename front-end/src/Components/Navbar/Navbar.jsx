import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    function handleLogOut(e) {
        if(e) {
            localStorage.removeItem('email');
            alert(`you are logout Ngon's Shop`);
            window.location.href = '/';
        }
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="shop logo" />
                <p>Ngon's Shop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kid</Link>{menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {
                    !localStorage.getItem("email") ? <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link> : <button onClick={(e) => {handleLogOut(e)}}>Log out</button>
                }
                <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nar-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;