import React, {useEffect} from 'react';

import Header from '../components/Header';

import { biography, biographyCards, experienceCards, educationCards } from '../data/aboutData';

const InfoCard = ({title, body}) => {    
    return (
        <div className = 'card'>
            <div className = 'card-info'>
                <div className = 'card-info-title'>
                    <h3>{title}</h3>
                </div>
                <div className = 'card-info-body'>
                    <p>{body}</p>
                </div>
            </div>
        </div>
        
    );
};

const ExperienceCard = ({jobTitle, business, years, responsibilities, skills}) => {
    return (
        <div className = 'card'>
            <div className = 'card-experience'>
                <h3>{jobTitle} - {business}</h3>
                <p>{years}</p>
                <br></br>
                {responsibilities}
                <div className = 'card-experience-skills'>
                    {
                        skills.map((skill, index) => (
                            <button key = {index}>
                                <p>{skill}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const EducationCard = ({name, degree, years, honors, courses, extracurriculars}) => {
    return (
        <div className = 'card'>
            <div className = 'card-education'>
                <h3>{name}</h3>
                <p>{degree}</p>
                <br />
                <ul>
                    <li>{years}</li>
                    <li>Honors: {honors}</li>
                    {courses && <li>Courses: {courses}</li>}
                    <li>Extracurricular Activities: {extracurriculars}</li>
                </ul>
            </div>
        </div>
    );
};

function About() {
    useEffect(() => {
            document.title = 'Jalen Moore | About';
        }, []);
    
    return (
        <div className = 'about-page'>
            <Header />
            <div className = 'about-me'>
                <h1>About Me</h1>
                <div className = 'underline' />
                <div className = 'about-me-bio'>
                    {biography}
                </div>
                <div className = 'about-me-info-cards'>
                    {
                        biographyCards.map(card => (
                            <InfoCard title = {card.title} body = {card.body} />
                        ))
                    }
                </div>
            </div>
            <div className = 'about-experience'>
                <h1>Work Experience</h1>
                <div className = 'underline' />
                <div className = 'about-experience-cards'>
                    {
                        experienceCards.map(card => (
                            <ExperienceCard jobTitle = {card.jobTitle} business = {card.business} years = {card.years} responsibilities = {card.responsibilities} skills = {card.skills}/>
                        ))
                    }
                </div>
            </div>
            <div className = 'about-education'>
                <h1>Education</h1>
                <div className = 'underline' />
                <div className = 'about-education-cards'>
                    {
                        educationCards.map(card => (
                            <EducationCard name = {card.name} degree={card.degree} years={card.years} honors={card.honors} courses = {card.courses} extracurriculars={card.extracurriculars}/>
                        ))
                    }
                </div>
            </div>
            <div className = 'resume-button'>
                <a href = {`${process.env.PUBLIC_URL}/resume.pdf`} download>
                    <button>Download Resume as PDF</button>
                </a>
            </div>
        </div>
    );
}

export default About;