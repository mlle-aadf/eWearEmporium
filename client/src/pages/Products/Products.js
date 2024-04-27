import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";

import Navbar from "../../components/NavBar";
import Filters from "./Filters";
import Availability from "./Availability";
import Categories from "./Categories";
import Sort from "./Sort";
import Items from "./Items";
import TopButton from "../../components/TopButton";
import Footer from "../../components/Footer";
import {
  All,
  Apply,
  MobileFilters,
  FiltersBTN,
} from "./StyledComponents";

const Products = () => {
  useEffect(() => {
    document.title = "Our Products";
  }, []);

  const [products, setProducts] = useState();
  const [sortBy, setSortBy] = useState("AZ");
  const [filters, setFilters] = useState([]);
  const [availOnly, setAvailOnly] = useState("default");

  // loads all products sorted alphabetically (default)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`/products`);
        const { data } = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();

    return setProducts(null);
  }, []);

  // sends new fetch req with sort & filter parameters
  const fetchFiltered = async (sortParam, filtersParam) => {
    setProducts(null);
    try {
      const res = await fetch(
        `/products?sort=${sortParam ? sortParam : sortBy}&filters=${
          filtersParam ? filtersParam.toString() : filters.toString()
        }&all=${availOnly}`
      );
      const { data } = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  // sets sort parameter and triggers new fetch to update results
  const sortHandler = (event) => {
    setSortBy(event.target.value);
    fetchFiltered(event.target.value, null);
  };

  // sets filter parameters
  const filtersHandler = (checked, event) => {
    const checkedFilter = event.currentTarget.innerText;
    // if filter array contains value,
    filters.includes(checkedFilter)
      ? // remove it from array,
        setFilters(filters.filter((category) => category !== checkedFilter))
      : // otherwise add to array
        setFilters([...filters, checkedFilter]);
  };

  // sets availOnly
  const stockFilter = (event) => {
    setAvailOnly(event.target.value);
    /// change appl button color
  };

  // triggers new fetch to update results
  const applyFilters = () => {
    fetchFiltered(sortBy, filters);
  };

  const applyMobile = () => {
    fetchFiltered(sortBy, filters);
    setExpanded(false);
  };

  // collapsible filters menu
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <Navbar />
      <All>All Products {products ? `(${products.length})` : ""}</All>

      <Filters
        filtersHandler={filtersHandler}
        applyFilters={applyFilters}
        stockFilter={stockFilter}
      />

      <MobileFilters {...getCollapseProps()}>
        <Categories filtersHandler={filtersHandler} />
        <Availability stockFilter={stockFilter} />
        <Apply onClick={applyMobile} className="applyBTN">Apply</Apply>
      </MobileFilters>

      <Sort sortHandler={sortHandler} />

      <FiltersBTN
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Filters -" : "Filters +"}
      </FiltersBTN>

      <Items products={products} />

      <TopButton />
      <Footer />
    </>
  );
};

export default Products;
