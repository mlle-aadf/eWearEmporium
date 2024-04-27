import { ConfirmBTN } from "./StyledComponents"

const Confirm = () => {
    
    const placeOrderHandler = () => {
        console.log("order placed")

        //  fetch .post("/checkout", createOrderHandler)
        // on success, redirect to Success page
        // some visual cue "placing order"

    }
    
    return(
        <ConfirmBTN onClick={placeOrderHandler}>Place order</ConfirmBTN>
    )
}

export default Confirm