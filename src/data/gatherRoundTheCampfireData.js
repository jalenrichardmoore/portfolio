// Image Files
import gatherRoundTheCampfire_01 from '../assets/images/Gather \'Round the Campfire/The Forest.png';
import gatherRoundTheCampfire_02 from '../assets/images/Gather \'Round the Campfire/Blue Maze Riddle.png';
import gatherRoundTheCampfire_03 from '../assets/images/Gather \'Round the Campfire/Green Avatar Dialogue.png';
import gatherRoundTheCampfire_04 from '../assets/images/Gather \'Round the Campfire/Orange Maze Avatars.png';
import gatherRoundTheCampfire_05 from '../assets/images/Gather \'Round the Campfire/Red Avatar Dialogue.png';
import gatherRoundTheCampfire_06 from '../assets/images/Gather \'Round the Campfire/Red Maze Treasure.png';
import gatherRoundTheCampfire_07 from '../assets/images/Gather \'Round the Campfire/The Cabin.png';
import gatherRoundTheCampfire_08 from '../assets/images/Gather \'Round the Campfire/The Orange Maze.png';
import gatherRoundTheCampfire_09 from '../assets/images/Gather \'Round the Campfire/Title Screen.png';
import gatherRoundTheCampfire_10 from '../assets/images/Gather \'Round the Campfire/Yellow Avatar.png';
import gatherRoundTheCampfire_11 from '../assets/images/Gather \'Round the Campfire/Yellow Maze Objective.png';

// Project Page Hero Section
export const heroSection = {
    title: 'Gather \'Round the Campfire',
    tagline: 'Search the forest. Observe the flames. Save the Bond.',
    image: gatherRoundTheCampfire_01,
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            <strong>Gather 'Round the Campfire</strong> is a Unity-based puzzle-adventure game created as a term project for a 
            college Game Design course. The game takes place in a quiet forest, where the player takes on the role of the weakened 
            bond between five hikers who died during a fatal snowstorm. The goal is to restore the connection between them by 
            recovering their lost treasures so their lingering spirits can find closure and move on.
            <br /><br />
            The gameplay alternates between two phases:
            <br /><br />
            <ul className = 'overview-list'>
                <li>
                    <strong>Forest Phase</strong>: while in the forest, collect materials to stoke campfires and deliver them to the hikers
                    to uncover the events leading to their deaths.
                </li>
                <br />
                <li>
                    <strong>Maze Phase</strong>: during the night, enter surreal mazes representing the hikers' minds and complete various
                    objectives to retrieve their lost treasures.
                </li>
            </ul>
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Control Scheme',
        description: 'Use either \'WASD\' of the arrow keys for player movement, and rotate the camera with the mouse. ' +
                     'While in the forest, press \'Spacebar\' to jump and \'Shift\' to toggle sprinting. The \'E\' key is used to ' +
                     'interact with objects. Use it to collect/deposit forest materials, collect objects to complete maze objectives, ' +
                     'and toggle the riddle submission screen (only applicable in The Blue Maze).'
    },
    {
        feature: 'Forest Phase',
        description: 'The first gameplay phase last approximately three minutes, represented through a day-night cycle. ' +
                     'Players must explore the forest and gather materials to bring back to campsites to unlock dialogue and ' +
                     'add extra time to the second phase. This dialogue gradually reveals their backstories, feelings towards ' +
                     'the other hikers, and the circumstances of their deaths.'
    },
    {
        feature: 'Maze Phase',
        description: 'During the second gameplay phase, the player will enter the mazes in a set order. Each maze has a unique objective ' +
                     'to achieve before accessing the treasure. Upon completing each objective, the player is automatically transported ' +
                     'to the treasure room. Successfully collecting an item removes that hiker from the forest and progresses the player ' +
                     'to the next maze after the forest section.'
    },
    {
        feature: 'Guidance Systems',
        description: 'There are several systems to help the player navigate the mazes. In each maze, there are several glowing ' +
                     'white orbs serving as waypoints that lead the player towards their objective, as well as black orbs ' +
                     'signalling wrong turns. At any point inside a maze, the player can press the \'Esc\' key to return to the ' +
                     'beginning of the maze. Additionally, each maze has a secret cheat key to assist with completing that ' +
                     'maze\'s objective. The specific key changes between mazes.'
    }
]

// Project Page Gallery Images
export const gallery = [gatherRoundTheCampfire_01, gatherRoundTheCampfire_02, gatherRoundTheCampfire_03, gatherRoundTheCampfire_04, gatherRoundTheCampfire_05, gatherRoundTheCampfire_06, gatherRoundTheCampfire_07, gatherRoundTheCampfire_08, gatherRoundTheCampfire_09, gatherRoundTheCampfire_10, gatherRoundTheCampfire_11];

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            <strong>Gather 'Round the Campfire</strong> was my first serious exploration of blending gameplay and narrative elements,
            with an emphasis on delivering deep storytelling through interactive mechanics. This skill is something I aim to further
            improving in future projects.
            <br /><br />
            One of my proudest personal achievements with this game was designing the dialogue system for the hikers, used throughout
            the entire game. All dialogue was stored in Scriptable Objects, and I built a system to manage and control dialogue progression
            consistently across different types of triggers and interactions.
            <br /><br />
            Throughout development, I also became properly familiar with several important Unity tools. I used the engine's terrain system
            to sculpt the forest environment, ProBuilder to construct the cabin featured in the final scene, and integrated the hikers' models
            and animations from Mixamo.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Scripts on Github',
        link: 'https://github.com/jalenrichardmoore/gather-round-the-campfire-scripts'
    },
    {
        text: 'Play Game on Itch',
        link: 'https://jalen-moore.itch.io/gather-round-the-campfire'
    }
]