import styled from "styled-components";
import { useEffect } from "react";
import { CartContentContext } from "./Cart/CartContentContext";
import { useContext } from "react";

const AddToCart = ({item, inStock, setInStock}) => {
    const {addToCart, cart} = useContext(CartContentContext);
    useEffect(() => {
      setInStock(inStock);
    }, [inStock]);

    const handleClick = async () => {
        try {
            const response = await fetch(`/products/${item._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.json();
    
            if (response.ok) {
                addToCart(data);
                console.log("Item added to cart:", cart);
            } else {
                console.error("Failed to fetch item:", data.message);
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
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


