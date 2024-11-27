import { Link } from "react-router-dom"
import React from "react"
import styles from "./Header.Modules.css"
import logo from './img/logo2.png'
function Header(){
    return (
            <div className="containers">

            <img className="logo"src={logo} alt="logo" />
            <ul className="list">
                <li className="item">
                    <Link to="/">aulas</Link>
                </li>
                <li className="item">
                    <Link to="/">aulas</Link>
                </li>
                <li className="item">
                    <Link to="/">aulas</Link>
                </li>
            </ul>
            </div>


    )
}
export default Header;