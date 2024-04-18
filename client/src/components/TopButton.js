import styled from "styled-components";
import up_arrow from "../images/up_arrow.png"

const TopButton = () => {

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      } 

    return(
        <ToTop onClick={topFunction}><img src={up_arrow} style={ImgStyle}/></ToTop>
    )

}

export default TopButton

const ToTop = styled.button`
    height: 40px;
    width: 40px;
    border: 2px solid black;
    border-radius: 50px;
    background-color: var(--nav-bar-color);
    position: fixed;
    bottom: 5%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 500px) {
        right: 10%;
    }
`

const ImgStyle = {
    height:"20px",
    width: "20px"
}