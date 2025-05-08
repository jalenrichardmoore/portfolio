import React from 'react';

function DeveloperSection({text}) {
    return (
        <div className = 'project-section-header'>
            <h2>Developer's Note</h2>
            <br /><br /><br />
            <div className = 'developer-text'>
                {text}
                <br /><br /><br />
            </div>
        </div>
    );
}

export default DeveloperSection;