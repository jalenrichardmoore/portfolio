import React from "react";

function LinkSection({links}) {
    return (
        <div className = 'link-section'>
            <h2>Links</h2>
            <br /><br /><br />
            <div className = 'project-link-buttons'>
                {
                    links.map(link => (
                        <div className = 'action-button'>
                            <a href = {link.link} target = "_blank" rel = "noopener noreferrer"><button >{link.text}</button></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LinkSection;