import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Success = () => {
  return (
    // [ ] diplays some success message
    // [ ] OPTIONAL > "You May Also Like: " section, email/newsletter signup
    <>
<<<<<<< HEAD
      <Main>
        <NavBar />
        <H1>Your Order Has Been Confirmed!</H1>
        <H2>
          Thank you for shopping at E-Wear Emporium! Your order confirmation
          number is "insert order ID".
        </H2>
        <H2>Feel free to visit the sections below for more information.</H2>
        <Div>
          <Link to="/about">
            <Button>Frequently Asked Questions</Button>
          </Link>
          <Link to="/about">
            <Button>Terms of Service</Button>
          </Link>
          <Link to="/about">
            <Button>Contact Us</Button>
          </Link>
        </Div>
      </Main>
      <Footer />
=======
    <Main>
    <NavBar />
    <H1>Your Order Has Been Confirmed!</H1>
    <br/>
    <H2>Thank you for shopping at E-Wear Emporium! Your order confirmation number is "insert order ID".</H2>
    <H2>Feel free to visit the sections below for more information.</H2>
    <Div>
        <Link to="/about">
        <Button>Frequently Asked Questions</Button>
        </Link>
        <Link to="/about">
        <Button>Terms of Service</Button>
        </Link>
        <Link to="/about">
        <Button>Contact Us</Button>
        </Link>
    </Div>
    </Main>
    <Footer />
>>>>>>> 3749225287351e58a47cbfb55afb2fccd73d900d
    </>
  );
};

const Main = styled.main`
  margin: 150px 0 100px 0;
`;

const Div = styled.div`
  text-align: center;
  padding: 20px;
`;

<<<<<<< HEAD
const Button = styled.button`
  margin: 10px;
  padding: 10px;
=======
    const Button = styled.button`
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
    }
    `
>>>>>>> 3749225287351e58a47cbfb55afb2fccd73d900d

  &:hover {
    cursor: pointer;
  }
`;

<<<<<<< HEAD
const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  text-decoration: underline;
  margin: 30px;
`;
=======
    const H2 = styled.h2`
    text-align: center;
    margin: 30px;
    font-weight: bold;
    `
>>>>>>> 3749225287351e58a47cbfb55afb2fccd73d900d

const H2 = styled.h2`
  text-align: center;
  margin: 30px;
`;

export default Success;
