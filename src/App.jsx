import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Mytechstack from './pages/Mytechstack';

import './App.css';

function App() {
  return (
    <div className="app-container">
      
        <div className="content-container">
          <Navbar/>
          <Home/>
          <Mytechstack/>
          <Projects/>
          <Contact/>
        </div>
     
    </div>
  );
}

export default App;