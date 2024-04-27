import { OrderContainer, Title } from "../../components/Cart/StyledComponents"
import CartItems from "./CartDetails"
import CalcTotal from "./CalcTotal"
import Confirm from "./Confirm"

const OrderSummary = () => {
    return(
        <OrderContainer>

            {/* ADD IF CART EMPTY BOUNDARY */}
            <Title>Order Summary :</Title>
            <CartItems/>
            <CalcTotal/>
            <Confirm/>
        </OrderContainer>
    )
}

export default OrderSummary