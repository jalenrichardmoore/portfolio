import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import EscapeProtocol from './pages/Projects/EscapeProtocol';
import GatherRoundTheCampfire from './pages/Projects/GatherRoundTheCampfire';
import Stranded from './pages/Projects/Stranded';
import TheLegendaryPBJ from './pages/Projects/TheLegendaryPBJ';
import Portfolio from './pages/Projects/Portfolio';
import SentimentAnalysis from './pages/Projects/SentimentAnalysis';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (    
    <div>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/' element = {<Home />} />
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/about' element = {<About />} />
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects' element = {<Projects />} />
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/escape-protocol' element = {<EscapeProtocol />}/>
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/gather-round-the-campfire' element = {<GatherRoundTheCampfire />}/>
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/stranded' element = {<Stranded />}/>
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/the-legendary-pb-and-j' element = {<TheLegendaryPBJ />} />
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/portfolio' element = {<Portfolio />} />
            <Route path = 'https://jalenrichardmoore.github.io/portfolio/projects/movie-review-sentiment-analysis' element = {<SentimentAnalysis />} />
          </Routes>
        </Router> 
    </div>      
  );
}

export default App;