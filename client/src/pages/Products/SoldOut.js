import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

const SoldOut = () => {

    return(
        <Out>
            <IoIosCloseCircleOutline style={{color: "red", marginRight:"10px"}}/>
            <p>Sold out</p>
        </Out>
    )
}

export default SoldOut

const Out = styled.div`
    display: flex;
    align-items: center;
`