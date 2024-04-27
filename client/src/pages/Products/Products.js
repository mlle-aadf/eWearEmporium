import { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";
import check from "../../images/check.png";
import { useCollapse } from "react-collapsed";

import Navbar from "../../components/NavBar";
import TopButton from "../../components/TopButton";
import Footer from "../../components/Footer";
import {
  categories, // array of all categories
  All,
  Categories,
  Apply,
  CategoriesMobile,
  ApplyMobile,
  Sort,
  SortOption,
  Filters,
  Loading,
  ProductsContainer,
  ProductCard,
  ProductImg,
  ProductName,
  Price,
} from "../Products/StyledComponents";

const Products = () => {
  useEffect(() => {
    document.title = "Our Products";
  }, []);

  const [products, setProducts] = useState();
  const [sortBy, setSortBy] = useState("AZ");
  const [filters, setFilters] = useState([]);

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
        }`
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

      <Categories>
        <h3>Categories</h3>

        {categories.map((category) => {
          return (
            <Checkbox
              onChange={filtersHandler}
              borderColor="var(--nav-bar-color)"
              style={{ backgroundColor: "var(--nav-bar-color)" }}
              value={category}
              label={category}
              labelStyle={{ marginLeft: "0.5rem", fontSize: "1rem" }}
              containerStyle={{ margin: "0.75rem 0", cursor: "pointer" }}
              icon={<img src={check} style={{ height: "1rem" }} alt="check" />}
            />
          );
        })}

      <Apply onClick={applyFilters}>Apply</Apply>
      </Categories>



      <CategoriesMobile {...getCollapseProps()}>
        <h3>Categories</h3>

        {categories.map((category) => {
          return (
            <Checkbox
              onChange={filtersHandler}
              borderColor="var(--nav-bar-color)"
              style={{ backgroundColor: "var(--nav-bar-color)" }}
              value={category}
              label={category}
              labelStyle={{ marginLeft: "0.5rem", fontSize: "1rem" }}
              containerStyle={{ margin: "0.75rem 0", cursor: "pointer" }}
              icon={<img src={check} style={{ height: "1rem" }} alt="check" />}
            />
          );
        })}

        <ApplyMobile onClick={applyMobile}>Apply</ApplyMobile>
      </CategoriesMobile>

      <Sort
        onChange={sortHandler}
        defaultValue={"sort"}
        style={{ cursor: "pointer" }}
      >
        <SortOption value={"sort"} disabled>Sort</SortOption>
        <SortOption value={"AZ"}>A-Z</SortOption>
        <SortOption value={"ZA"}>Z-A</SortOption>
        <SortOption value={"priceLH"}>Price -</SortOption>
        <SortOption value={"priceHL"}>Price +</SortOption>
      </Sort>

      <Filters
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Filters -" : "Filters +"}{" "}
      </Filters>

      {!products || products === null ? (
        <Loading>Loading . . .</Loading>
      ) : (
        <ProductsContainer>
          {products.map((product) => {
            const { imageSrc, name, price, _id } = product;

            return (
              <ProductCard key={_id} to={`/products/${_id}`}>
                <ProductImg src={imageSrc} alt={name} />
                <ProductName>{name}</ProductName>
                <Price>{price}</Price>
              </ProductCard>
            );
          })}
        </ProductsContainer>
      )}

      <TopButton />
      <Footer />
    </>
  );
};

export default Products;
