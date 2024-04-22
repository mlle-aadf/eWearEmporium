import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import Filter from "./Filter"

import Navbar from "../../components/NavBar"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"


const Products = () => {

    useEffect(() => {
        document.title = "Our Products"
    }, []);

    const [products, setProducts] = useState([])
    const [sortBy, setSortBy] = useState("AZ")
    const [filters, setFilters] = useState(["Fitness", "Medical", "Lifestyle", "Entertainment", "Industrial", "Pets and Animals", "Gaming"])

    let queryString = `?sort=${sortBy}&filters=${filters}`
  

    useEffect( ()=> {        
        const getProducts = async () => {
            try {

                const res = await fetch(`/products`)

                // const res = await fetch(`/products${queryString}`)

    
                const {data} = await res.json()
                // console.log(data)
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
// NEED DEPENDENCY? OR CLEANUP
    }, []) 



    // const fetchFiltered = async () => {
        // try {    
        //     const res = await fetch(`/products/filtered`)
        //     const {data} = await res.json()
        //         setProducts(data)
        //     } catch (err) {
        //         console.log(err)
        //     }
    // }
    
//     const sortHandler = (event) => {
        //   setSortBy(event.target.value)
        //   fetchFiltered()
// }

//     const filtersHandler = (event) => {
        //   setFilters( ??? )
        //   fetchFiltered()
// }



    return(
    <>
        <Navbar/>
        <All>All Products ({products.length})</All>
        
        {/*  input onChange adds category to url params, APPLY button launches new fetch with updated params
         <Category>
            <input type="checkbox"/>
            <label> CHECK ME OUT</label>
        </Category>
        <button onClick={fetchFiltered}>Apply</button>
        */}

        
        {/* onChange adds sort method to url params, launches new fetch with updated params
        <Sort onChange={sortHandler} defaultValue={"sort"}>
            <option value={"sort"} disabled>Sort</option>
            <option value={"AZ"}>A - Z</option>
            <option value={"ZA"}>Z - A</option>
            <option value={"priceLH"}>- $ +</option>
            <option value={"priceHL"}>+ $ -</option>
        </Sort> */}


        
    
        {(products.length === 0 || !products) ? <Loading>Loading . . .</Loading> :
            <ProductsContainer>
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
            </ProductsContainer>
        }        
        
        <TopButton/>
        <Footer/>
  
    </>
    )
}

export default Products

const Loading = styled.h2`
    height:70vh;
    width:90vw;
    margin: 16vh auto 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
`



const All = styled.h3`
    position: fixed;
    top: 10vh;
    margin: 0; 
    padding-left: 3rem;
    z-index: +1;
    width: 100vw;
    height: 6rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-family: var(--font-lato);
    background-color:var(--accent-color);
    background: linear-gradient(180deg, rgba(215,233,233,1) 0%, rgba(215,233,233,0.8) 50%, rgba(215,233,233,0.4) 75%, rgba(215,233,233,0.2) 90%, rgba(255,255,255, 0.1) 100%);
    /* border: 2px solid fuchsia; */
    
    @media (max-width: 500px) {
        height: 4rem;
        padding-left: 2rem;
        width: 100vw;
        background: linear-gradient(180deg, rgba(215,233,233,1) 0%, rgba(215,233,233,1) 30%, rgba(215,233,233,0.9) 50%, rgba(215,233,233,0.8) 60%, rgba(215,233,233,0.6) 70%, rgba(215,233,233,0.5) 80%, rgba(215,233,233,0.4) 90%, rgba(215,233,233,0.2) 95%, rgba(255,255,255,0.1) 100%);
        /* border: solid 2px fuchsia; */

    }
    `

const Sort = styled.select`
    position: fixed;
    top: 12vh;
    right: 5%;
    z-index: 1;
`

const Category = styled.div`
    position: fixed;
    top: 18vh;
    left: 5%;
    z-index: 1;
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3px 2px;
    margin: 20vh auto 0 23vw;
    width: 74%;
    height: fit-content;
    /* border: 2px solid fuchsia; */
    :hover {
        outline: 6px solid var(--nav-bar-color);
        scale: 105%;
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
        /* display: grid;*/
        /* grid-template-columns: 1fr 1fr 1fr 1fr;  */
        display: flex;
        flex-wrap: wrap;
        /* gap: 1px; */
    }

    `

const ProductCard = styled(Link)`
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
    border-radius: 10px;
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


`

const ProductImg = styled.img`
    position: absolute;
    top: 5%;
    max-height: 40%;
    pointer-events: none;

    @media (max-width: 500px) {
        top: 6%;
    }
    `

const ProductName = styled.p`
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
    `

const Price = styled.p`
    font-size: var(--base-font-size);
    /* font-weight: 200; */
    color: #a6a39e ;
    position: absolute;
    bottom: 5%;
    pointer-events: none;
    `

// const FooterStyle = {
    // position: "static",
    // bottom: "0%"
// }
