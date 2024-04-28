import { useEffect, useState } from "react";
import styled from "styled-components";
import { slidesData, slidesMobile } from "./slidesData";


// Rotates between several different slides.
const RotatingSlides = () => {
  // useState to track the index of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next slide
  const switchSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect to set up an interval that switches slides every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(switchSlide, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SlideContainer>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={slidesMobile[currentIndex].imageURL}
        />
        <StyledSlideImage
          src={slidesData[currentIndex].imageURL}
          alt={`Slide ${currentIndex}`}
        />
      </picture>
    </SlideContainer>
  );
};

export default RotatingSlides;

const SlideContainer = styled.div`
  position: relative;
  margin: clamp(100px, calc(6.25rem + ((1vw - 7.69px) * 4.344)), 150px)
    clamp(76.8px, calc(4.8rem + ((1vw - 7.68px) * 10)), 192px);
  width: clamp(615px, calc(38.4375rem + ((1vw - 7.69px) * 80.0174)), 1536px);

  @media (max-width: 768px) {
    margin: clamp(75px, calc(4.6875rem + ((1vw - 3.3px) * 17.1233)), 150px)
      clamp(33px, calc(2.0625rem + ((1vw - 3.3px) * 10)), 76.8px);
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
