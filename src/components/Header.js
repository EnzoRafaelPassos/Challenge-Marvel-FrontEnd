import React from "react";
import Logo from '../imagens/logo.svg';
import Grupo from '../imagens/conversa-em-grupo.svg';
import '../css/Header.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img className="img-logo" src={Logo} />
                    <h1 className="logo-titulo">Marvel Strike Team</h1>
                </div>
            </Link>
            <Link to="/YourTeam">
                <div className="botao-yourTime">
                    <button className="botao-header" >
                        <h1 className="botao-titulo">Your Team</h1> <img className="icon-button-header" src={Grupo} />
                    </button>

                </div>
            </Link>
        </header >
    )
}