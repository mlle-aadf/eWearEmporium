import styled from "styled-components"
import { useState, useEffect } from "react"
import TopButton from "../../components/TopButton"
// import Footer from "../../components/Footer/Footer"


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
    
    console.log(products)

    return(
    <>
        <h1 style={NavBarStyle}>NAVBAR PLACEHOLDER</h1>
        <hr/>
        
        <ProductsContainer>
            <h3>All Products (348)</h3>
            {products.map((product)=> { return(
                <ProductCard>
                    <img src={product.imageSrc} alt={product.name}/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </ProductCard>
            )
            })}
        </ProductsContainer>
        <TopButton/>
        <hr/>
        <h1 style={FooterStyle}>FOOTER PLACEHOLDER</h1>
        {/* <Footer/> */}
    </>
// [ ] main div displays item photos
// [ ] sidebar(or filter menu) displays Brands/Categories/BodypPart options/filters
// [ ] OPTIONAL search bar / sort by (price -+/+-, inStock, popularity?)
    
    )

}

export default Products

const ProductsContainer = styled.div`
    border: solid 2px fuschia;
    display: flex;
    flex-direction: column;
    width: 100vw;
`
const ProductCard = styled.div`
    width: 40vw;
    height: fit-content;
    border: 2px solid fuschia;
    display: inline-block;
`


const FooterStyle = {
    height: "4vh",
    position: "fixed",
    bottom: "0%",
    backgroundColor:"var(--nav-bar-color)"
}

const NavBarStyle = {
    height: "6vh",
    position: "fixed",
    top: "0%",
    width: "100%",
    backgroundColor:"var(--nav-bar-color)",
    justifyContent: "center",
    display: "flex",
    alignItems: "center"
}

// const TopButtonStyle = {
//     position: "fixed",
//     bottom: "10%",
// }