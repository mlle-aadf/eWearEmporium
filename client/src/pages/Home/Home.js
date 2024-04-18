import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";

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
      <h1>
        E-WEAR <br /> EMPORIUM
      </h1>
      <br />
      <h2>"Insert Hero section here"</h2>
      <br />
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
};
export default Home;
