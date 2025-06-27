import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import BioSection from "./components/BioSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

function App() {
  return (
    <>
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <PortfolioSection />
      <FooterSection />
    </>
  );
}

export default App;
