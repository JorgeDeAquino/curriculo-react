import React from 'react';
import InformationContainer from './components/InformationContainer';
import SocialNetworks from './components/SocialNetworks';
import { StyledSidebar } from "./styles";


const Sidebar = () => {
    return (
        <StyledSidebar>
            <img src='https://github.com/JorgeDeAquino.png' alt="Jorge Alexandre Foto" />
            <p className="title">Desenvolvedor Front End</p>
            <h1>Jorge Alexandre</h1>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1oEIT6v-48KImMrdw2iRPhJma5dsjVmir/view?usp=sharing" className="btn" target={'_blank'}>
                Download curriculo
            </a>
        </StyledSidebar>
    )
}

export default Sidebar;