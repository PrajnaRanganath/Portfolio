import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests"
import Projects from "./components/Projects"
import Publications from "./components/Publications"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  return (
    <>
    <SplashScreen />
    <main>
      <Hero />
      <About />
      <Interests />
      <Projects />
      <Publications />
      <Experience />
      <Contact />
      <Footer />
    </main>
    </>
  );
}