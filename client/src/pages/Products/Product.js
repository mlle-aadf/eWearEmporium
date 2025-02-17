import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AddToCart from "../../components/AddToCart";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Instock from "../Products/InStock";
import SoldOut from "../Products/SoldOut";
import {
  BackBTN,
  Card,
  Img,
  Name,
  ProductPrice,
  Stock,
} from "./StyledComponents";

const Product = () => {
  // retrieves id of specifc product from url
  const { productId } = useParams();
  // declares state used to set info of the selected product
  const [productInfo, setProductInfo] = useState({});
  // declares state used to set availability of the selected product
  const [inStock, setInStock] = useState();

  useEffect(() => {
    document.title = "Our Products";
  }, []);

  useEffect(() => {
    // fetches info of selected product
    const getProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        const { data } = await res.json();
        // sets info for selected product if data fetch is successful
        setProductInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  // declares specified variables for product info from returned fetch data
  const { name, price, imageSrc, numInStock } = productInfo;

  // set inStock state only if productInfo returned successfully
  useEffect(() => {
    const set = () => setInStock(numInStock > 0 ? true : false);
    productInfo && set();
  }, [productInfo, numInStock]);

  return (
    <>
      <NavBar />
      {/* button for user to go back to all products page */}
      <BackBTN to="/products">Back to All</BackBTN>
      <Card>
        {/* displays loading message if product info n/a */}
        {!productInfo ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Img src={imageSrc} />
            <Name>{name}</Name>
            {/*only display item availability if productInfo returned successfully */}
            <Stock
              className={
                Object.keys(productInfo).length > 0 ? "visible" : "invisible"
              }
            >
              {inStock ? <Instock /> : <SoldOut />}
            </Stock>
            <ProductPrice>{price}</ProductPrice>
            <AddToCart
              // passes product info and availability as props to cart component
              inStock={inStock}
              setInStock={setInStock}
              item={productInfo}
            />
          </>
        )}
      </Card>
      <Footer />
    </>
  );
};

export default Product;
