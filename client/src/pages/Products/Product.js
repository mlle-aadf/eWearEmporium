import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AddToCart from "../../components/AddToCart";
import Instock from "../Products/InStock";
import SoldOut from "../Products/SoldOut";

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
            <Price>{price}</Price>
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

const BackBTN = styled(Link)`
position: relative;
  top: 24vh;
  left: 8rem;
  background-color: white;
  border-radius: 25px;
  border: 4px solid var(--nav-bar-color);
  padding: 0.5rem 1.5rem;
  margin: 0.5rem 1.5rem;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 500px) {
    top: 10vh;
    left: 2rem;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    top: 14vh;
    left: 10rem;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 70vh;
  width: 65vw;
  margin: 20vh auto 10vh 25vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
    margin: 15vh auto 10vh auto;
    height: 75vh;
    width: 75%;
  }
`;

const Img = styled.img`
  height: 50%;
  max-width: 40%;

  position: absolute;
  right: 8%;
  top: 8%;

  @media (max-width: 500px) {
    height: 40%;
    position: static;
    margin: 1rem auto;
  }
`;

const Name = styled.p`
  width: 45%;
  height: fit-content;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 2rem 0.5rem 0 2rem;
  text-align: left;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin: 0.5rem auto;

    height: 30%;
    width: 90%;
    text-align: center;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    font-size: 2.25rem;
    height: 40%;
    padding-right: 0.5rem;
  }
`;

const Stock = styled.div`
  margin: 0 0 0.5rem 2rem;

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    position: static;
    text-align: center;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 0 auto 0 3rem;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  margin-left: 2rem;
  width: fit-content;
  position: static;

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    position: static;
    font-size: 1.25rem;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 0 auto 0 3rem;
  }
`;
