import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImage from "../../images/HeroSection.png";

// Populates hero section for home page
const HeroSection = () => {
  return (
    <HeroContainer>
      <StyledHeroImage src={heroImage} alt="Hero Section" />
      <StyledHeroText>
        Empower Your Everyday <br /> with Wearable Technology.
      </StyledHeroText>
      <StyledButton>
        <Link to="/products">Shop Now</Link>
      </StyledButton>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  position: relative;
  margin: clamp(50px, calc(3.125rem + ((1vw - 7.69px) * 2.344)), 100px)
    clamp(38.4px, calc(2.4rem + ((1vw - 7.68px) * 5)), 96px);
  width: clamp(615px, calc(38.4375rem + ((1vw - 7.69px) * 80.0174)), 1536px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0;

  @media (max-width: 768px) {
    margin: clamp(25px, calc(2.34375rem + ((1vw - 3.3px) * 8.56165)), 75px)
      clamp(16.5px, calc(1.03125rem + ((1vw - 3.3px) * 5)), 38.4px);
    width: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
    height: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
  }
`;

const StyledHeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
  object-fit: cover;

  border: 3px solid purple;
`;

const StyledHeroText = styled.div`
  color: var(--white);
  font-size: var(--h3-font-size);
  text-align: center;
  width: fit-content;
  z-index: 1; /* Ensure text is above the image */
`;

const StyledButton = styled.button`
  padding: 10px 50px;
  border: 2px solid var(--hover-color);
  border-radius: 25px;
  margin-top: 30px;
  background-color:transparent;
  color: var(--black);
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1; /* Ensure button is above the image */

  &:hover {
    background-color: var(--hover-color);

    a {
      color: var(--black);
    }
  }

  @media (max-width: 428px) {
    padding: 5px 25px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;