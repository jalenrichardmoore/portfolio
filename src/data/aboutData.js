import { Link } from "react-router-dom"

// Biography
export const biography = (
    <p>
        Hi! I'm Jalen Moore, a Junior Gameplay Programmer and AI Engineer. 
        I graduated from Loyola University New Orleans in December 2024 with a degree in Computer Science - Game Programming. 
        My game development interests focus on AI integration and narrative design. Specifically, I'm passionate about creating systems and stories that adapt and evolve from player activity.
    </p>
)

// Biography Cards
export const biographyCards = [
    {
        title: 'Game Design',
        body: (
            <p>
                When designing gameplay mechanics, I gravitate towards systems that encourage player creativity over more linearly structured sequences.
                I want players to explore the rules and abilities at their disposal, and come up with unique solutions to overcome challenges.
                As a gameplay programmer, my goal is to build experiences where experimentation is encouraged and creativity is always rewarded.
            </p>
        )
    },
    {
        title: 'Machine Learning Integration',
        body: (
            <p>
                I believe machine learning to be an invaluable tool for creating games that effectively respond to players on an individual level.
                By feeding performance data into adaptive systems, a single game can offer multiple unique experiences that are tailored to all play styles.
                My thesis, <Link to = '/projects/escape-protocol'><em>Escape Protocol</em></Link>, explores this idea through dynamic difficulty.
                By adjusting enemy AI based on player performance, the game maintains the right level of challenge, regardless of who's playing.
            </p>
        )
    },
    {
        title: 'Narrative Design',
        body: (
            <p>
                When writing stories for games, my main priority is preserving player agency, making sure the player is the one shaping the narrative through their actions.
                I aim to create stories with meaningful, lasting consequences that reflect the player's decisions. In <Link to = '/projects/gather-round-the-campfire'><em>Gather 'Round the Campfire</em></Link>, my first narrative-driven project,
                the story progresses entirely through the player's interactions with the five central characters, and their actions are the only method of progressing the plot.
            </p>
        )
    }
]

// Experience Cards
export const experienceCards = [
    {
        jobTitle: 'QA Tester',
        business: 'Digital Age Quality Assurance Corp.',
        years: '02/2025 - Present',
        responsibilities: (
            <ul>
                <li>Participated in regular Beta and Focus tests for pre-release video games across multiple genres and platforms</li>
                <li>Followed structured test plans to evaluate gameplay mechanics, control schemes, and player experience</li>
                <li>Delivered detailed written feedback and survey responses to developers, supporting iterative design improvements</li>
                <li>Identified, documented, and reported bugs and performance issues to improve overall game stability and user experience</li>
            </ul>
        ),
        skills: ['Quality Assurance', 'Communication', 'Reliability']
    },
    {
        jobTitle: 'Subject Tutor',
        business: 'Loyola University New Orleans',
        years: '08/2023 - 12/2024',
        responsibilities: (
            <ul>
                <li>Conducted 143 tutoring sessions in computer science, calculus, and algebra</li>
                <li>Guided 30+ students through the registration process, improving student engagement</li>
                <li>Assisted students with debugging, code optimization, and general problem solving</li>
                <li>Applied professional teaching methodologies to enhance tutoring effectiveness and improve student comprehension and retention</li>
            </ul>
        ),
        skills: ['C++', 'Java', 'Object-Oriented Programming', 'Problem Solving', 'Communication', 'Reliability']
    },
    {
        jobTitle: 'AI Engineer',
        business: 'Radical AI Lab',
        years: '05/2024 - 08/2024',
        responsibilities: (
            <ul>
                <li>Developed an AI teaching assistant that leveraged the Google Gemini large language model to produce automated content</li>
                <li>Designed a flashcard and multiple-choice quiz generator capable of taking in information, reviewing it, and creating educational resources</li>
                <li>Collaborated in a cross-functional team by attending daily agile meetings, contributing to development for a worksheet generator</li>
            </ul>
        ),
        skills: ['Python', 'Artificial Intelligence', 'Large Language Models', 'Teamwork', 'Collaboration']
    },
    {
        jobTitle: 'Camp Counselor',
        business: 'City of Slidell',
        years: '06/2022 - 07/2023',
        responsibilities: (
            <ul>
                <li>Ensured the safety of 50+ children daily both at camp and during biweekly field trips</li>
                <li>Orchestrated group games and activities, fostering engagement and teamwork</li>
                <li>Maintained gym equipment for recreational use, providing a functional environment</li>
                <li>Mentored new counselors on responsibilities and proper procedure</li>
            </ul>
        ),
        skills: ['Collaboration', 'Teamwork', 'Leadership', 'Reliability']
    }
]

// Education Cards
export const educationCards = [
    {
        name: 'Loyola University New Orleans',
        degree: 'Bachelor of Science - BS, Computer Science - Game Programming, UHP',
        years: '08/2021 - 12/2024',
        honors: '3.98 GPA, Dean\'s List, Summa Cum Laude',
        courses: 'Game Programming, Game Design, Software Development, Artificial Intelligence, Machine Learning, Relational Databases, Linear Algebra',
        extracurriculars: 'National Society of Leadership & Success, Phi Eta Sigma National Honor Society'
    },
    {
        name: 'Salmen High School',
        degree: 'High School Diploma',
        years: '08/2017 - 05/2021',
        honors: '4.0 GPA, Valedictorian',
        extracurriculars: 'Marching Band, BETA, National Honors Society'
    }
]