import styled from "styled-components";
import heroImage from "../../images/HeroSection.png";

const StyledHeroImage = styled.img`
  display: block;
  margin: 200px 100px;
  border-radius: 25px;
  max-width: calc(100% - 200px);
`;

const HeroSection = () => {
  return (
    <StyledHeroImage src={heroImage} alt="Hero Section" />
  );
};

export default HeroSection;
