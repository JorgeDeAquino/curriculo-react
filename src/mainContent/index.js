import React from 'react';
import AboutContainer from './components/AboutContainer';
import ProjectsContainer from './components/ProjectsContainer';
import TechnologiesContainer from './components/TechnologiesContainer';
import { StyledMainContent } from "./styles";


export default function MainContent() {
    return (
        <StyledMainContent>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </StyledMainContent>
    )
}