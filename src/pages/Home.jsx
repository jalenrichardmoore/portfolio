import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

import { profile, biography } from '../data/homeData';
import { gameDevelopmentCards, softwareDevelopmentCards } from '../data/projectData';

function Profile() {
    return (
        <div className = 'home-profile'>
            <h1>Biography</h1>
            <div className = 'underline'/>
            <div className = 'home-profile-contents'>
                <img src = {profile} alt = 'Profile' />
                {biography}
            </div>
            <Link to = '/about' className = 'action-button'>
                <button>View Experience & Education</button>
            </Link>
        </div>
    );
};

function ProjectHighlights() {

    function shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        return newArray;
    }

    const allProjects = [...gameDevelopmentCards, ...softwareDevelopmentCards];
    const randomProjects = shuffle(allProjects).slice(0, 4);

    return (
        <div className = 'home-highlights'>
            <h1>Projects</h1>
            <div className = 'underline' />
            <div className = 'home-highlights-content'>
                <div className = 'home-projects-list'>
                    {
                        randomProjects.map(card => (
                            <ProjectCard linkpage = {card.linkpage} title = {card.title} description = {card.description} image = {card.image} altText = {card.altText} tools = {card.tools}/>
                        ))
                    }
                </div>
                <Link to = '/projects' className = 'action-button'>
                    <button>View All Projects</button>
                </Link>
            </div>
            
        </div>
    );
}

function Home() {
    useEffect(() => {
        document.title = 'Jalen Moore | Home';
    }, []);

    return (
        <div>
            <Header />
            <Profile />
            <ProjectHighlights />
        </div>
    );
}

export default Home;