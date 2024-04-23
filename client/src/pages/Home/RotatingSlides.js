import { useEffect, useState } from "react";
import styled from "styled-components";
import { slidesData } from "./slidesData";

const SlideContainer = styled.div`
  position: relative;
  margin: 150px clamp(76.8px, calc(4.8rem + ((1vw - 7.68px) * 10)), 192px);
  width: clamp(615px, calc(38.4375rem + ((1vw - 7.69px) * 80.0174)), 1536px);

  @media (max-width: 768px) {
    margin: 150px clamp(33px, calc(2.0625rem + ((1vw - 3.3px) * 10)), 76.8px);
    width: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
    height: clamp(264px, calc(16.5rem + ((1vw - 3.3px) * 71.0046)), 575px);
  }
`;

const StyledSlideImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`;

const StyledSlidesText = styled.div`
  position: relative;
  left: 50%;
  color: var(--black);
  font-size: var(--h3-font-size);
  text-align: center;
  transform: translateX(-50%);
`;

const RotatingSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(switchSlide, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SlideContainer>
      <StyledSlideImage src={slidesData[currentIndex].imageURL} alt="Slide" />
      <StyledSlidesText>
        {slidesData[currentIndex].description}
      </StyledSlidesText>
    </SlideContainer>
  );
};

export default RotatingSlides;
