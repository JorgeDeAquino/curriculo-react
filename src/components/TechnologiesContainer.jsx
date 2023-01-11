import {
    DiReact,
    DiJsBadge,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiGit,
    DiNodejs,
    DiMysql,
    DiLaravel,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "react", name: "React", icon: <DiReact />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "sass", name: "Sass", icon: <DiSass />},
    {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
    {id: "laravel", name: "Laravel", icon: <DiLaravel />},
    {id: "node", name: "Node.js", icon: <DiNodejs />},
    {id: "mysql", name: "MySQL", icon: <DiMysql />},
    {id: "git", name: "Git", icon: <DiGit />},
]

const TechnologiesContainer = () => {
    return (<section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <a className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </a>
            ))}
        </div>
    </section>
    )
}

export default TechnologiesContainer