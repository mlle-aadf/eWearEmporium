import { SortContainer, SortOption } from "./StyledComponents"

const Sort = ({sortHandler}) => {
    return(
        <SortContainer
        onChange={sortHandler}
        defaultValue={"sort"}
        style={{ cursor: "pointer" }}>
            <SortOption value={"sort"} disabled>Sort</SortOption>
            <SortOption value={"AZ"}>A-Z</SortOption>
            <SortOption value={"ZA"}>Z-A</SortOption>
            <SortOption value={"priceLH"}>Price -</SortOption>
            <SortOption value={"priceHL"}>Price +</SortOption>
        </SortContainer>
    )
}

export default Sort