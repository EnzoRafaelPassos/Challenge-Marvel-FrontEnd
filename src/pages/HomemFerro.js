import React from "react";
import '../css/PaginaUm.css'
import Header from "../components/Header";
import HomemFerro from '../imagens/HomemFerro.png'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Background from '../imagens/Background.jpg';
import Back from '../imagens/back.png';
import homemAranhaComics from '../imagens/homemAranhaComics.png';
import '../css/HomemFerro.css';


function homemFerro() {
    return (
        <>
            <Header />
            <div className="background-todo">
                <div className="voltar-comics">
                <Link to="/">
                        <p href="#" ><h2 >Return to previous page</h2></p>
                     
                    </Link>
                </div>
                <div className="class-pesquisar">
                    <h1 className="titulo-Background">Discover all comics this <br /> character took part in</h1>
                </div>
                <div className="card-background-todo">
                    <div className="card-background">
                        <div className="img-left">
                            <img className="img-homemFerro" src={HomemFerro} />
                        </div>
                        <div className="texto-right">
                            <h1 className="titulo-cardHeroi">Iron Man</h1>
                            <p className="paragrafo-cardHeroi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-pesquisar">
                <img className="background-imagem" src={Background} />
            </div>
            <div className="titulo-comics">
                <h1>Comics</h1>
                <h3>#results</h3>
            </div>
            <div className="backgroundTodo-cardComics">

                <div className="imgComics-left">
                    <img className="img-homemAranhaCard" src={homemAranhaComics} />
                </div>
                <div className="background-cardComics">
                    <div className="textoComics-right">
                        <h1 className="tituloComics">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.</h1>
                        <div className="paragrafo-detalhes-cards">
                            <p className="paragrafo-detalhes">01/01/1990 </p>
                            <p className="paragrafo-detalhes"> 47 pages </p>
                            <p className="paragrafo-detalhes">U$0.90</p>
                        </div>

                        <p className="assunto-comics">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...</p>
                    </div>
                </div>
            </div>

            <div className="backgroundTodo-cardComics">

                <div className="imgComics-left">
                    <img className="img-homemAranhaCard" src={homemAranhaComics} />
                </div>
                <div className="background-cardComics">
                    <div className="textoComics-right">
                        <h1 className="tituloComics">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.</h1>
                        <div className="paragrafo-detalhes-cards">
                            <p className="paragrafo-detalhes">01/01/1990 </p>
                            <p className="paragrafo-detalhes"> 47 pages </p>
                            <p className="paragrafo-detalhes">U$0.90</p>
                        </div>

                        <p className="assunto-comics">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...</p>
                    </div>
                </div>


            </div>

            <div className="backgroundTodo-cardComics">

                <div className="imgComics-left">
                    <img className="img-homemAranhaCard" src={homemAranhaComics} />
                </div>
                <div className="background-cardComics">
                    <div className="textoComics-right">
                        <h1 className="tituloComics">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.</h1>
                        <div className="paragrafo-detalhes-cards">
                            <p className="paragrafo-detalhes">01/01/1990 </p>
                            <p className="paragrafo-detalhes"> 47 pages </p>
                            <p className="paragrafo-detalhes">U$0.90</p>
                        </div>

                        <p className="assunto-comics">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...</p>
                    </div>
                </div>


            </div>

            <div className="backgroundTodo-cardComics">

                <div className="imgComics-left">
                    <img className="img-homemAranhaCard" src={homemAranhaComics} />
                </div>
                <div className="background-cardComics">
                    <div className="textoComics-right">
                        <h1 className="tituloComics">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.</h1>
                        <div className="paragrafo-detalhes-cards">
                            <p className="paragrafo-detalhes">01/01/1990 </p>
                            <p className="paragrafo-detalhes"> 47 pages </p>
                            <p className="paragrafo-detalhes">U$0.90</p>
                        </div>

                        <p className="assunto-comics">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...</p>
                    </div>
                </div>


            </div>

            <div className="backgroundTodo-cardComics">

                <div className="imgComics-left">
                    <img className="img-homemAranhaCard" src={homemAranhaComics} />
                </div>
                <div className="background-cardComics">
                    <div className="textoComics-right">
                        <h1 className="tituloComics">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.</h1>
                        <div className="paragrafo-detalhes-cards">
                            <p className="paragrafo-detalhes">01/01/1990 </p>
                            <p className="paragrafo-detalhes"> 47 pages </p>
                            <p className="paragrafo-detalhes">U$0.90</p>
                        </div>

                        <p className="assunto-comics">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...</p>
                    </div>
                </div>


            </div>



            <Footer />
        </>
    );
}

export default homemFerro;
