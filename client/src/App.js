import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Products from "./pages/Products/Products.js";
import Product from "./pages/Products/Product.js";
import About from "./pages/About/About.js";
import Brands from "./pages/Brands/Brands.js";
import Login from "./pages/Login/Login.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Success from "./pages/Success/Success.js";


const App = () => {


  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:productId" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
  

}

export default App;
