import styled from "styled-components"

const AddToCart = () => {

    const handleClick = () => {
        console.log("item added")
    }

    return(
        <AddBTN onClick={handleClick} className="addToCart">Add to cart</AddBTN>
    )
}

export default AddToCart

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