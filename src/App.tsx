import gsap from "gsap";
import NavBar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSectiom";
import BenefitSection from "./sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
