import React from 'react';
import { StyledTechnologiesContainer } from './styles';
import {
    DiReact,
    DiJsBadge,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiNodejs,
    DiLaravel,
} from 'react-icons/di'

import { SiNextdotjs, SiTailwindcss, } from 'react-icons/si'


const technologies = [
    {id: "react", name: "React", icon: <DiReact />},
    {id: "next", name: "Nextjs", icon: <SiNextdotjs />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "sass", name: "Sass", icon: <DiSass />},
    {id: "tailwind", name: "Tailwind", icon: <SiTailwindcss />},
    {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
    {id: "node", name: "Node.js", icon: <DiNodejs />},
    {id: "laravel", name: "Laravel", icon: <DiLaravel />},
]

const TechnologiesContainer = () => {
    return (<StyledTechnologiesContainer>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <a className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                    </div>
                </a>
            ))}
        </div>
    </StyledTechnologiesContainer>
    )
}

export default TechnologiesContainer