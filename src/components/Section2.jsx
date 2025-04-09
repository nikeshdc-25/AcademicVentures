"use client";
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
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

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

function Section2() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const totalPairs = cardPairs.length;
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const cardRefs = useRef([]);

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

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleY = (x - centerX) / 20;
    const angleX = (centerY - y) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 30px rgba(0, 122, 204, 0.2)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = '0 20px 40px rgba(0, 122, 204, 0.15)';
    }
  };

  return (
    <Container>
      <AnimatedBackground />
      <ContentWrapper>
        <Section>
          <LeftColumn>
            <ImageWrapper>
              <img src="./dot.png" alt="Decorative" />
            </ImageWrapper>
            <TagBadge onClick={handleAboutUsClick}>
              <BadgeContent>About Us</BadgeContent>
            </TagBadge>
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
                  transition: isAnimating ? "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "none",
                }}
              >
                {cardPairs.map((pair, index) => (
                  <Slide key={index}>
                    <CardGrid>
                      <AnimatedCard 
                        ref={el => cardRefs.current[index * 2] = el}
                        onMouseMove={(e) => handleMouseMove(e, index * 2)}
                        onMouseLeave={() => handleMouseLeave(index * 2)}
                      >
                        <Section2Card {...pair.university} />
                      </AnimatedCard>
                      <TestimonialCardWrapper>
                        <AnimatedCard 
                          ref={el => cardRefs.current[index * 2 + 1] = el}
                          onMouseMove={(e) => handleMouseMove(e, index * 2 + 1)}
                          onMouseLeave={() => handleMouseLeave(index * 2 + 1)}
                        >
                          <Section2Card
                            {...pair.testimonial}
                            overlayPosition="top"
                            overlayTop="246px"
                          />
                        </AnimatedCard>
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowBackIcon
                      sx={{
                        color: activeButton === "prev" ? "white" : "#007acc",
                        transition: "color 0.3s ease",
                      }}
                    />
                  </RoundButton>
                  <RoundButton
                    blue={activeButton === "next"}
                    onClick={handleNextClick}
                    aria-label="Next cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        color: activeButton === "next" ? "white" : "#007acc",
                        transition: "color 0.3s ease",
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
  min-height: 75vh;
  background-color: #f8fafc;
  font-family: 'Open Sans', sans-serif;
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 991px) {
    padding: 50px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f0fb 50%, #f5f7fa 100%);
  background-size: 200% 200%;
  animation: ${gradientBackground} 10s ease infinite;
  z-index: -1;
  opacity: 0.8;
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
  gap: 60px;
  align-items: center;
  
  @media (max-width: 991px) {
    gap: 40px;
  }
  
  @media (max-width: 640px) {
    gap: 30px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  position: relative;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: -100px;
  top: 20%;
  width: 80px;
  height: auto;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(0, 122, 204, 0.2));
  z-index: 1;

  img {
    width: 75%;
    height: auto;
  }

  @media (max-width: 1024px) {
    left: 3px;
    width: 50px;
    
    img {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TagBadge = styled.div`
  color: #333;
  font-size: 18px;
  line-height: 28px;
  padding: 11px 21px;
  border-radius: 60px;
  border: 1px solid #606060;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  margin-bottom: 20px;
  display: inline-block;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(40, 104, 208, 0.3);
    
    &:before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

const BadgeContent = styled.span`
  position: relative;
  z-index: 1;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  line-height: 64px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(to right, #333 0%, #007acc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 991px) {
    font-size: 42px;
    line-height: 56px;
  }
  
  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const HeadingText = styled.span`
  display: block;
`;

const HeadingHighlight = styled.span`
  display: block;
`;

const Description = styled.p`
  color: #4a5568;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, #007acc, #00a0ff);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    padding-left: 15px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  perspective: 1000px;
  
  @media (max-width: 640px) {
    width: 100%;
    margin-left: 0;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  
  @media (max-width: 991px) {
    gap: 20px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AnimatedCard = styled.div`
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  will-change: transform;
  box-shadow: 0 20px 40px rgba(0, 122, 204, 0.15);
  border-radius: 40px;
  overflow: hidden;
  
  &:hover {
    z-index: 10;
  }
`;

const TestimonialCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const AdditionalContent = styled.div`
  margin-top: -15px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 122, 204, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 122, 204, 0.2);
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const AdditionalText = styled.p`
  color: #4a5568;
  font-size: 16px;
  line-height: 28px;
  margin: 0;
  position: relative;
  padding-left: 15px;
  
  &:before {
    content: '"';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 24px;
    color: #007acc;
    line-height: 1;
  }
  
  &:after {
    content: '"';
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 24px;
    color: #007acc;
    line-height: 1;
  }
`;

const NavigationControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RoundButton = styled.button`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #007acc;
  background-color: ${(props) => (props.blue ? "#007acc" : "white")};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 122, 204, 0.1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 122, 204, 0.2);
    
    &:after {
      opacity: 1;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.3s ease;
    opacity: 0;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const Indicator = styled.button`
  width: ${(props) => (props.active ? "24px" : "12px")};
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "#007acc" : "#cbd5e0")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    background-color: ${(props) => (props.active ? "#006bb3" : "#a0aec0")};
  }
`;

export default Section2;