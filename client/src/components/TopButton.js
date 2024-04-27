import styled from "styled-components";
import up_arrow from "../images/up_arrow.png";

// Button that allows to go back to top of page on press
const TopButton = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <ToTop onClick={topFunction} id="topBTN">
      <img src={up_arrow} style={ImgStyle} alt="up-arrow" />
    </ToTop>
  );
};

export default TopButton;

const ToTop = styled.button`
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50px;
  background-color: var(--nav-bar-color);
  position: sticky;
  bottom: 5%;
  left: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    height: 40px;
    width: 40px;
    left: 75%;
  }
`;

const ImgStyle = {
  height: "20px",
  width: "20px",
};
