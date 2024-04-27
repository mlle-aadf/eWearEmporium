import { InStockMenu } from "./StyledComponents"

const Availability = ({stockFilter}) => {
    return(
        <InStockMenu onChange={stockFilter} id="avail">
            <option style={{fontSize: "0.75rem"}} value={false}>All Items</option>
            <option style={{fontSize: "0.75rem"}} value={true}>Available Only</option>
        </InStockMenu>
    )
}

export default Availability