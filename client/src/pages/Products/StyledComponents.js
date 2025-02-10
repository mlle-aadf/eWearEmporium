// PRODUCTS related components
import { Link } from "react-router-dom";
import styled from "styled-components";

// PRODUCTS.js
export const All = styled.h3`
  position: fixed;
  top: clamp(20px, calc(3.364375rem + ((1vw - 7.69px) * 2.8297)), 86.4px);
  margin: 0;
  padding: 1.5rem 0 3rem 3rem;
  z-index: +1;
  width: 100vw;

  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: var(--h2-font-size);
  font-family: var(--font-lato);
  background-color: var(--nav-bar-color);
  background: linear-gradient(
    180deg,
    rgba(224, 224, 224, 1) 0%,
    rgba(224, 224, 224, 0.8) 50%,
    rgba(224, 224, 224, 0.6) 60%,
    rgba(224, 224, 224, 0.4) 75%,
    rgba(224, 224, 224, 0.2) 90%,
    rgba(255, 255, 255, 0.1) 100%
  );

  @media (max-width: 500px) {
    height: 4rem;
    padding-left: 2rem;
    width: 100vw;
    background: linear-gradient(
      180deg,
      rgba(224, 224, 224, 1) 0%,
      rgba(224, 224, 224, 1) 30%,
      rgba(224, 224, 224, 0.9) 50%,
      rgba(224, 224, 224, 0.8) 60%,
      rgba(224, 224, 224, 0.6) 70%,
      rgba(224, 224, 224, 0.5) 80%,
      rgba(224, 224, 224, 0.4) 90%,
      rgba(224, 224, 224, 0.2) 95%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
`;

export const Apply = styled.button`
  background-color: var(--nav-bar-color);
  border-radius: 3px;
  border: none;
  color: white;
  padding: 0.25rem 2rem;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileFilters = styled.div`
  position: fixed;
  top: 17vh;
  right: 5%;
  padding-top: 0.5rem;
  z-index: 2;
  background-color: white;
  border: 2px solid var(--nav-bar-color);
  border-radius: 15px;
  padding: 0.25rem 0.75rem;
  width: fit-content;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const FiltersBTN = styled.button`
  position: fixed;
  top: 12vh;
  right: 6.5rem;
  display: none;
  z-index: 1;
  background-color: white;
  border: 2px solid var(--nav-bar-color);
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 375px) {
    top: 8vh;
    right: 6rem;
  }

  @media (max-width: 500px) {
    display: block;
    margin-right: 0.25rem;
    padding: 0.5rem 0 0.5rem 0.75rem;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    display: block;
    margin-right: 0.25rem;
    right: 7rem;
  }
`;

//FILTERS.js
export const FilterContainer = styled.div`
  position: fixed;
  top: 18vh;
  left: 3rem;
  width: 17vw;
  padding: 2rem 3rem;
  z-index: 2;
  background-color: transparent;
  /* border: none; */
  /* border: 1px solid aqua; */
  border-radius: 5px;
  display: block;

  @media (max-width: 800px) {
    display: none;
  }
`;

// CATEGORIES.js
export const categories = [
  "Fitness",
  "Medical",
  "Lifestyle",
  "Entertainment",
  "Industrial",
  "Pets and Animals",
  "Gaming",
];

// AVAILABILITY.js
export const InStockMenu = styled.select`
  background-color: white;
  border: none;
  border-top: 2px solid var(--navbar-color);
  padding: 1.5rem 0.5rem;
  text-align: left;
  cursor: pointer;
`;

// SORT.js
export const SortContainer = styled.select`
  position: fixed;
  top: 12vh;
  right: 5%;
  z-index: 1;
  background-color: white;
  border: 2px solid var(--nav-bar-color);
  padding: 0.5rem 0 0.75rem 0.75rem;
  border-radius: 20px;

  @media (max-width: 375px) {
    top: 8vh;
    right: 4%;
  }

  @media (max-width: 500px) {
    padding: 0.5rem 0 0.5rem 0.75rem;
    width: 5rem;
  }
`;

export const SortOption = styled.option`
  font-size: 0.75rem;

  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

// ITEMS.js
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3px 2px;
  margin: 20vh auto 0 23vw;
  width: 74%;
  height: fit-content;

  :hover {
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    margin: 17vh auto 4vh auto;
    width: 90%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1px;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 20vh auto 4vh auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProductCard = styled(Link)`
  width: 17vw;
  height: 36vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;

  font-size: var(--base-font-size);
  font-weight: 300;
  background-color: white;
  border-radius: 3px;
  margin: 0.5rem;
  padding: 0 1.5rem;
  position: relative;

  @media (max-width: 500px) {
    width: 42vw;
    height: 34vh;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 30%;
    margin: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProductImg = styled.img`
  position: absolute;
  top: 5%;
  max-height: 40%;
  pointer-events: none;

  @media (max-width: 500px) {
    top: 6%;
  }
`;

export const ProductName = styled.p`
  margin-top: 1rem;
  text-align: center;
  max-height: 35%;
  position: absolute;
  bottom: 20%;
  pointer-events: none;

  @media (max-width: 500px) {
    bottom: 16%;
    max-height: 40%;
  }
`;

export const Price = styled.p`
  font-size: var(--base-font-size);
  color: #a6a39e;
  position: absolute;
  bottom: 5%;
  pointer-events: none;
`;

export const Loading = styled.h2`
  height: 70vh;
  width: 90vw;
  margin: 16vh auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// PRODUCT.js
export const BackBTN = styled(Link)`
  position: relative;
  top: 24vh;
  left: 8rem;
  background-color: white;
  border-radius: 25px;
  border: 4px solid var(--nav-bar-color);
  padding: 0.5rem 1.5rem;
  margin: 0.5rem 1.5rem;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 500px) {
    top: 10vh;
    left: 2rem;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    top: 14vh;
    left: 10rem;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 70vh;
  width: 65vw;
  margin: 20vh auto 10vh 25vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
    margin: 15vh auto 10vh auto;
    height: 75vh;
    width: 75%;
  }
`;

export const Img = styled.img`
  height: 50%;
  max-width: 40%;

  position: absolute;
  right: 8%;
  top: 8%;

  @media (max-width: 500px) {
    height: 40%;
    position: static;
    margin: 1rem auto;
  }
`;

export const Name = styled.p`
  width: 45%;
  height: fit-content;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 2rem 0.5rem 0 2rem;
  text-align: left;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin: 0.5rem auto;

    height: 30%;
    width: 90%;
    text-align: center;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    font-size: 2.25rem;
    height: 40%;
    padding-right: 0.5rem;
  }
`;

export const Stock = styled.div`
  margin: 0 0 0.5rem 2rem;

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    position: static;
    text-align: center;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 0 auto 0 3rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  margin-left: 2rem;
  width: fit-content;
  position: static;

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    position: static;
    font-size: 1.25rem;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 0 auto 0 3rem;
  }
`;

// INSTOCK.js / SOLDOUT.js
export const StockStatus = styled.div`
  display: flex;
  align-items: center;
`;
