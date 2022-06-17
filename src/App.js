import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
