import { ConfirmBTN } from "./StyledComponents"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Confirm = () => {
    
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)
    
    const confirmOrderHandler = () => {
        
        setStatus(true)
        //  fetch .post("/checkout", createOrderHandler)
        
        // on success, redirect to Success page
        navigate("/Success")
        // some visual cue if error

    }
    
    return(
        <ConfirmBTN onClick={confirmOrderHandler}>{status ? "Placing order..." : "Place order"}</ConfirmBTN>
    )
}

export default Confirm