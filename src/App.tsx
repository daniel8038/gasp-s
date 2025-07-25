import gsap from "gsap";
import NavBar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />

      <HeroSection />

      <div className="w-full min-h-svh"></div>
    </main>
  );
}

export default App;
