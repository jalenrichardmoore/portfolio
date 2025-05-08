import React, { useState, useEffect, useRef } from 'react';

function DropdownDownloadButton({buildOptions}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, []);

    return (
        <div className = 'hero-section-download-button' ref = {menuRef}>
            {buildOptions && <button className = 'download-button' onClick = {() => { setOpen(prev => !prev);}}>Download</button>}
            {open && (
                <ul className = 'download-menu'>
                    {
                        buildOptions.map((build, index) => (
                            <li key = {index}>
                                <a className = 'dropdown-item' href = {`${process.env.PUBLIC_URL}/${build.path}`} download>{build.name}</a>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}

function HeroSection({title, tagline, image, buildOptions}) {
    return (
        <div className = 'hero-section'>
            <div className = 'hero-section-left'>
                <div className = 'hero-section-title'>
                    <h1>{title}</h1>
                </div>
                <div className = 'hero-section-second-row'>
                    <div className = 'hero-section-tagline'>
                        <p>{tagline}</p>
                    </div>
                    <DropdownDownloadButton buildOptions = {buildOptions}/>
                </div>
            </div>
            <div className = 'hero-section-right'>
                <div className = 'hero-section-image'>
                    <img src = {image} alt = 'Evaluation Screen'/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;