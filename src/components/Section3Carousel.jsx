import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Section3Carousel({ onPrevClick, onNextClick }) {
  const [activeButton, setActiveButton] = useState(null);
  const [slideClass, setSlideClass] = useState("");

const handleNext = () => {
  setSlideClass("next");
  setTimeout(() => setSlideClass("reset"), 600); // Match your transition duration
};

const handlePrev = () => {
  setSlideClass("prev");
  setTimeout(() => setSlideClass("reset"), 600);
};


  return (
    <NavigationContainer>
      <PrevButton
        active={activeButton === "prev"}
        onClick={() => {
          setActiveButton("prev");
          onPrevClick();
        }}
      >
        <ArrowBackIcon sx={{ color: activeButton === "prev" ? "#007acc" : "#ffffff" }} />
      </PrevButton>

      <NextButton
        active={activeButton === "next"}
        onClick={() => {
          setActiveButton("next");
          onNextClick();
        }}
      >
        <ArrowForwardIcon sx={{ color: activeButton === "next" ? "#007acc" : "#ffffff" }} />
      </NextButton>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonBase = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  border: 1px solid #007acc;

  &:focus {
    outline-offset: 2px;
  }
`;

const PrevButton = styled(ButtonBase)`
  background-color: ${({ active }) => (active ? "#ffffff" : "#007acc")};

  &:focus {
    outline: 2px solid #007acc;
  }
`;

const NextButton = styled(ButtonBase)`
  background-color: ${({ active }) => (active ? "#ffffff" : "#007acc")};

  &:focus {
    outline: 2px solid #007acc;
  }
`;

export default Section3Carousel;
