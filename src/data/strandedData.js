// Image Files
import stranded_01 from '../assets/images/Stranded/Watchtower.png';
import stranded_02 from '../assets/images/Stranded/Aerial View.png';
import stranded_03 from '../assets/images/Stranded/Endless Level.png';
import stranded_04 from '../assets/images/Stranded/Game Over Screen.png';
import stranded_05 from '../assets/images/Stranded/Jelly Monster.png';
import stranded_06 from '../assets/images/Stranded/Stranded Level.png';
import stranded_07 from '../assets/images/Stranded/Victory Screen.png';

// Project Page Hero Section
export const heroSection = {
    title: 'Stranded',
    tagline: 'Can you survive on a deserted island long enough to escape?',
    image: stranded_01,
    builds: [
        {
            name: 'Windows Build',
            path: 'builds/Stranded/Stranded - Windows Build.zip'
        }
    ]
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            <strong>Stranded</strong> is a Unity-based first-person shooter survival game developed as the term project for my college Game Programming course.
            Set on a remote island, the game challenges players to survive waves of monsters while constructing and defending signal towers to call for rescue.
            <br /><br />
            The game offers two modes: in <strong>Stranded Mode</strong>, players must build and defend towers until the progress bar fills, and in <strong>Endless Mode</strong>,
            players aim for a high score, defeating as many monsters as possible before their health is depleted.
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Control Scheme',
        description: 'The game uses standard first-person shooter controls. Use either WASD or the arrow keys for player movement, ' +
                     'and the mouse for aiming and firing. Additionally, the \'Spacebar\' and \'E\' keys control swapping out ammo types ' +
                     'and constructing towers, respectively.'
    },
    {
        feature: 'Ammo Types',
        description: 'The player has access to two ammo types: Light and Heavy. Heavy ammo deals more damage but travels slower and ' +
                     'requires a 3-second cooldown. Ammo pickups for both types will randomly spawn across the island.'
    },
    {
        feature: 'Constructing Towers',
        description: 'Each tower has its own health bar, which is depleted by monster attacks. When a tower\'s health reaches zero, ' +
                     'it is destroyed. To replace towers, players can construct new ones by defeating enemies. A blue meter fills ' +
                     'with each monster defeated, and after five kills, the player has the ability to place a new tower, ' +
                     'resetting the meter; however, new towers must be placed a sufficient distance from existing ones. ' +
                     'Note that having multiple towers constructed at once increases the speed at which the rescue progress bar fills, ' +
                     'and that once the meter is filled, additional kills will not increase it further until it has reset.'
    },
    {
        feature: 'Enemy Types',
        description: 'There are five enemy types, each a different colors. Each variant has a distinct movement pattern, ' +
                     'rising different heights into the air before attacking. Different types also have varying amounts of ' +
                     'health and deal varying amounts of damage.'
    }    
]

// Project Page Gallery Images
export const gallery = [stranded_01, stranded_02, stranded_03, stranded_04, stranded_05, stranded_06, stranded_07];

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            <strong>Stranded</strong> was my first complete game project in Unity, serving as the capstone for all of the fundamentals 
            in gameplay programming, enemy behavior, and player feedback loops. One of the most challenging aspects was designing fair 
            and stylistic enemy AI. Originally, the enemy monsters immediately targeted towers after being spawned, which was too 
            overwhelming for the player to respond to. I reworked the system to have the monsters rise longer out of the water, giving
            the player more reaction time. I also added a rotating spawn pattern to make the enemy movement feel more dynamic.
            <br /><br />
            This project taught me not only the beginner technical aspects of game development, but also the impact of 
            small design choices on player experience.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Scripts on Github',
        link: 'https://github.com/jalenrichardmoore/stranded-scripts'
    },
    {
        text: 'Play Game on Itch',
        link: 'https://jalen-moore.itch.io/stranded'
    }
]