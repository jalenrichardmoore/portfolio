// Image Files
import portfolio from '../assets/icons/portfolio.jpg';

// Project Page Hero Section
export const heroSection = {
    title: 'Personal Portfolio',
    tagline: 'This website, which contains information about my professional experience, skills and projects I\'ve created.',
    image: portfolio,
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            This portfolio website was built using React to showcase my personal background, professional experience, and creative
            projects across game development and software development. This website serves as a central hub where visitors can learn
            more about me, review my resume, and explore both the academic and personal work I've accomplished.
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Header Navigation',
        description: 'The header atop each page provides quick navigation to my about section and projects list, ' +
                     'along with links to my profiles on various social platforms.'
    },
    {
        feature: 'About Page',
        description: 'The \'About Page\' details my general background, philosophies on different aspects on game development, ' +
                     'and outlines my work experience. This information is also more readily available in my resume, ' +
                     'which is available to be downloaded on this page.'
    },
    {
        feature: 'Projects Page',
        description: 'The \'Projects Page\' is divided into three categories: \'Game Development,\' \'Software Development,\' and \'Narrative Design.\''
    },
    {
        feature: 'GitHub Integration',
        description: 'All code-based projects include links to Github repositories containing their scripts for transparency and review.'
    }
]

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            Creating this website not only gave me a way to properly organize and present my work, but gave me the opportunity to deepen 
            my understanding of React. By building this site, I gained understanding in component-based architecture, routing techniques,
            and refreshed my knowledge on CSS. This project represents my commitment to continual growth and learning while maintaining a
            professional, accessible method of documenting that growth.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Scripts on Github',
        link: 'https://github.com/jalenrichardmoore/portfolio'
    }
]