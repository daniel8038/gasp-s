import gsap from "gsap";
import NavBar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />

      <HeroSection />
      <MessageSection />
      <div className="min-h-svh"></div>
    </main>
  );
}

export default App;
