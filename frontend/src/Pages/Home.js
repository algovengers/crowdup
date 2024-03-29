import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";


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
    </>
  );
};

export default Home;
