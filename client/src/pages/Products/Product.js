import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "../../components/NavBar";
import { BackBTN, Card, Img, Name, Stock, ProductPrice } from "./StyledComponents";
import AddToCart from "../../components/AddToCart";
import Instock from "../Products/InStock";
import SoldOut from "../Products/SoldOut";
import Footer from "../../components/Footer";


const Product = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [inStock, setInStock] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`/products/${productId}`);
        const { data } = await res.json();
        setProductInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  const { name, price, imageSrc, numInStock } = productInfo;

  // set inStock state only if productInfo returned successfully
  useEffect(() => {
    const set = () => setInStock(numInStock > 0 ? true : false);
    productInfo && set();
  }, [productInfo]);

  return (
    <>
      <NavBar />
      <BackBTN to="/products">Back to All</BackBTN>
      <Card>
        {!productInfo ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Img src={imageSrc} />
            <Name>{name}</Name>
            {/*only display inStock state if productInfo returned successfully */}
            <Stock
              className={
                Object.keys(productInfo).length > 0 ? "visible" : "invisible"
              }
            >
              {inStock ? <Instock /> : <SoldOut />}
            </Stock>
            <ProductPrice>{price}</ProductPrice>
            <AddToCart
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