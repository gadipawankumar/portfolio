import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="section">
          <About />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
