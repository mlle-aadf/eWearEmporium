import { InStockMenu } from "./StyledComponents";

// returns a select menu component with 2 options, "All Items" (in stock or sold out) and "Available" (only items that are in stock)
const Availability = ({ stockFilter }) => {
  return (
    <InStockMenu onChange={stockFilter} id="avail">
      <option style={{ fontSize: "0.75rem" }} value={false}>
        All Items
      </option>
      <option style={{ fontSize: "0.75rem" }} value={true}>
        Available
      </option>
    </InStockMenu>
  );
};

export default Availability;
