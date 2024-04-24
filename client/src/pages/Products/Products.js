import { useState, useEffect } from "react"
import Checkbox from "react-custom-checkbox";
import check from "../../images/check.png"
import {useCollapse} from "react-collapsed"

import Navbar from "../../components/NavBar"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"
import {Filters, Loading, All, Sort, SortOption, Categories, CategoriesMobile, ProductsContainer, ProductCard, ProductImg, ProductName, Price, Apply, ApplyMobile} from "../Products/StyledComponents"


const Products = () => {

    useEffect(() => {
        document.title = "Our Products"
    }, []);

    const [products, setProducts] = useState()
    const [sortBy, setSortBy] = useState("AZ")
    const [filters, setFilters] = useState([])

    const categories = ["Fitness", "Medical", "Lifestyle", "Entertainment", "Industrial", "Pets and Animals", "Gaming"]

    // loads all products sorted alphabetically (default)
    useEffect( ()=> {        
        const getProducts = async () => {
            try {
                const res = await fetch(`/products`)
                const {data} = await res.json()
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()

        return(
            setProducts(null)
        )
// NEED DEPENDENCY? OR CLEANUP
    }, []) 

    // sends new fetch req with sort & filter parameters
    const fetchFiltered = async (sortParam, filtersParam) => {
        setProducts(null)
        try {    
            const res = await fetch(`/products?sort=${sortParam ? sortParam : sortBy}&filters=${filtersParam ? filtersParam.toString() : filters.toString() }`)
            const {data} = await res.json()
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
    }
    
    // sets sort parameter and triggers new fetch to update results
    const sortHandler = (event) => {
        setSortBy(event.target.value)
        fetchFiltered(event.target.value, null)
    }
    
    // sets filter parameters
    const filtersHandler = (checked, event) => {
        const checkedFilter = event.currentTarget.innerText
        // console.log(checked, event)
        console.log(checkedFilter)
        // if filter array contains value,
        filters.includes(checkedFilter) 
        // remove it from array,
        ? setFilters(filters.filter((category)=> category !== checkedFilter)) 
        // otherwise add to array
        : setFilters([...filters, checkedFilter])
    }
    
    // triggers new fetch to update results
    const applyFilters = () => {
            fetchFiltered(sortBy, filters)
    }

    const applyMobile = () => {
        fetchFiltered(sortBy, filters)
        setExpanded(false)
    }

    // collapsible filters menu
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return(
    <>
        <Navbar/>
        <All>All Products {products ? `(${products.length})` : ""}</All>

        <Categories>
            <h3>Categories</h3>
            
            {categories.map((category)=> { 
                return(
                <Checkbox
                    onChange = {filtersHandler}
                    borderColor="var(--nav-bar-color)"
                    style={{backgroundColor:"var(--nav-bar-color)"}}
                    value={category}
                    label={category}
                    labelStyle={{marginLeft: "0.5rem", fontSize:"1rem"}}
                    containerStyle={{margin: "0.75rem 0", cursor:"pointer"}}
                    icon={<img src={check} style={{height:"1rem"}}/>}
                /> )
            })}
    
            <Apply onClick={applyFilters}>Apply</Apply>
        </Categories>

        <CategoriesMobile {...getCollapseProps()}>
            <h3>Categories</h3>
            
            {categories.map((category)=> { 
                return(
                <Checkbox
                    onChange = {filtersHandler}
                    borderColor="var(--nav-bar-color)"
                    style={{backgroundColor:"var(--nav-bar-color)"}}
                    value={category}
                    label={category}
                    labelStyle={{marginLeft: "0.5rem", fontSize:"1rem"}}
                    containerStyle={{margin: "0.75rem 0", cursor:"pointer"}}
                    icon={<img src={check} style={{height:"1rem"}}/>}
                /> )
            })}
    
            <ApplyMobile onClick={applyMobile}>Apply</ApplyMobile>
        </CategoriesMobile>

        <Sort onChange={sortHandler} defaultValue={"sort"}>
            <SortOption value={"sort"} disabled>Sort</SortOption>
            <SortOption value={"AZ"}>A-Z</SortOption>
            <SortOption value={"ZA"}>Z-A</SortOption>
            <SortOption value={"priceLH"}>Price -</SortOption>
            <SortOption value={"priceHL"}>Price +</SortOption>
        </Sort>
        
        <Filters {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>{isExpanded ? "Filters -" : "Filters +"} </Filters>

        {(!products || products === null) ? <Loading>Loading . . .</Loading>
        : <ProductsContainer>
            {products.map((product)=> { 
                
                const {imageSrc, name, price, _id} = product

                return(
                <ProductCard key={_id} to={`/products/${_id}`}>
                    <ProductImg src={imageSrc} alt={name}/>
                    <ProductName>{name}</ProductName>
                    <Price>{price}</Price>
                </ProductCard>
            )
            })}
        </ProductsContainer>}        
        
        <TopButton/>
        <Footer/>
    </>
    )
}

export default Products

// const Filters = styled.button`
//     position: fixed;
//     top: 12vh;
//     right: 6.5rem;
//     font-size: 0.75rem;
//     display: none;
//     z-index: 1;
//     background-color: white;
//     border: 2px solid var(--nav-bar-color);
//     padding: 0.5rem 0.75rem;
//     border-radius: 20px;

//     @media (max-width: 500px) {
//         display: block;
//         margin-right: 0.25rem;
//     }
//     @media (min-width: 500px) and (max-width: 800px) {
//         display: block;
//         margin-right: 0.25rem;
//         right: 7rem;
//     }
// `

// const Loading = styled.h2`
//     height:70vh;
//     width:90vw;
//     margin: 16vh auto 0 auto;
//     display: flex;
//     justify-content:center;
//     align-items: center;
// `

// const All = styled.h3`
//     position: fixed;
//     top: 10vh;
//     margin: 0; 
//     padding-left: 3rem;
//     z-index: +1;
//     width: 100vw;
//     height: 6rem;
//     display: flex;
//     align-items: center;
//     font-weight: 400;
//     font-family: var(--font-lato);
//     background-color:var(--accent-color);
//     background: linear-gradient(180deg, rgba(215,233,233,1) 0%, rgba(215,233,233,0.8) 50%, rgba(215,233,233,0.4) 75%, rgba(215,233,233,0.2) 90%, rgba(255,255,255, 0.1) 100%);
    
//     @media (max-width: 500px) {
//         height: 4rem;
//         padding-left: 2rem;
//         width: 100vw;
//         background: linear-gradient(180deg, rgba(215,233,233,1) 0%, rgba(215,233,233,1) 30%, rgba(215,233,233,0.9) 50%, rgba(215,233,233,0.8) 60%, rgba(215,233,233,0.6) 70%, rgba(215,233,233,0.5) 80%, rgba(215,233,233,0.4) 90%, rgba(215,233,233,0.2) 95%, rgba(255,255,255,0.1) 100%);
//     }
// `

// const Sort = styled.select`
//     position: fixed;
//     top: 12vh;
//     right: 5%;
//     z-index: 1;
//     background-color: white;
//     border: 2px solid var(--nav-bar-color);
//     padding: 0.5rem 0.25rem 0.5rem 0.75rem;
//     border-radius: 20px;
    
//     @media (max-width: 500px) {
//         padding: 0.5rem 0 0.5rem 0.75rem;
//         width: 5rem;
//     }
// `

// const SortOption = styled.option`
//     font-size: 0.75rem;
    
//     @media (max-width: 500px) {
//         font-size: 0.5rem;
//     }

// `

// const Categories = styled.div`
//     position: fixed;
//     top: 21vh;
//     left: 3rem;
//     width: 17vw;
//     padding: 1rem 1.5rem;
//     z-index: 1;
//     background-color: white;
//     border: none;
//     border-radius: 5px;
    
//     @media (max-width: 800px) {
//         display: none;
//     }
// `

// const CategoriesMobile = styled.div`
//     position: fixed;
//     top: 17vh;
//     right: 5%;
//     padding-top: 0.5rem;
//     z-index: 1;
//     background-color: white;
//     border: 2px solid var(--nav-bar-color);
//     border-radius: 15px;
//     padding: 0.25rem 0.75rem;
//     width: fit-content;
//     display: none;
    
//     @media (max-width: 800px) {
//         display: block;
//     }
// `

// const ProductsContainer = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-gap: 3px 2px;
//     margin: 20vh auto 0 23vw;
//     width: 74%;
//     height: fit-content;
//     :hover {
//         outline: 6px solid var(--nav-bar-color);
//         scale: 105%;
//     }
    
//     @media (max-width: 500px) {
//         margin: 17vh auto 4vh auto;
//         width: 90%;
//         display: grid;
//         grid-template-columns: 50% 50%;
//         gap: 1px;
//     }

//     @media (min-width: 500px) and (max-width: 800px) {
//         margin: 20vh auto 4vh auto;
//         width: 95%;
//         display: flex;
//         flex-wrap: wrap;
//     }

//     `

// const ProductCard = styled(Link)`
//     width: 17vw;
//     height: 36vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
//     color: black;
    
//     font-size: var(--base-font-size);
//     font-weight: 300;
//     background-color: white;
//     border-radius: 10px;
//     margin: 0.5rem;
//     padding: 0 1.5rem;
//     position: relative;

//     @media (max-width: 500px) {
//         width: 42vw;
//         height: 34vh;
//     }

//     @media (min-width: 500px) and (max-width: 800px) {
//         width: 30%;
//         margin: 0.5rem;
//         display: flex;
//         flex-wrap: wrap;
//     }


// `

// const ProductImg = styled.img`
//     position: absolute;
//     top: 5%;
//     max-height: 40%;
//     pointer-events: none;

//     @media (max-width: 500px) {
//         top: 6%;
//     }
//     `

// const ProductName = styled.p`
//     margin-top: 1rem;
//     text-align: center;
//     max-height: 35%;
//     position: absolute; 
//     bottom: 20%;
//     pointer-events: none;
    
//     @media (max-width: 500px) {
//         bottom: 16%;
//         max-height: 40%;
//     }
//     `

// const Price = styled.p`
//     font-size: var(--base-font-size);
//     /* font-weight: 200; */
//     color: #a6a39e ;
//     position: absolute;
//     bottom: 5%;
//     pointer-events: none;
//     `

// const Apply = styled.button`
//     background-color: white;
//     border-radius: 20px;
//     border: 4px solid var(--accent-color);
//     padding: 0.25rem 1rem;
//     margin: 0.5rem 1.5rem;
//     cursor: pointer;
// `
// const ApplyMobile = styled.button`
//     background-color: white;
//     border-radius: 20px;
//     border: 4px solid var(--nav-bar-color);
//     padding: 0.25rem 1rem;
//     margin-top: 0.5rem;
//     cursor: pointer;
//     width: 100%;
    
// `