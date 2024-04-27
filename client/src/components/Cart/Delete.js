import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";

import { DeleteBTN } from "./StyledComponents";
import styled from "styled-components";


const Delete = ({itemID, quantity}) => {

    const { removeFromCart } = useContext(CartContentContext);

    // use itemID to remove from cart
    // use quantity to update db numInStock

    const deleteItemHandler =  () => {

        removeFromCart({itemID, quantity})

    }

    return(
        <DeleteBTN onClick={deleteItemHandler}/>
    )

}

export default Delete