import React from 'react'
import style from "../styles/Header.module.css"
import logo from '../resources/logo.png';
import menu from '../resources/menu.svg';

export const Header = () => {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="Logo" />
            <span className={style.logo}> Daietto</span>
            <img src={menu} id ={style.menu}alt="Logo" />

            <ul className={style.nav1} >
                <li>
                    Nosotros
             </li>
                <li>
                    Menu
             </li>
                <li>
                    Contactto
             </li>
            </ul>
            <ul className={style.nav2}>
                <li>
                    <b>Login</b>
                </li>
                <li id={style.register}>
                    Register
             </li>
            </ul>

        </div>
    )
}
export default Header;
