import styled from "styled-components";
import heroImage from "../../images/HeroSection.png";

const HeroContainer = styled.div`
  margin: 150px clamp(76.8px, calc(4.8rem + ((1vw - 7.68px) * 10)), 192px);
  border-radius: 25px;
  width: clamp(615px, calc(38.4375rem + ((1vw - 7.69px) * 80.0174)), 1536px);

  @media (max-width: 768px) {
    margin: 150px clamp(33px, calc(2.0625rem + ((1vw - 3.3px) * 10)), 76.8px);
    width: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
    height: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
  }
`;

const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledHeroText = styled.div`
  position: absolute;
  top: clamp(225px, calc(14.0625rem + ((1vw - 3.3px) * 7.8616)), 350px);
  left: 50%;
  color: var(--white);
  font-size: var(--h2-font-size);
  text-align: center;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: clamp(250px, calc(15.625rem + ((1vw - 3.3px) * 22.8311)), 350px);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <StyledHeroImage src={heroImage} alt="Hero Section" />
      <StyledHeroText>
        Empower Your Everyday <br /> with Wearable Technology.
      </StyledHeroText>
    </HeroContainer>
  );
};

export default HeroSection;
