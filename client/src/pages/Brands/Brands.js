import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import styled from "styled-components"

const Brands = () => {

    useEffect(() => {
        document.title = "Our Brands"
    }, []);

    const [brands, setBrands] = useState()

    useEffect( ()=> {
        const getBrands = async () => {
            try {
                const res = await fetch('/brands')
                const {data} = await res.json()
                console.log(data)
                setBrands(data)
            } catch (err) {
                console.log(err)
            }
        }
        getBrands()
// NEED DEPENDENCY? OR CLEANUP?
    }, [])

    return(
        <>
            <NavBar/>
            
            <BrandContainer>
            <Visit>VISIT OUR PARTNERS</Visit>
            {!brands ? <Loading>Loading . . .</Loading> :
                brands.map((brand) => {
                    return(
                        <Brand href={brand.url} target="blank" className="brand">{brand.name}</Brand>
                    )})
            }

            </BrandContainer>
            <Footer/>
        </>
    )
}

export default Brands

const Visit = styled.h2`
    width: 100vw;
    margin: 1rem;
    height: 6vh;
    display: flex;
    align-items: center;
    font-weight: 400;
    border-bottom: 4px solid white;
    
    @media (max-width: 500px) {
        height: 2vh;
        margin: 0.5rem;
        justify-content: center;
        border-bottom: none;
    }
    `

const Brand = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    background-color: white;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    
    @media (max-width: 500px) {
        font-size: 1rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
    
    `

const Loading = styled.h2`
    height:70vh;
    width:90vw;
    margin: 16vh auto 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    `
    
    const BrandContainer = styled.div`
    height: fit-content;
    width: 90vw;
    margin: 12vh auto 4vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 4px solid white;
    /* border: 2px solid fuchsia */
    @media (max-width: 500px) {
        justify-content: center;
        border-bottom: none;
    }
` 
