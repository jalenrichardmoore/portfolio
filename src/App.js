import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import EscapeProtocol from './pages/Projects/EscapeProtocol';
import GatherRoundTheCampfire from './pages/Projects/GatherRoundTheCampfire';
import Stranded from './pages/Projects/Stranded';
import TheLegendaryPBJ from './pages/Projects/TheLegendaryPBJ';
import Portfolio from './pages/Projects/Portfolio';

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
      <ScrollToTop />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/projects' element = {<Projects />} />
        <Route path = '/projects/escape-protocol' element = {<EscapeProtocol />}/>
        <Route path = '/projects/gather-round-the-campfire' element = {<GatherRoundTheCampfire />}/>
        <Route path = '/projects/stranded' element = {<Stranded />}/>
        <Route path = '/projects/the-legendary-pb-and-j' element = {<TheLegendaryPBJ />} />
        <Route path = '/projects/portfolio' element = {<Portfolio />} />
      </Routes>  
    </div>
      
  );
}

export default App;