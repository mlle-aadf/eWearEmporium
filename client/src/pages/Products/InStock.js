import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";

const Instock = () => {

    return(
        <In>
            <FaCheckCircle style={{color: "green", marginRight:"10px"}}/>
            <p>In stock</p>
        </In>
    )
}

export default Instock

const In = styled.div`
    display: flex;
    align-items: center;
`