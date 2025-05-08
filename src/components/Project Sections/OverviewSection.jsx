import React from 'react';

function OverviewSection({text}) {
    return (
        <div className = 'project-section-header'>
            <h2>Overview</h2>
            <br /><br /><br />
            <div className = 'overview-text'>
                {text}
                <br /><br /><br />
            </div>
        </div>
    );
}

export default OverviewSection;
