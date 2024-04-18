import styled from "styled-components"
import { useState, useEffect } from "react"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer/Footer"


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( ()=> {
        const getProducts = async () => {
            try {
                const res = await fetch('/products')
                const {data} = await res.json()
                // console.log(data)
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, []) 
    

    return(
    <>
        <h1 style={NavBarStyle}>NAVBAR PLACEHOLDER</h1>
        
        <All>All Products (348)</All>
            <ProductsContainer >
                {products.map((product)=> { return(
                    <ProductCard>
                        <ProductImg src={product.imageSrc} alt={product.name}/>
                        <ProductName>{product.name}</ProductName>
                        <Price>{product.price}</Price>
                    </ProductCard>
                )
                })}
            </ProductsContainer>
        <TopButton/>
        <Footer/>
    </>

    
    )

}

export default Products

const All = styled.h3`
    position: fixed;
    top: 10vh;
    left: 2vw;
    margin: 2rem;
    height: fit-content;
    font-weight: 550;
    font-family: var(--font-lato);
    background-color:var(var(--third-color));
    
    @media (max-width: 500px) {
        margin: 1rem;
        left: 2vw;
        width: 100vw;
    }
    `

const ProductsContainer = styled.div`
    /* border: solid 2px fuchsia; */
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    grid-gap: 5px 30px;
    width: 100vw;
    margin-top: 18vh;
    margin-left: 20vw;
    width: 75%;
    height: fit-content;

    
    @media (max-width: 500px) {
        margin: 17vh auto 0 auto;
        width: 90%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 5px 5px;
    }
`

const ProductCard = styled.div`
    /* width: 25%; */
    height: 40vh;
    /* min-height: fit-content; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* justify-content: space-between; */
    background-color: white;
    border-radius: 10px;
    margin: 0.5rem;
    padding: 0 1.5rem;

    @media (max-width: 500px) {
        /* width: 45%; */
    }
`

const ProductImg = styled.img`
    margin-top: 1rem;
    max-height: 35%;
`

const ProductName = styled.p`
    margin-top: 1rem;
    max-height: 35%;
`

const Price = styled.p`

`


const FooterStyle = {
    height: "30vh",
    margin: "0 -10px",
    // position: "fixed",
    // bottom: "0%",
    backgroundColor:"var(--nav-bar-color)",
    justifyContent: "center",
    display: "flex",
    alignItems: "center"
}

const NavBarStyle = {
    height: "10vh",
    position: "fixed",
    top: "0%",
    width: "100%",
    margin: "0 0 0 -10px",
    backgroundColor:"var(--nav-bar-color)",
    justifyContent: "center",
    display: "flex",
    alignItems: "center"
}

// const TopButtonStyle = {
//     position: "fixed",
//     bottom: "10%",
// }
