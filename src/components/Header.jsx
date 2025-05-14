import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

function ContactInfo({onClose}) {
    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        }
    })

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [onClose]);

    return (
        <div className = 'contact-overlay'>
            <div className = 'contact-content' ref = {modalRef}>
                <h6>Phone Number</h6>
                <p>985-707-7750</p>
                <h6>Email Address</h6>
                <p>jalenrichardmoore@gmail.com</p>
            </div>
        </div>
    );
}

function Navigation () {
    const [selectedContact, setSelectedContact] = useState(false);

    const openModal = () => {
        setSelectedContact(true);
    }

    const closeModal = () => {
        setSelectedContact(false);
    }

    return (
        <div>
            <div className = 'section-borderline' />
            <nav className = 'header-navigation'>
                <Link to = 'https://jalenrichardmoore.github.io/portfolio/'>Home</Link>
                <Link to = 'https://jalenrichardmoore.github.io/portfolio/about'>About</Link>
                <Link to = 'https://jalenrichardmoore.github.io/portfolio/projects'>Projects</Link>
                <Link onClick = {() => openModal()}>Contact</Link>
                {
                    selectedContact && (<ContactInfo onClose = {closeModal}/>)
                }
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