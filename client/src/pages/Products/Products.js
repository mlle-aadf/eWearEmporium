import { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";
import check from "../../images/check.png";
import { useCollapse } from "react-collapsed";

import Navbar from "../../components/NavBar";
import TopButton from "../../components/TopButton";
import Footer from "../../components/Footer";
import {
  Filters,
  Loading,
  All,
  Sort,
  SortOption,
  Categories,
  CategoriesMobile,
  ProductsContainer,
  ProductCard,
  ProductImg,
  ProductName,
  Price,
  Apply,
  ApplyMobile,
} from "../Products/StyledComponents";

const Products = () => {
  useEffect(() => {
    document.title = "Our Products";
  }, []);

  const [products, setProducts] = useState();
  const [sortBy, setSortBy] = useState("AZ");
  const [filters, setFilters] = useState([]);

  const categories = [
    "Fitness",
    "Medical",
    "Lifestyle",
    "Entertainment",
    "Industrial",
    "Pets and Animals",
    "Gaming",
  ];

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
    // NEED DEPENDENCY? OR CLEANUP
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
    // console.log(checked, event)
    console.log(checkedFilter);
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
              icon={<img src={check} style={{ height: "1rem" }} />}
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
              icon={<img src={check} style={{ height: "1rem" }} />}
            />
          );
        })}

        <ApplyMobile onClick={applyMobile}>Apply</ApplyMobile>
      </CategoriesMobile>

      <Sort onChange={sortHandler} defaultValue={"sort"}>
        <SortOption value={"sort"} disabled>
          Sort
        </SortOption>
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
