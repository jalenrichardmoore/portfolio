// Game Development Image Files
import escapeProtocol from '../assets/images/Escape Protocol/Lower Left Quadrant.png';
import gatherRoundTheCampfire from '../assets/images/Gather \'Round the Campfire/The Forest.png';
import stranded from '../assets/images/Stranded/Watchtower.png';
import theLegendaryPBJ from '../assets/images/The Legendary PB&J/Kitchen.png';

// Software Development Image Files
import portfolio from '../assets/icons/portfolio.jpg';
import sentimentAnalysis from '../assets/images/Movie Review Sentiment Analysis/Positive Analysis.png';

// Game Development Project Cards
export const gameDevelopmentCards = [
    {
        linkpage: '/projects/escape-protocol',
        title: 'Escape Protocol',
        description: 'A Unity-based game that integrates an XGBoost algorithm to dynamically modify game difficulty by changing AI-trained enemy models',
        image: escapeProtocol,
        altText: 'Escape Protocol',
        tools: ['Unity', 'ML-Agents', 'C#', 'Python', 'Machine Learning']
    },
    {
        linkpage: '/projects/gather-round-the-campfire',
        title: 'Gather \'Round the Campfire',
        description: 'A narrative-driven adventure game made in the Unity engine centered around five hikers trapped in a forest',
        image: gatherRoundTheCampfire,
        altText: 'Gather \'Round the Campfire',
        tools: ['Unity', 'C#']
    },
    {
        linkpage: '/projects/stranded',
        title: 'Stranded',
        description: 'A first-person survival shooter where the  goal is to defend watchtowers from sea creatures',
        image: stranded,
        altText: 'Stranded',
        tools: ['Unity', 'C#']
    },
    {
        linkpage: '/projects/the-legendary-pb-and-j',
        title: 'The Legendary PB&J',
        description: 'A text-based adventure game through  a crowded mansion where the player must  collect sandwich ingredients',
        image: theLegendaryPBJ,
        altText: 'The Legendary PB&J',
        tools: ['Unity', 'ScriptableObjects', 'C#']
    }
]

// Software Development Project Cards
export const softwareDevelopmentCards = [
    {
        linkpage: '/projects/portfolio',
        title: 'Personal Portfolio',
        description: 'A website containing information about my professional experience, skills, and projects I\'ve created',
        image: portfolio,
        altText: 'Portfolio',
        tools: ['React', 'HTML', 'CSS']
    },
    {
        linkpage: '/projects/movie-review-sentiment-analysis',
        title: 'Movie Review Sentiment Analysis',
        description: 'A Streamlit application that analyzes if a given movie review is either positive or negative',
        image: sentimentAnalysis,
        altText: 'Movie Review Sentiment Analysis',
        tools: ['Python', 'Streamlit', 'Machine Learning']
    }
]