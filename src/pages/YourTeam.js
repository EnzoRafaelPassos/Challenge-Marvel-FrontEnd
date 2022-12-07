import React from "react";
import '../css/PaginaUm.css'
import Header from "../components/Header";
import Wolverine from '../imagens/Wolverine.png'
import { Link } from "react-router-dom";
import '../css/YourTeam.css';
import Background from '../imagens/Background.jpg';
import HomemAranha from '../imagens/HomemAranha.png'
import HomemFerro from '../imagens/HomemFerro.png'
import CapitaoAmerica from '../imagens/CapitaoAmerica.png'
import iconCardWhite from '../imagens/iconCardWhite.png'
import Footer from "../components/Footer";




function YourTeam() {
    return (
        <>
            <Header />
            <div className="class-Yourteam">
                <h1 className="titulo-Yourteam">Here is your own strike <br /> team choice</h1>
            </div>

            <div className="cards-Yourteam">
                <div className="cards">
                    <div className="PrimeiraFileira">
                        <Link to="/CapitaoAmerica">
                            <div className="cardCapitaoAmerica">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={CapitaoAmerica} />
                                    <div className="card">
                                        <h1 >Captain A...</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/HomemAranha">
                            <div className="cardHomemAranha">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={HomemAranha} />

                                    <div className="card">
                                        <h1 >Spider Man</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/HomemFerro">
                            <div className="cardHomemFerro">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={HomemFerro} />
                                    <div className="card">
                                        <h1 >Iron Man</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/Wolverine">
                            <div className="cardWolverine">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={Wolverine} />
                                    <div className="card">
                                        <h1 >Wolverine</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>

                    </div>

                    {/* seguna fileira */}
                    <div className="SegundaFileira">
                        <Link to="/Wolverine">
                            <div className="cardWolverine">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={Wolverine} />
                                    <div className="card">
                                        <h1 >Wolverine</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/HomemFerro">
                            <div className="cardHomemFerro">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={HomemFerro} />
                                    <div className="card">
                                        <h1 >Iron Man</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>

                        <Link to="/HomemAranha">
                            <div className="cardHomemAranha">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={HomemAranha} />
                                    <div className="card">
                                        <h1 >Spider Man</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/CapitaoAmerica">
                            <div className="cardCapitaoAmerica">
                                <a className="CardBotao" href="#">
                                    <div className="card-icon-red">
                                        <img className="icon-card-white" src={iconCardWhite} />
                                    </div>
                                    <img className="img" src={CapitaoAmerica} />
                                    <div className="card">
                                        <h1 >Captain A...</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="background-Yourteam">
                <img className="background-imagem-Yourteam" src={Background} />
            </div>

            <div className="botao-next-prev-YourTeam">
                <Link to="">
                    <h3><p className="botao-numerico" href="#">1</p></h3>
                </Link>
                <Link to="">
                    <h3 ><p className="botao-numerico" >2</p></h3>
                </Link>
                <Link to="">
                    <h3 ><p className="botao-numerico" >3</p></h3>
                </Link>
                <Link to="">
                    <h3 ><p className="botao-numerico" >4</p></h3>
                </Link>
                <Link to="">
                    <h3 ><p className="botao-numerico" >5</p></h3>
                </Link>
                <p className="more" ><b>...#</b></p>
                <Link to="/YourTeam">
                    <h3 ><a className="botao-prev">Prev</a></h3>
                </Link>
                <Link to="/PaginaTres">
                    <h3 ><p >Next</p></h3>
                </Link>
            </div>


            <Footer />
        </>
    );
}

export default YourTeam;
