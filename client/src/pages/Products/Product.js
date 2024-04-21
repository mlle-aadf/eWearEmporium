import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import AddToCart from "../../components/AddToCart"

const Product = () => {

    const {productId} = useParams()
    const [productInfo, setProductInfo] = useState({})

    const [brand, setBrand] = useState()

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
    




    return(
        <>
            <NavBar/>
            <Card>
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

    @media (max-width: 500px) {
        /* width: 90%; */
        height: 40%;
        /* position: absolute;
        top: 2%; */
        margin: 1rem auto;
    }
    `
const Name = styled.p`
    border: 2px solid fuchsia;
    height: fit-content;
    font-size: 1.5rem;
    margin: 0 auto;
    text-align: center;
    
    @media (max-width: 500px) {
        height: 30%;
        border-bottom: 2px solid var(--nav-bar-color);
        width: 90%;
        
    }
`

const Price = styled.p`
    /* border: 2px solid fuchsia; */
    /* height: 50%; */
    font-size: 1.25rem;
    margin: 0 auto;
    width: fit-content;
    @media (max-width: 500px) {
        /* position: absolute;
        bottom: 10%; */
        
    }

`


// const FooterStyle = {
//     position: "relative",
//     top: "100vh"
// }