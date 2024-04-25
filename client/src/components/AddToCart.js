import { useEffect } from "react";
import styled from "styled-components";

const AddToCart = ({ inStock, setInStock }) => {
  useEffect(() => {
    setInStock(inStock);
  }, [inStock]);

  const handleClick = () => {
    console.log("item added");
  };

  return (
    <AddBTN
      onClick={handleClick}
      className={inStock ? "addToCart" : "addToCartDisabled"}
      disabled={!inStock}
    >
      Add to cart
    </AddBTN>
  );
};

export default AddToCart;

const AddBTN = styled.button`
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    width: 15rem;
    font-weight: 400;
    margin: 0.5rem auto 2rem 2rem;

    @media (max-width: 500px) {
    margin: 0.5rem auto 3rem auto;
    position: static;
    width: 10rem;
    }

    @media (min-width: 500px) and (max-width:800px) {
    margin: 0 auto 2.5rem auto;
    }
`


