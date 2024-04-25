import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Products from "./pages/Products/Products.js";
import Product from "./pages/Products/Product.js";
import About from "./pages/About/About.js";
import Brands from "./pages/Brands/Brands.js";
import LoginSignUp from "./pages/LoginSignUp/index.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Success from "./pages/Success/Success.js";
import Contact from "./pages/Contact/Contact.js";
import ContactSuccess from "./pages/Success/ContactSuccess.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact-success" element={<ContactSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
