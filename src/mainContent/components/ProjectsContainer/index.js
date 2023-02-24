import React from "react";
import { StyledProjectsContainer } from "./styles";

export default function ProjectsContainer() {
    return (
        <StyledProjectsContainer>
            <h2>Projeto em Destaque</h2>
            <h3> Ja Organo Rock </h3>
            <p>
            Projeto em que você pode entender um pouco mais sobre alguns dos vários estilos do Rock e fazer as alterações que desejar, através de adição de bandas aos estilos ou até mesmo a criação de um estilo que sentiu falta.
            </p>
            <p>
            As tecnologias utilizadas foram Next Js, React, JavaScript, HTML e CSS 
            </p>
            <div className="links">
                <a href="https://ja-organo-rock.vercel.app/" className="btn" target={'_blank'}>
                    Confira o Resultado
                </a>
                <a href="https://github.com/JorgeDeAquino/Ja-Organo-Rock" className="btn" target={'_blank'}>
                    Ver Repositorio
                </a>
            </div>
        </StyledProjectsContainer>
    );
}
