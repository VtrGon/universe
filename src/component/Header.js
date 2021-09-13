import React from "react";
import logo from "../imagens/logoluru.svg"
import clau from "../imagens/clau.svg"
import '../style/header.css'


function Header(){
    return(
        <header>
            <img className="logo" src={logo} />

            <ul className="menu">
                <li><a href="https://www.linkedin.com/in/claudiane-mumbelli/">Linkedin</a></li>
                <li><a href="https://www.tiktok.com/@claubelli?">Tiktok</a></li>
                <li><a href="https://www.instagram.com/mumbelli/">Instagram</a></li>
            </ul>

        <div className="container">
            <p className="nome">Mubelli</p>
            <img className="clau" src={clau} />
        </div>
            
            
        </header>
    )
}
export default Header;