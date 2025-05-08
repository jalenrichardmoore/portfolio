import React from 'react';

function FeaturesSection({features}) {
    return (
        <div className = 'project-section-header'>
            <h2>Key Features</h2>
            <br /><br /><br />
            <div className = 'features-text'>
                {
                    features.map((feature) => (
                        <div>
                            <h3>{feature.feature}</h3>
                            <br />
                            <p>{feature.description}</p>
                            <br /><br /><br />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FeaturesSection;