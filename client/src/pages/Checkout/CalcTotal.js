import { useState, useContext } from "react"
import { CartContentContext } from "../../components/Cart/CartContentContext";
import { CalcContainer, Subtotal, Taxes, Shipping, Total } from "../../components/Cart/StyledComponents"

const CalcTotal = () => {
    
    const { cart } = useContext(CartContentContext);

// USE cart to set subTotal state, subtotal takes care of all other amounts
// >>   retrieve price of each item in cart, convert from "$00.00" to num
    // >>   add all converted prices
        // >> setSubtotal(converted prices sum) 


    const [subTotal, setSubtotal] = useState(10)
    
    return(
        <CalcContainer>
            <Subtotal>{`Subtotal: $${subTotal}`}</Subtotal>
            <Taxes>{`+ HST / GST $${Math.round(subTotal*0.15).toFixed(2)}`}</Taxes>
            <Shipping>{`+ Shipping & Handling $${15.00}`}</Shipping>
            <Total>{`Total: $${Math.round((subTotal*1.15)+15).toFixed(2)}`}</Total>
        </CalcContainer>
    )
}

export default CalcTotal