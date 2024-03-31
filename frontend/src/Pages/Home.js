import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import HeroSection from "../Components/Sections/HeroSection";
import Navbar from "../Components/ui/Navbar";
import FeaturesSection from "../Components/Sections/FeaturesSection";
import TeamsSection from "../Components/Sections/TeamsSection";
import Footer from "../Components/ui/Footer";
import TopNotch from "../Components/Sections/TopNotch";

const Home = () => {
  const { currentUser } = useAuth();

  const page = currentUser ? "/dashboard" : "/signup";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar
        activeLink={activeLink}
        isMenuOpen={isMenuOpen}
        handleActiveLink={handleActiveLink}
        handleMenuToggle={handleMenuToggle}
        page={page}
      />

      <HeroSection page={page} />

      <FeaturesSection />

      <TopNotch page={page} />

      <TeamsSection />

      <Footer />
    </>
  );
};

export default Home;
