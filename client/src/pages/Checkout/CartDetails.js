import {
  CartDetailsContainer,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";
import { Link } from "react-router-dom";

const CartDetails = () => {
  return (
    <>
      <CartDetailsContainer>
        <Header>Cart:</Header>
        {/* Cart item pulls from backend data */}
        <div>
          <h3>Cart Items:</h3>
          <div>
            <p>image</p>
            <p>item name</p>
            <p>price</p>
            <p>amount in cart</p>
          </div>
        </div>
        {/* Pulls price from backend then add formula to calc */}
        <div>
          <h3>Price</h3>
          <div>
            <p>Total Item Cost:</p>
            <p>Shipping Cost:</p>
          </div>
        </div>

        <div>
          {/* Needs to confirm that item is in stock and can succesfully checkout then update backend */}
          <Link to="/success" className="success">
            Checkout
          </Link>
        </div>
      </CartDetailsContainer>
    </>
  );
};
export default CartDetails;
