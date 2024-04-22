import { useEffect } from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us"
    }, []);

    return(
        <>
        <NavBar />
        <Main>
        <p>Some placeholder text</p>
        </Main>
        <Footer />
        </>
    )
};

const Main = styled.main`
    margin: 150px 0 100px 0;
    `

export default Contact;