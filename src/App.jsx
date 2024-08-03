import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Languages from "./components/Skills";
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
        <Languages />
        <Experience />
        <Projects />
        <Contact />
        <div className="text-center">
          <footer className="p-5">Built from scratch by Dilan Choksi</footer>
        </div>
      </div>
    </div>
  );
};

export default App;
