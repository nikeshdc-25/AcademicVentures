"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Section2Card from "./Section2Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Card data for the carousel
const cardPairs = [
  // Pair 1
  {
    university: {
      id: 1,
      imageUrl: "./section2.1.png",
      badgeText: "Partner Universities",
      title: "Global Connections",
      description:
        "Explore leading universities that align with your educational goals.",
      imageHeight: "520px",
    },
    testimonial: {
      id: 2,
      imageUrl: "./section2.2.png",
      badgeText: "Student Testimonials",
      title: "Real Experiences",
      description:
        "Gain insights from those who have made successful transitions abroad.",
      additionalText:
        "Explore authentic stories that inspire and inform your own journey.",
      imageHeight: "420px",
    },
  },
  // Pair 2
  {
    university: {
      id: 3,
      imageUrl: "./section2.3.png",
      badgeText: "Test Preparation",
      title: "Tailored Courses",
      description:
        "Offering courses for PTE, GRE, IELTS, and more to boost your credentials.",
      imageHeight: "520px",
    },
    testimonial: {
      id: 4,
      imageUrl: "./section2.4.png",
      badgeText: "Comprehensive Support",
      title: "Pathway to Success",
      description:
        "Resources and guidance to enhance your study abroad experience.",
      additionalText:
        "Your success is our priority—join us for a comprehensive experience.",
      imageHeight: "420px",
    },
  },
  // Pair 3
  {
    university: {
      id: 5,
      imageUrl: "./section2.5.png",
      badgeText: "Dedicated Support",
      title: "Career Counseling",
      description:
        "Personalized guidance for your career path and aspirations.",
      imageHeight: "520px",
    },
    testimonial: {
      id: 6,
      imageUrl: "./section2.6.png",
      badgeText: "Scholarship Guidance",
      title: "Financial Support",
      description: "Find scholarships that align with your study goals.",
      additionalText:
        "With our support, your dream of studying abroad is within reach.",
      imageHeight: "420px",
    },
  },
];

function Section2() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const totalPairs = cardPairs.length;
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = React.useState(null);

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveButton("prev");
    setCurrentPairIndex((prevIndex) =>
      prevIndex === 0 ? totalPairs - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveButton("next");
    setCurrentPairIndex((prevIndex) =>
      prevIndex === totalPairs - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAboutUsClick = () => {
    navigate(`/aboutus`);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentPairIndex]);

  const currentPair = cardPairs[currentPairIndex];

  return (
    <Container>
      <ContentWrapper>
        <Section>
          <LeftColumn>
            <ImageWrapper>
              <img src="./dot.png" alt="Decorative" />
            </ImageWrapper>
            <TagBadge onClick={handleAboutUsClick}>About Us</TagBadge>
            <HeadingWrapper>
              <Heading>
                <HeadingText>Unleash Your Potential with</HeadingText>
                <HeadingHighlight>
                  {" "}
                  Academic <br />
                  Ventures.
                </HeadingHighlight>
              </Heading>
            </HeadingWrapper>
            <Description>
              Elevate your educational journey with expert guidance tailored to
              your aspirations. Our dedicated team connects you with leading
              universities worldwide, ensuring a seamless transition to studying
              abroad.
            </Description>
          </LeftColumn>
          <RightColumn>
            <CarouselContainer>
              <CarouselTrack
                style={{
                  transform: `translateX(-${currentPairIndex * 100}%)`,
                  transition: isAnimating ? "transform 0.5s ease" : "none",
                }}
              >
                {cardPairs.map((pair, index) => (
                  <Slide key={index}>
                    <CardGrid>
                      <Section2Card {...pair.university} />
                      <TestimonialCardWrapper>
                        <Section2Card
                          {...pair.testimonial}
                          overlayPosition="top"
                          overlayTop="246px"
                        />
                        <AdditionalContent>
                          <AdditionalText>
                            {pair.testimonial.additionalText}
                          </AdditionalText>
                        </AdditionalContent>
                      </TestimonialCardWrapper>
                    </CardGrid>
                  </Slide>
                ))}
              </CarouselTrack>

              <NavigationControls>
                <ButtonGroup>
                  <RoundButton
                    blue={activeButton === "prev"}
                    onClick={handlePrevClick}
                    aria-label="Previous cards"
                  >
                    <ArrowBackIcon
                      sx={{
                        color: activeButton === "prev" ? "black" : "#007acc",
                      }}
                    />
                  </RoundButton>
                  <RoundButton
                    blue={activeButton === "next"}
                    onClick={handleNextClick}
                    aria-label="Next cards"
                  >
                    <ArrowForwardIcon
                      sx={{
                        color: activeButton === "next" ? "black" : "#007acc",
                      }}
                    />
                  </RoundButton>
                </ButtonGroup>

                <CarouselIndicators>
                  {cardPairs.map((_, index) => (
                    <Indicator
                      key={index}
                      active={index === currentPairIndex}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentPairIndex(index);
                        }
                      }}
                      aria-label={`Go to card pair ${index + 1}`}
                    />
                  ))}
                </CarouselIndicators>
              </NavigationControls>
            </CarouselContainer>
          </RightColumn>
        </Section>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  min-height: screen;
  background-color: #ffffff;
  font-family: Open Sans;
  padding: 30px;
  @media (max-width: 991px) {
    padding: 30px;
  }
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
   @media (max-width: 991px) {
  max-width: 1400px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 991px) {
    gap: 30px;
  }
  @media (max-width: 640px) {
    gap: 20px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 140%;
  width: 80px;
  height: auto;
    animation: float 1.5s ease-in-out infinite;
@keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  img {
    width: 75%;
    height: auto;
  }

  @media (max-width: 1024px) {
    left: 3px;
    width: 50px;
    img {
      width: 60%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const TagBadge = styled.div`
  color: #333;
  font-size: 18px;
  line-height: 28px;
  padding: 11px 21px;
  border-radius: 60px;
  border-width: 1px;
  border-color: #606060;
  background-color: rgb(214, 214, 214);
  margin-bottom: 20px;
  display: inline-block;
  width: 30%;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-out;
    box-shadow: 0 4px 8px rgba(40, 104, 208, 0.78);
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: -25px;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  line-height: 60px;
  @media (max-width: 991px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const HeadingText = styled.span`
  color: #333;
`;

const HeadingHighlight = styled.span`
  color: #007acc;
`;

const Description = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 30px;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width: 640px) {
      width: 98%;
      margin-left: -15px;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  @media (max-width: 991px) {
    gap: 20px;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    display: none;
  }
`;

const AdditionalContent = styled.div`
  margin-top: 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const AdditionalText = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const NavigationControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RoundButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #007acc;
  background-color: ${(props) => (props.blue ? "#007acc" : "#ffffff")};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.3);
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#007acc" : "#ccc")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#007acc" : "#999")};
  }
`;

export default Section2;
