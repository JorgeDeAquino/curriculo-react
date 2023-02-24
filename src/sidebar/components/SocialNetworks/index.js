import React from 'react';
import { StyledSocialNetworks } from './styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>, destino: "https://www.linkedin.com/in/jorge-alexandre-de-aquino/"},
    { name: "github", icon: <FaGithub/>, destino: "https://github.com/JorgeDeAquino"},
]

export default function SocialNetworks() {
    return <StyledSocialNetworks>
    {socialNetworks.map((network) => (
        <a href={network.destino} target={'_blank'} className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
    </StyledSocialNetworks>
}