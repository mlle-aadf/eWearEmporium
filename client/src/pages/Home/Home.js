import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import HeroSection from "./HeroSection";
import RotatingSlides from "./RotatingSlides";

const Home = () => {
  useEffect(() => {
    document.title = "E-Wear Emporium";
  }, []);
  // BASIC LAYOUT :
  // [ ] navbar
  // [ ] hero section, button redirects to PRODUCTS
  // [ ] categories, also redirects to PRODUCTS > to pre-selected category
  // [ ] rotating brands carousel, icons link to external brand websites,“see all” button links to BRANDS
  // [ ] footer section
  // [ ] cart
  // [ ] email-signup/promo pop-up

  return (
    <>
      <NavBar />
      <HeroSection />
      <RotatingSlides />
      <Footer />
    </>
  );
};
export default Home;
