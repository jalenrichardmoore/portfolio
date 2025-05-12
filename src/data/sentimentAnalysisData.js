// Image Files
import sentimentAnalysis_01 from '../assets/images/Movie Review Sentiment Analysis/Positive Analysis.png';
import sentimentAnalysis_02 from '../assets/images/Movie Review Sentiment Analysis/Feedback Submission.png';
import sentimentAnalysis_03 from '../assets/images/Movie Review Sentiment Analysis/Incorrect Analysis.png';
import sentimentAnalysis_04 from '../assets/images/Movie Review Sentiment Analysis/Negative Analysis.png';
import sentimentAnalysis_05 from '../assets/images/Movie Review Sentiment Analysis/Positive Analysis.png';
import sentimentAnalysis_06 from '../assets/images/Movie Review Sentiment Analysis/Positive Review.png';

// Project Page Hero Section
export const heroSection = {
    title: 'Movie Review Sentiment Analysis',
    tagline: 'A Streamlit application that analyzes if a given movie review is either positive or negative.',
    image: sentimentAnalysis_01,
    builds: [
        {
            name: 'Project Build',
            path: 'builds/Movie Review Sentiment Analysis/project-build.zip'
        }
    ]
}

// Project Page Overview Section
export const overviewSection = {
    text: (
        <p>
            <strong>Movie Review Sentiment Analysis</strong> is a Python-based application that uses a machine learning model to 
            classify movie reviews as either "positive" or "negative." Built using the Streamlit library, this tool lets users input
            written reviews and instantly receive sentiment predictions powered by a trained algorithm.
        </p>
    )
}

// Project Page Features Section
export const featuresSection = [
    {
        feature: 'Algorithm Training',
        description: 'The classifier model integrated in this application uses Stochastic Gradient Descent (SGD). ' +
                     'The initial training dataset consisted of 50,000 sample movie reviews.'
    },
    {
        feature: '\'Bag-of-Words\' Model',
        description: 'Before classifying reviews, the algorithm adopts a \'bag-of-words\' approach to convert reviews into ' +
                     'feature vectors based on the frequency of unique words. Each review is passed through a HashingVectorizer ' +
                     'object to remove all common or unnecessary words and punctuation.'
    },
    {
        feature: 'User Feedback',
        description: 'When the user submits a review for classification, the application will display the model\'s prediction, ' +
                     'along with the probability score of the model\'s confidence in that prediction. Users will then have the ' +
                     'opportunity to give feedback on if the prediction was correct. Submitting this feedback will train the model ' +
                     'further on this new review.'
    },
    {
        feature: 'Reviews Database',
        description: 'Newly submitted reviews are stored within a local database. On each application run, the classifier model ' +
                     'will update itself with randomly selected reviews from this database.'
    }
]

// Project Page Gallery Images
export const gallery = [sentimentAnalysis_01, sentimentAnalysis_02, sentimentAnalysis_03, sentimentAnalysis_04, sentimentAnalysis_05, sentimentAnalysis_06];

// Project Page Developer's Note
export const developerNote = {
    text: (
        <p>
            This project began as an exercise for my college Machine Learning course which I later expanded on post-graduation to become
            a self-contained web application. Completing this assignment originally taught me more about using machine learning algorithms with text input; 
            rebuilding it as a Streamlit application allowed me to learn more about Streamlit's interfaces, deploying interactive Python 
            tools and handling real-time user input.
        </p>
    )
}

// Project Links
export const links = [
    {
        text: 'View Scripts on Github',
        link: 'https://github.com/jalenrichardmoore/movie-review-sentiment-analysis'
    }
]