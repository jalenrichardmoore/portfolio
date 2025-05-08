import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({linkpage, title, description, image, altText, tools}) {
    return (
        <Link to = {linkpage} className = 'link-wrapper'>
            <div className = 'card-project'>
                <div className = 'card-project-image'>
                    <img src = {image} alt = {altText}></img>
                </div>
                <div className = 'card-project-body'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className = 'card-project-tools'>
                    {
                        tools.map((tool, index) => (
                            <button key = {index}>
                                <p>{tool}</p>
                            </button>
                        ))
                    }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;