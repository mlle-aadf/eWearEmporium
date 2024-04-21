import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import AddToCart from "../../components/AddToCart"

const Product = () => {

    const {productId} = useParams()
    const [productInfo, setProductInfo] = useState({})



// const [brand, setBrand] = useState()

    useEffect( ()=> {
        const getProduct = async () => {
            try {
                const res = await fetch(`/products/${productId}`)
                const {data} = await res.json()
                // console.log(data)
                setProductInfo(data)
            } catch (err) {
                console.log(err)
            }
        }
        getProduct()


    }, [productId])

    const {name, price, imageSrc, numInStock, companyId} = productInfo
    
// IN STOCK -> numInStock > 0 ? "In Stock" : "Sold out"



    return(
        <>
            <NavBar/>
            <Card>
{/* LOADING ITEM DISPLAY if !productInfo */}
                
                <Img src={imageSrc}/>
                <Name>{name}</Name>
                <Price>{price}</Price>
                <AddToCart/>
            </Card>
            <Footer/>
        </>
    )

}

export default Product

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 70vh;
    width: 65vw;
    margin: 20vh auto 10vh 25vw;
    position: relative;
    
    @media (max-width: 500px) {
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        margin: 15vh auto 10vh auto;
        height: 75vh;
        width: 75%;
    }
    `
const Img = styled.img`
    height: 50%;
    /* border: 2px solid fuchsia; */
    
    position: absolute;
    right: 8%;
    top: 8%;
    
    @media (max-width: 500px) {
        /* width: 90%; */
        height: 40%;
        position: static;
        /* position: absolute;
        top: 2%; */
        margin: 1rem auto;
    }
    `
const Name = styled.p`
    /* border: 2px solid fuchsia; */
    width: 45%;
    height: fit-content;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0.5rem;
    text-align: left;
    
    
    position: absolute;
    left: 5%;
    top: 10%;

    
    @media (max-width: 500px) {
        font-size: 1.5rem;
        height: 30%;
        border-bottom: 2px solid var(--nav-bar-color);
        width: 90%;
        position: static;
        text-align: center;
        
    }
`

const Price = styled.p`
    /* border: 2px solid fuchsia; */
    /* height: 50%; */
    font-size: 2rem;
    margin: 0 auto;
    width: fit-content;
    position: absolute;
    bottom: 30%;
    left: 6%;

    @media (max-width: 500px) {
        position: static;
        font-size: 1.25rem;
        
    }

`


// const FooterStyle = {
//     position: "relative",
//     top: "100vh"
// }