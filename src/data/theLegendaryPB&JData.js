// Image Files
import theLegendaryPBJ_01 from '../assets/images/The Legendary PB&J/Kitchen.png';
import theLegendaryPBJ_02 from '../assets/images/The Legendary PB&J/Complete Inventory.png';
import theLegendaryPBJ_03 from '../assets/images/The Legendary PB&J/Daughter.png';
import theLegendaryPBJ_04 from '../assets/images/The Legendary PB&J/Den.png';
import theLegendaryPBJ_05 from '../assets/images/The Legendary PB&J/Examining Cup.png';
import theLegendaryPBJ_06 from '../assets/images/The Legendary PB&J/Incomplete Inventory.png';
import theLegendaryPBJ_07 from '../assets/images/The Legendary PB&J/Victory Screen.png';
import theLegendaryPBJ_08 from '../assets/images/The Legendary PB&J/Title Screen.png';


// Project Page Hero Section
export const heroSection = {
    title: 'The Legendary PB&J',
    tagline: 'A crowded mansion. A starving child. And no peanut butter and jelly!',
    image: theLegendaryPBJ_01,
    builds: [
        {
            name: 'Windows Build',
            path: 'builds/The Legendary PB&J/The Legendary PB&J - Windows Build.zip'
        },
        {
            name: 'Mac Build',
            path: 'builds/The Legendary PB&J/The Legendary PB&J - Mac Build.zip'
        }
    ]
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            <strong>The Legendary PB&J</strong> is a Unity-based text adventure game that focuses on classic text-based exploration. 
            You play as a parent seeking refuge from a powerful storm with your daughter in the town mayor's mansion. When she begins 
            to grow hungry, you must venture through the mansion's rooms, talking to other citizens and collecting items to gather the 
            necessary ingredients to make a peanut butter and jelly sandwich.
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Text Parser',
        description: 'The game uses a verb-noun parser to read player input. When the player attempts an action on a specific object, ' +
                     'the parser splits the words apart, checks if the action is valid, and then attempts to perform the action on ' +
                     'the object. For this reason, all input commands must be given in the form \'verb + noun.\''
    },
    {
        feature: '\'Examine\' Input Action',
        description: 'The \'Examine\' input action gives a detailed description about objects in the current room. ' +
                     'The input action must be paired with an object.'
    },
    {
        feature: '\'Go\' Input Action',
        description: 'The \'Go\' input action moves the player through the rooms of the mansion. ' +
                     'The input action must be paired with a cardinal direction given in the current room\'s description.'
    },
    {
        feature: '\'Take\' Input Action',
        description: 'The \'Take\' input action takes an object in the current room and adds it to the player\'s inventory. ' +
                     'The input action must be paired with an object in the room.'
    },
    {
        feature: '\'Give\' Input Action',
        description: 'The \'Give\' input action removes an item from the player\'s inventory to give to a person as a way of solving puzzles. ' +
                     'The input action must be paired with an item in the player\'s inventory while in the room of the person who wants the item.'
    },
    {
        feature: '\'Use\' Input Action',
        description: 'The \'Use\' input action removes an item from the player\'s inventory to solve puzzles throughout the mansion. ' +
                     'The input action must be paired with an object in the inventory and used in the room where the object\'s puzzle is located.'
    },
    {
        feature: '\'Talk\' Input Action',
        description: 'The \'Talk\' input action allows the player to get dialogue and hints from people throughout the mansion. ' +
                     'The input action must be paired with a person while in the same room as that person.'
    },
    {
        feature: '\'Inventory\' Input Action',
        description: 'The \'Inventory\' input action displays all items currently in the player\'s inventory. ' +
                     'The input action can be used at anytime.'
    }    
]

// Project Page Gallery Images
export const gallery = [theLegendaryPBJ_01, theLegendaryPBJ_02, theLegendaryPBJ_03, theLegendaryPBJ_04, theLegendaryPBJ_05, theLegendaryPBJ_06, theLegendaryPBJ_07, theLegendaryPBJ_08];

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            <strong>The Legendary PB&J</strong> was my introduction to working with Scriptable Objects in Unity, which taught me how
            efficiently they can modularize scripts and game objects. Every room, item, interaction, and input action originates from a
            base script that was then modified for each unique encounter. This project also taught me about how to work more effectively
            with text as a form of player input. I hope to use the knowledge from this experience to use text more often in games as a
            form of player expression.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Scripts on Github',
        link: 'https://github.com/jalenrichardmoore/the-legendary-pb-j-scripts'
    },
    {
        text: 'Play Game on Itch',
        link: 'https://jalen-moore.itch.io/the-legendary-pb-and-j'
    }
]