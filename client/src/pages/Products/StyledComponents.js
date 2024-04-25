import styled from "styled-components"
import { Link } from "react-router-dom";

export const Filters = styled.button`
    position: fixed;
    top: 12vh;
    right: 6.5rem;
    font-size: 0.75rem;
    display: none;
    z-index: 1;
    background-color: white;
    border: 2px solid var(--nav-bar-color);
    padding: 0.5rem 0.75rem;
    border-radius: 20px;
    cursor: pointer;

    @media (max-width: 500px) {
        display: block;
        margin-right: 0.25rem;
    }
    @media (min-width: 500px) and (max-width: 800px) {
        display: block;
        margin-right: 0.25rem;
        right: 7rem;
    }
`

export const Loading = styled.h2`
    height:70vh;
    width:90vw;
    margin: 16vh auto 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const All = styled.h3`
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
    
    @media (max-width: 500px) {
        height: 4rem;
        padding-left: 2rem;
        width: 100vw;
        background: linear-gradient(180deg, rgba(215,233,233,1) 0%, rgba(215,233,233,1) 30%, rgba(215,233,233,0.9) 50%, rgba(215,233,233,0.8) 60%, rgba(215,233,233,0.6) 70%, rgba(215,233,233,0.5) 80%, rgba(215,233,233,0.4) 90%, rgba(215,233,233,0.2) 95%, rgba(255,255,255,0.1) 100%);
    }
`

export const Sort = styled.select`
    position: fixed;
    top: 12vh;
    right: 5%;
    z-index: 1;
    background-color: white;
    border: 2px solid var(--nav-bar-color);
    padding: 0.75rem 0.25rem 0.75rem 0.75rem;
    border-radius: 20px;
        
    @media (max-width: 500px) {
        padding: 0.5rem 0 0.5rem 0.75rem;
        width: 5rem;
    }
`

export const SortOption = styled.option`
    font-size: 0.75rem;
    
    @media (max-width: 500px) {
        font-size: 0.5rem;
    }

`

export const Categories = styled.div`
    position: fixed;
    top: 21vh;
    left: 3rem;
    width: 17vw;
    padding: 1rem 1.5rem;
    z-index: 1;
    background-color: white;
    border: none;
    border-radius: 5px;
    
    @media (max-width: 800px) {
        display: none;
    }
`

export const CategoriesMobile = styled.div`
    position: fixed;
    top: 17vh;
    right: 5%;
    padding-top: 0.5rem;
    z-index: 1;
    background-color: white;
    border: 2px solid var(--nav-bar-color);
    border-radius: 15px;
    padding: 0.25rem 0.75rem;
    width: fit-content;
    display: none;
    
    @media (max-width: 800px) {
        display: block;
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3px 2px;
    margin: 20vh auto 0 23vw;
    width: 74%;
    height: fit-content;
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
        display: flex;
        flex-wrap: wrap;
    }

    `

export const ProductCard = styled(Link)`
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

export const ProductImg = styled.img`
    position: absolute;
    top: 5%;
    max-height: 40%;
    pointer-events: none;

    @media (max-width: 500px) {
        top: 6%;
    }
    `

export const ProductName = styled.p`
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

export const Price = styled.p`
    font-size: var(--base-font-size);
    /* font-weight: 200; */
    color: #a6a39e ;
    position: absolute;
    bottom: 5%;
    pointer-events: none;
    `

export const Apply = styled.button`
    background-color: white;
    border-radius: 20px;
    border: 4px solid var(--accent-color);
    padding: 0.25rem 1rem;
    margin: 0.5rem 1.5rem;
    cursor: pointer;
`
export const ApplyMobile = styled.button`
    background-color: white;
    border-radius: 20px;
    border: 4px solid var(--nav-bar-color);
    padding: 0.25rem 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
    width: 100%;
    
`