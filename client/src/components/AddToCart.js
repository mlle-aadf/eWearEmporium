import styled from "styled-components";
import { CartContentContext } from "./Cart/CartContentContext";
import { useContext } from "react";

const AddToCart = ({item}) => {
    const {addToCart, cart} = useContext(CartContentContext);

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

    return(
        <AddBTN onClick={handleClick} className="addToCart">Add to cart</AddBTN>
    )
}

export default AddToCart;

const AddBTN = styled.button`
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    width: 15rem;
    font-weight: 400;

    position: absolute;
    bottom: 20%;
    left: 6%;
    
    @media (max-width: 500px) {
        position: static;
        width: 10rem;
        margin: 1rem;
    }

`