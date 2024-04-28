import { IoIosCloseCircleOutline } from "react-icons/io";
import { StockStatus } from "./StyledComponents";

// returns "sold out" message + icon
const SoldOut = () => {
  return (
    <StockStatus>
      <IoIosCloseCircleOutline style={{ color: "red", marginRight: "10px" }} />
      <p>Sold out</p>
    </StockStatus>
  );
};

export default SoldOut;