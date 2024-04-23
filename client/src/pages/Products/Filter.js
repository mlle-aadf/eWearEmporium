import styled from "styled-components";
import { useEffect, useState } from "react";

// import check from "../../images/check.png"

const Filter = () => {
  // useContext? -> display, setDisplay / filters, setFilters
  // filter param onChange( setDisplay([...display, ITEM]) ) / setFilters([...filters, filter])
  // >> use filters array to setDisplay?

  const lessThan100 = "< $100";

  const [brands, setBrands] = useState([]);
  // const [selectedBrands, setSelectedBrands] = useState([])

  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await fetch("/brands");
        const { data } = await res.json();
        // console.log(data)
        setBrands(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBrands();
  }, []);

  return (
    <SearchFilter>
      <p>Price</p>
      <Check type="checkbox" />
      <CheckLabel>{lessThan100}</CheckLabel>

      {/* BRANDS */}
      {/* <Brands>
                {brands.map((brand)=> {
                    const {_id} = brand

                    return(
                        <li key={_id}>
                            <input type="checkbox" id={_id} />
                            <label>{brand.name}</label>
                        </li>
                    )
                    })
                }
            </Brands> */}
    </SearchFilter>
  );
};

export default Filter;

const SearchFilter = styled.div`
  background-color: white;
  /* height: 75vh; */
  height: fit-content;
  width: 18%;
  margin: 0 3%;
  border-radius: 10px;
  position: fixed;
  top: 21vh;
  overflow: scroll;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Check = styled.input`
  /* appearance: none; */
  background-color: var(--nav-bar-color);
  margin: 0 15px;
  color: currentColor;
  width: 1.5em;
  height: 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* :hover {
        border: 2px solid blue;
    } */

  /* :checked{
        background-color: black;
    } */
`;

const CheckLabel = styled.label`
  color: black;
  font-size: 1.25rem;
`;

const Brands = styled.ul``;
