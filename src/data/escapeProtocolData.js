// Image Files
import escapeProtocol_01 from '../assets/images/Escape Protocol/Lower Left Quadrant.png';
import escapeProtocol_02 from '../assets/images/Escape Protocol/Evaluation Screen.png';
import escapeProtocol_03 from "../assets/images/Escape Protocol/Chasing Robber.png";
import escapeProtocol_04 from "../assets/images/Escape Protocol/Downtown Level.png";
import escapeProtocol_05 from "../assets/images/Escape Protocol/Robber.png";
import escapeProtocol_06 from "../assets/images/Escape Protocol/Selecting Cop.png";

// Project Page Hero Section
export const heroSection = {
    title: 'Escape Protocol',
    tagline: 'An AI-driven twist on a classic children\'s game!',
    image: escapeProtocol_01,
    builds: [
        {
            name: 'Windows Build',
            path: 'builds/Escape Protocol/Escape Protocol - Windows Build.zip'
        }
    ]
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            <strong>Escape Protocol</strong> is a Unity-based game that reimagines the classic playground game <em>Cops & Robbers</em>.
            Designed as part of my college honors thesis, the game serves as a demonstration on how machine learning algorithms can be used to personalize
            gameplay experiences, specifically through dynamic difficulty adjustment.
            <br /><br />
            At the start of each round, players choose whether to play as a cop or a robber, each role coming with their own objectives and abilities.
            Robbers must collect hidden diamonds and return them to the safe zone without getting caught. Meanwhile, cops must locate and tag all robbers before they succeed.
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Unique Abilities',
        description: 'Each role possesses a special ability to assist them with completing objectives: ' +
                     'cops can temporarily double their movement speed, while robbers can briefly turn invisible, ' +
                     'making them immune to being captured. Both abilities operate on a 10-second cooldown.'
    },
    {
        feature: 'Machine Learning Integration',
        description: 'After each round, gameplay metrics on the player\'s performance are collected to be analyzed by an XGBoostClassifier machine learning model,' +
                     ' which has been trained on 10,000 sample entries. Specifically, the metrics analyzed are round duration, player success, ' +
                     'the player\'s role, the objective progress of both teams, and both teams\' ability usage. The model will then evaluate whether the current difficulty is ' +
                     'too easy, too hard, or appropriate, and adjusts the game\'s difficulty accordingly.'
    },
    {
        feature: 'AI Opponents',
        description: 'Whichever role the player does not select will instead be controlled by an AI agent trained using Unity\'s ML-Agents framework. '+ 
                     'There are 10 unique models per role, each trained for progressively longer durations to simulate increasing skill levels. '+
                     'Per the XGBoost algorithm\'s evaluation, the game will swap between these models to create the appropriate difficulty level.'
    },
    {
        feature: 'Round-Based Structure',
        description: 'When the game initially loads, the AI models will always reset to the median difficulty. '+
                     'As such, the game is best experienced over multiple rounds. As the player\'s performance changes over time, '+
                     'the enemies\' behavior will also adjust to accommodate, ensuring an experience that is satisfyingly challenging.'
    }
]

// Project Page Gallery Images
export const gallery = [escapeProtocol_01, escapeProtocol_02, escapeProtocol_03, escapeProtocol_04, escapeProtocol_05, escapeProtocol_06]

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            This project was developed as the focus of my honors thesis on machine learning in game design.
            I wanted to explore how games can adapt their difficulty settings to individual players, both beginners and advanced. Traditionally,
            games only offer static difficulty options that cannot fully accommodate a player's unique strengths and weaknesses. By implementing systems
            like this one that analyzes specific play styles, games can more effectively eliminate difficulty as an accessibility barrier.
            <br /><br />
            This process involved multiple attempts to train a model that not only accepted the necessary input features, but accurately and efficiently 
            evaluated a game session's difficulty. Integrating the model into Unity involved a Python interpreter to run the Python scripts. For this reason,
            only a Windows build is currently offered.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Game Scripts',
        link: 'https://github.com/jalenrichardmoore/escape-protocol-scripts'
    },
    {
        text: 'View Itch Page',
        link: 'https://jalen-moore.itch.io/escape-protocol'
    }
]