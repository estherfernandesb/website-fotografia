import React from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import { Corpo } from "./styles.js";

const Body = () => {
    return (
       <Corpo>
    <section className="container_sobre">
        <img className="image" src={img1} alt="Foto por Lucas Bastos"/>
        <div className="imagem_sobre">
        <h4>Lucas Esteves Bastos, fotográfo e publicitário.</h4>
        <p>Meu objetivo é compartilhar o meu olhar com o mundo sobre as mais diversas paisagens.</p>
        <a href="#">Sobre</a>
        </div>
    </section>
    
    <section className="container_galeria">
        <img src={img2} alt="Foto por Lucas Bastos"/>
        <div className="imagem_galeria">
        <a href="#">Galeria</a>
        </div>
    </section>
    
    <section className="container_projetos">
        <img src={img3} alt="Foto por Lucas Bastos"/>
        <div className="imagem_projetos">
        <a href="#">Projetos</a>
        </div>
    </section>
    
    <section className="container_contato">
        <img src={img4} alt="Foto por Lucas Bastos"/>
        <div className="imagem_contato">
        <a href="#">Contato</a>
        </div>
    </section>
    </Corpo>
        );
}

export default Body;