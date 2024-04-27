import { FilterContainer, Apply } from "./StyledComponents"
import Availability from "./Availability"
import Categories from "./Categories"

const Filters = ({filtersHandler, applyFilters, stockFilter}) => {
    return(
        <FilterContainer >
            <Categories filtersHandler={filtersHandler}/>
            <Availability stockFilter={stockFilter}/>
            <Apply className="applyBTN" onClick={applyFilters}>Apply</Apply>
        </FilterContainer>
    )
}

export default Filters