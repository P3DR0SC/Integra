import { Link } from "react-router-dom"
import React from "react"
import styles from "./Header.Modules.css"
import logo from './img/logo2.png'
import img_user from './img/img_user.png'
function Header(){
    return (
            <div className="containers">
                <Link to="/InicioAluno">
                    <img className="logo"src={logo} alt="logo" />
                </Link>
            <ul className="list">
                <li className="item">
                    <Link to="/">aulas</Link>
                </li>
                <li className="item">
                    <Link to="/">aulas</Link>
                </li>
                <li className="item">
                    <Link to="/">
                    <img className="img_user"src={img_user} alt="img_user" />
                    </Link>
                </li>
            </ul>
            </div>


    )
}
export default Header;