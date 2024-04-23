import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AddToCart from "../../components/AddToCart";
import Instock from "../Products/InStock";
import SoldOut from "../Products/SoldOut";

const Product = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});

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

  return (
    <>
      <NavBar />
      <Card>
        {!productInfo ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Img src={imageSrc} />
            <Name>{name}</Name>
            <Stock>{numInStock > 0 ? <Instock /> : <SoldOut />}</Stock>
            <Price>{price}</Price>
            {/* DISABLE BUTTON IF numInStock === 0 */}
            <AddToCart />
          </>
        )}
      </Card>
      <Footer />
    </>
  );
};

export default Product;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 70vh;
  width: 65vw;
  margin: 20vh auto 10vh 25vw;
  position: relative;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15vh auto 10vh auto;
    height: 75vh;
    width: 75%;
  }
`;

const Img = styled.img`
  height: 50%;
  /* border: 2px solid fuchsia; */

  position: absolute;
  right: 8%;
  top: 8%;

  @media (max-width: 500px) {
    /* width: 90%; */
    height: 40%;
    position: static;
    /* position: absolute;
        top: 2%; */
    margin: 1rem auto;
  }
`;

const Name = styled.p`
  width: 45%;
  height: fit-content;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0.5rem;
  text-align: left;
  position: absolute;
  left: 5%;
  top: 10%;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    height: 30%;
    width: 90%;
    position: static;
    text-align: center;
  }
`;

const Stock = styled.div`
  position: absolute;
  left: 25%;
  bottom: 31%;

  @media (max-width: 500px) {
    position: static;
    text-align: center;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  margin: 0 auto;
  width: fit-content;
  position: absolute;
  bottom: 30%;
  left: 6%;

  @media (max-width: 500px) {
    position: static;
    font-size: 1.25rem;
  }
`;
