import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";

const ContactSuccess = () => {


    return (
        <>
    <Main>
    <NavBar />
    <H1>Thank You For Reaching Out!</H1>
    <br/>
    <H2>Your message has been delivered successfully. We'll get back to you under the briefest delays to assist you.</H2>
    <Div>
        <Link to="/">
        <Button>Back to Home Page</Button>
        </Link>
    </Div>
    </Main>
    <Footer />
        </>
    )
};

    const Main = styled.main`
    margin: 150px 0 100px 0;
    `

    const Div = styled.div`
    text-align: center;
    padding: 20px;
    `

    const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    `

    const H1 = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    text-decoration: underline;
    margin: 30px;
    `

    const H2 = styled.h2`
    text-align: center;
    margin: 30px;
    font-weight: bold;
    `

    export default ContactSuccess;