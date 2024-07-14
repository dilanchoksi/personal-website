import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-900"></div>
      </div>
      <div className="container mx-auto px-8">
        <div className="h-screen flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="flex-1">
            <Hero />
          </div>
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
