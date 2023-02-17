import React from 'react';
import { StyledSocialNetworks } from './styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>},
    { name: "github", icon: <FaGithub/>},
]

export default function SocialNetworks() {
    return <StyledSocialNetworks>
    {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
    </StyledSocialNetworks>
}