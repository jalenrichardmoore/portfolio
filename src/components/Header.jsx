import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { linkedInIcon, githubIcon, itchIcon, gmailIcon } from '../data/headerData';


function Title() {
    return (
        <div className = 'header-title'>
            <h4>Jalen Moore</h4>
            <p>Junior Gameplay Programmer | Junior AI Engineer</p>
        </div>
    );
}

function SocialLinks() {
    return (
        <div className = 'header-links'>
            <a href = 'https://www.linkedin.com/in/jalenrmoore' target = '_blank' rel = 'noopener noreferrer'>
                <img src = {linkedInIcon} alt = 'LinkedIn Profile' />
            </a>
            <a href = 'https://www.github.com/jalenrichardmoore' target = '_blank' rel = 'noopener noreferrer'>
                <img src = {githubIcon} alt = 'Github Profile' />
            </a>
            <a href = 'https://jalen-moore.itch.io/' target = '_blank' rel = 'noopener noreferrer'>
                <img src = {itchIcon} alt = 'Itch.io Profile' />
            </a>
            <a href = 'mailto:jalenrichardmoore@gmail.com' target = '_blank' rel = 'noopener noreferrer'>
                <img src = {gmailIcon} alt = 'Email' />
            </a>
        </div>
    );
}

function Navigation () {
    return (
        <div>
            <div className = 'section-borderline' />
            <nav className = 'header-navigation'>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/projects'>Projects</Link>
                <Link>Contact</Link>
            </nav>
        </div>
    );
}

function Header() {
    const [isScrolled, setScrolled] = useState(true);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY < 10);
        };

        handleScroll();
        setReady(true);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className = {`header ${!isScrolled ? 'scrolled' : ''} ${isReady ? 'not-scrolled' : ''}`}>
            <Title />
            <SocialLinks />
            <Navigation />
        </div>
    );
}

export default Header;