import styled from "styled-components";
import heroImage from "../../images/HeroSection.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <HeroContainer>
      <StyledHeroImage src={heroImage} alt="Hero Section" />
      <StyledHeroText>
        Empower Your Everyday <br /> with Wearable Technology.
      </StyledHeroText>
      <StyledButton>
        <Link to="/products">Shop Now </Link>
      </StyledButton>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  margin: clamp(100px, calc(6.25rem + ((1vw - 7.69px) * 4.344)), 150px)
    clamp(76.8px, calc(4.8rem + ((1vw - 7.68px) * 10)), 192px);
  width: clamp(615px, calc(38.4375rem + ((1vw - 7.69px) * 80.0174)), 1536px);

  @media (max-width: 768px) {
    margin: clamp(50px, calc(4.6875rem + ((1vw - 3.3px) * 17.1233)), 150px)
      clamp(33px, calc(2.0625rem + ((1vw - 3.3px) * 10)), 76.8px);
    width: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
    height: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
  }
`;

const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const StyledHeroText = styled.div`
  position: absolute;
  top: 22vw;
  left: 50vw;
  color: var(--white);
  font-size: var(--h3-font-size);
  text-align: center;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    top: 27vw;
  }

  @media (max-width: 768px) {
    top: 55vw;
  }

  @media (max-width: 600px) {
    top: 60vw;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 25vw;
  left: 45vw;
  padding: 10px 50px;
  border: none;
  border-radius: 25px;
  background-color: var(--accent-color);
  color: var(--black);
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--hover-color);
  }

  @media (max-width: 1400px) {
    left: 43vw;
  }

  @media (max-width: 1200px) {
    top: 32vw;
  }

  @media (max-width: 768px) {
    top: 70vw;
    left: 40vw;
  }

  @media (max-width: 600px) {
    top: 78vw;
    left: 35vw;
  }

  @media (max-width: 428px) {
    top: 85vw;
    padding: 5px 25px;
  }

  @media (max-width: 375px) {
    left: 33vw;
  }
`;