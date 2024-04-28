import { FaCheckCircle } from "react-icons/fa";
import { StockStatus } from "./StyledComponents";

// returns "in stock" message + icon
const Instock = () => {
  return (
    <StockStatus>
      <FaCheckCircle style={{ color: "green", marginRight: "10px" }} />
      <p>In stock</p>
    </StockStatus>
  );
};

export default Instock;