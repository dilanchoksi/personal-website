import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Skills_V2 from "./components/Skills_V2";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// add NAV animations (hover)
// add FramerMotion to navbar (zoom in on load)

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Skills_V2 />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
