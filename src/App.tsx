import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Progress from "./components/Progress";
import Focus from "./components/Focus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#000000] text-[#F5F5F7]">
      <Cursor />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Journey />
        <Certifications />
        <Progress />
        <Focus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}