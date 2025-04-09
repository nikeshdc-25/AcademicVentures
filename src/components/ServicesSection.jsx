"use client";
import * as React from "react";
import styled, { keyframes } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(`/services/${path}`);
  };
  const handleServiceClick = () => {
    navigate(`/services`);
  };

  const serviceCards = [
    {
      id: 1,
      title: "Visa Assistance",
      image: "./services/visa.jpg",
      path: "visa-assistance",
    },
    {
      id: 2,
      title: "Language Programs",
      image: "./services/languageprogram.jpg",
      path: "language-programs",
    },
    {
      id: 3,
      title: "Partner Universities",
      image: "./services/partneruni.jpg",
      path: "partner-universities",
    },
    {
      id: 4,
      title: "Test Preparation Courses",
      image: "./services/test.jpg",
      path: "test-preparation",
    },
    {
      id: 5,
      title: "University Selection Assistance",
      image: "./services/universityselection.jpg",
      path: "university-selection",
    },
    {
      id: 6,
      title: "Study Abroad Services",
      image: "./services/studyabroad.jpg",
      path: "study-abroad",
    },
    {
      id: 7,
      title: "Pre-Departure Support",
      image: "./services/predeparture.jpg",
      path: "pre-departure",
    },
    {
      id: 8,
      title: "Scholarship & Financial Aid",
      image: "./services/finance.jpg",
      path: "scholarships",
    },
    {
      id: 9,
      title: "Career Counselling",
      image: "./services/career.jpg",
      path: "career-counselling",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1.3 },
  };

  const ArrowBase = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    color: #007acc;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #007acc;
      color: white;
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 122, 204, 0.3);
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  `;

  const PrevArrow = ({ onClick }) => (
    <ArrowBase style={{ left: "10px" }} onClick={onClick}>
      <ArrowBackIcon size={20} />
    </ArrowBase>
  );

  const NextArrow = ({ onClick }) => (
    <ArrowBase style={{ right: "10px" }} onClick={onClick}>
      <ArrowForwardIcon size={20} />
    </ArrowBase>
  );

  return (
    <SectionWrapper>
      <BackgroundAccent />
      <ContentContainer>
        <SectionHeader>
          <HeaderLeft>
            <ServiceTag>Our Services</ServiceTag>
            <SectionTitle>Empowering Your Ambition</SectionTitle>
          </HeaderLeft>
          <ExploreButton onClick={handleServiceClick}>
            <ExploreText>Explore More</ExploreText>
            <IconWrapper>
              <ArrowOutwardIcon />
            </IconWrapper>
          </ExploreButton>
        </SectionHeader>

        <CarouselWrapper>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={5000}
            transitionDuration={800}
            swipeable
            draggable
            showDots={false}
            arrows
            customLeftArrow={<PrevArrow />}
            customRightArrow={<NextArrow />}
          >
            {serviceCards.map((card) => (
              <ServiceCard
                key={card.id}
                onClick={() => handleCardClick(card.path)}
              >
                <ServiceCardImage src={card.image} alt={card.title} />
                <ServiceCardOverlay />
                <ServiceCardText>
                  <h3>{card.title}</h3>
                  <LearnMore>Learn More →</LearnMore>
                </ServiceCardText>
              </ServiceCard>
            ))}
          </Carousel>
        </CarouselWrapper>

        <SectionFooter>
          <FooterText>
            Discover the transformative opportunities that await you with
            Academic Ventures.
            <br />
            <FooterExtra>
              Our dedicated guidance empowers your dreams of studying abroad,
              offering tailored
              <br />
              support that leads you confidently into your future.
            </FooterExtra>
          </FooterText>
        </SectionFooter>
      </ContentContainer>
    </SectionWrapper>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const SectionWrapper = styled.section`
  position: relative;
  padding: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (max-width: 991px) {
    padding: 2rem 0;
  }
`;

const BackgroundAccent = styled.div`
  border-radius: 40px;
  background: linear-gradient(135deg, #007acc, #00a8ff, #007acc);
  background-size: 200% 200%;
  position: absolute;
  z-index: 1;
  height: 90%;
  width: 95%;
  top: 5%;
  animation: ${gradientShift} 8s ease infinite;
  box-shadow: 0 20px 40px rgba(0, 122, 204, 0.2);

  @media (max-width: 991px) {
    width: 90%;
    border-radius: 30px;
  }
`;

const ContentContainer = styled.div`
  border-radius: 40px;
  background-color: #ffffff;
  position: relative;
  z-index: 2;
  width: 90%;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    pointer-events: none;
  }

  @media (max-width: 991px) {
    padding: 2rem;
    width: 95%;
  }
`;

const SectionHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  color: #333333;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ServiceTag = styled.div`
  align-self: stretch;
  border-radius: 60px;
  border: 1px solid rgba(96, 96, 96, 0.2);
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  background: rgba(0, 122, 204, 0.05);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 122, 204, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 991px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  background: linear-gradient(90deg, #007acc, #00a8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;

  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
`;

const ExploreButton = styled.button`
  border-radius: 60px;
  background: linear-gradient(90deg, #007acc, #00a8ff);
  display: flex;
  height: 3rem;
  padding: 0 1rem 0 1.5rem;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 122, 204, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 122, 204, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 991px) {
    height: 2.5rem;
    padding: 0 0.8rem 0 1.2rem;
  }
`;

const ExploreText = styled.span`
  color: #ffffff;
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;

  @media (max-width: 991px) {
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  transition: all 0.3s ease;

  ${ExploreButton}:hover & {
    transform: rotate(45deg);
  }

  @media (max-width: 991px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const CarouselWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
  padding: 1rem 0;

  .carousel-container {
    overflow: visible !important;
  }

  .carousel .slider-wrapper {
    overflow: visible;
  }

  @media (max-width: 991px) {
    margin: 1.5rem 0;
  }
`;
const ServiceCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  transition: all 0.4s ease;
  z-index: 1;
`;
const ServiceCardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    transition: transform 0.3s ease;

    @media (max-width: 991px) {
      font-size: 1.1rem;
    }
  }
`;

const LearnMore = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease 0.1s;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

`;


const ServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 25px;
  aspect-ratio: 1.1;
  height: 280px;
  overflow: hidden;
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 0.5rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 122, 204, 0.3);

    ${ServiceCardOverlay} {
      background: linear-gradient(
        to top,
        rgba(0, 122, 204, 0.8),
        rgba(0, 122, 204, 0.4)
      );
    }

    ${ServiceCardText} h3 {
      transform: translateY(-10px);
    }

    ${LearnMore} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 991px) {
    height: 220px;
  }
`;

const ServiceCardImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const SectionFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeIn} 0.8s ease-out 0.3s both;

  @media (max-width: 991px) {
    margin-top: 1.5rem;
  }
`;

const FooterText = styled.p`
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 1rem;
  color: #555;
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
  margin: 0;
  max-width: 800px;

  @media (max-width: 991px) {
    font-size: 0.9rem;
  }
`;

const FooterExtra = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #777;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ServicesSection;
