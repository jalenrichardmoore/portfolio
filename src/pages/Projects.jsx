import React, { useEffect } from 'react';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

import { gameDevelopmentCards, softwareDevelopmentCards } from '../data/projectData';

function Projects() {
    useEffect(() => {
            document.title = 'Jalen Moore | Projects';
        }, []);
    
    return (
        <div className = 'projects-page'>
            <Header />
            <div className = 'projects-section-game'>
                <h1>Game Development Projects</h1>
                <div className = 'underline' />
                <div className = 'projects-list'>
                    {
                        gameDevelopmentCards.map(card => (
                            <ProjectCard linkpage = {card.linkpage} title = {card.title} description = {card.description} image = {card.image} altText = {card.altText} tools = {card.tools}/>
                        ))
                    }
                </div>
            </div>
            <div className = 'projects-section-software'>
                <h1>Software Development Projects</h1>
                <div className = 'underline' />
                <div className = 'projects-list'>
                    {
                        softwareDevelopmentCards.map(card => (
                            <ProjectCard linkpage = {card.linkpage} title = {card.title} description = {card.description} image = {card.image} altText = {card.altText} tools = {card.tools}/>
                        ))
                    }
                </div>
            </div>
            <div className = 'projects-section-narrative'>
                <h1>Narrative Design Projects</h1>
                <div className = 'underline' />
            </div>
        </div>
    );
}

export default Projects;