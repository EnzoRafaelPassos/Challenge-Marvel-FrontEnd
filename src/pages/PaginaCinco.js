import React from "react";
import Background from '../imagens/Background.jpg';
import Pesquisar from '../imagens/search.png';
import HomemAranha from '../imagens/HomemAranha.png'
import HomemFerro from '../imagens/HomemFerro.png'
import Wolverine from '../imagens/Wolverine.png'
import CapitaoAmerica from '../imagens/CapitaoAmerica.png'
import iconCard from '../imagens/icon-card.png'
import '../css/PaginaUm.css'
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



function PaginaDois() {
    return (
        <>
            <Header />
            <div className="background-todo">
                <div className="class-pesquisar">
                    <h1 className="titulo-pesquisar">Explore the most powerful <br /> characters in Marvel</h1>
                </div>
                <div className="placeholder">
                    <input type="text" placeholder="Type in a character name" />
                    <button className="search" ><img className="img-search" src={Pesquisar} /></button>
                </div>
            </div>
            <div className="background-pesquisar">
                <img className="background-imagem" src={Background} />
            </div>

            <div className="Titulo">
                <h1>Characters</h1>
                <h3>#results 5</h3>
            </div>

            <div className="cards-herois">
                <div className="cards">
                    <div className="PrimeiraFileira">
                        <Link to="/Wolverine">
                            <div className="cardWolverine">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={Wolverine} />
                                    <div className="card">
                                        <h1 >Wolverine</h1>
                                        <p>É um personagem fictício que aparece em quadrinhos americanos publicados pela Marvel Comics, principalmente em associação com os X-Men..</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/HomemAranha">
                            <div className="cardHomemAranha">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={HomemAranha} />

                                    <div className="card">
                                        <h1 >Spider Man</h1>
                                        <p>Criado pelo escritor/editor Stan Lee e pelo escritor Steve Ditko, o Homem-Aranha apareceu pela primeira vez na Amazing Fantasy #15.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/HomemFerro">
                            <div className="cardHomemFerro">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={HomemFerro} />
                                    <div className="card">
                                        <h1 >Iron Man</h1>
                                        <p> Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usou armaduras de alta tecnologia no combate ao crime.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>

                        <Link to="/CapitaoAmerica">
                            <div className="cardCapitaoAmerica">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={CapitaoAmerica} />
                                    <div className="card">
                                        <h1 >Captain A...</h1>
                                        <p>Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics </p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                    </div>

                    {/* seguna fileira */}
                    <div className="SegundaFileira">
                        <Link to="/HomemAranha">
                            <div className="cardHomemAranha">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={HomemAranha} />
                                    <div className="card">
                                        <h1 >Spider Man</h1>
                                        <p>Criado pelo escritor/editor Stan Lee e pelo escritor Steve Ditko, o Homem-Aranha apareceu pela primeira vez na Amazing Fantasy #15.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/CapitaoAmerica">
                            <div className="cardCapitaoAmerica">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={CapitaoAmerica} />
                                    <div className="card">
                                        <h1 >Captain A...</h1>
                                        <p>Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics </p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link to="/Wolverine">
                            <div className="cardWolverine">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={Wolverine} />
                                    <div className="card">
                                        <h1 >Wolverine</h1>
                                        <p>É um personagem fictício que aparece em quadrinhos americanos publicados pela Marvel Comics, principalmente em associação com os X-Men..</p>
                                    </div>
                                </a>
                            </div>
                        </Link>

                        <Link to="/HomemFerro">
                            <div className="cardHomemFerro">
                                <a className="CardBotao" href="#">
                                    <Link to="/YourTeam">
                                        <div className="card-icon">
                                            <img className="icon-card" src={iconCard} />
                                        </div>
                                    </Link>
                                    <img className="img" src={HomemFerro} />
                                    <div className="card">
                                        <h1 >Iron Man</h1>
                                        <p> Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usou armaduras de alta tecnologia no combate ao crime.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="botao-next-prev">
                <Link to="/">
                    <h3><p className="botao-numerico" href="#">1</p></h3>
                </Link>
                <Link to="/PaginaDois">
                    <h3 ><p className="botao-numerico" >2</p></h3>
                </Link>
                <Link to="/PaginaTres">
                    <h3 ><p className="botao-numerico" >3</p></h3>
                </Link>
                <Link to="/PaginaQuatro">
                    <h3 ><p className="botao-numerico" >4</p></h3>
                </Link>
                <Link to="/PaginaCinco">
                    <h3 ><p className="botao-numerico" >5</p></h3>
                </Link>
                <p className="more" ><b>...#</b></p>
                <Link to="/PaginaQuatro">
                    <h3 ><a className="botao-prev">Prev</a></h3>
                </Link>
                <Link to="/">
                    <h3 ><p >Next</p></h3>
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default PaginaDois;
