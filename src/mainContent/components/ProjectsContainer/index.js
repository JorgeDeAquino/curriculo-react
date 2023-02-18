import React from "react";
import { StyledProjectsContainer } from "./styles";

export default function ProjectsContainer() {
  return (
    <StyledProjectsContainer>
      <h2>Projeto em Destaque</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        deserunt, et nisi sit, ullam corporis vero eaque optio, maiores
        aspernatur odio culpa animi? Sint quo, facilis sapiente hic nesciunt
        molestiae.
      </p>
      <a href="" className="btn">
        Ver Projeto
      </a>
      <a href="" className="btn">
        Ver Repositorio
      </a>
    </StyledProjectsContainer>
  );
}
