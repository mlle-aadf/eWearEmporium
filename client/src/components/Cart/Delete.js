import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import { DeleteBTN } from "./StyledComponents";

const Delete = ({ itemID }) => {
    const { removeFromCart } = useContext(CartContentContext);

    const deleteItemHandler = async () => {
        try {
            // Parse the itemID to ensure it's a number
            const parsedItemID = parseInt(itemID);
    
            // Check if the parsedItemID is a valid number
            if (isNaN(parsedItemID)) {
                console.error("Invalid itemID:", itemID);
                return;
            }
    
            // Make a PATCH request to the backend
            const response = await fetch("/checkout", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: parsedItemID
                })
            });
    
            // Check if the request was successful
            if (response.ok) {
                // If successful, remove the item from the cart
                removeFromCart({ item: { data: { _id: parsedItemID } } });
            } else {
                const data = await response.json();
                console.error("Error:", data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    

    return (
        <DeleteBTN onClick={deleteItemHandler} />
    );
};

export default Delete;