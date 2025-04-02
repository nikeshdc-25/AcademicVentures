"use client";
import * as React from "react";
import styled from "styled-components";
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
    transition: 0.3s;

    &:hover {
      background: #007acc;
      color: white;
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
          <ExploreButton aria-label="Explore more services">
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
                <ServiceCardText>{card.title}</ServiceCardText>
              </ServiceCard>
            ))}
          </Carousel>
        </CarouselWrapper>

        <SectionFooter>
          <FooterText>
            Discover the transformative opportunities that await you with
            Academic Ventures.
            <br />
            Our dedicated guidance empowers your dreams of studying abroad,
            offering tailored
            <br />
            support that leads you confidently into your future.
          </FooterText>
        </SectionFooter>
      </ContentContainer>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  position: relative;
  padding-left: 5%;
  width: 90%;
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 991px) {
    padding-left: 5%;
    padding-right: 5%;
    height: auto;
    min-height: 500px;
  }
`;

const BackgroundAccent = styled.div`
  border-radius: 50px;
  background-color: #007acc;
  position: absolute;
  z-index: 1;
  display: flex;
  height: 90%;
  width: 100%;
  left: 2.5%;
  right: 2.5%;
  top: 5%;
  bottom: 5%;
`;

const ContentContainer = styled.div`
  border-radius: 50px;
  background-color: #ffffff;
  position: relative;
  z-index: 2;
  width: 95%;
  padding: 3% 3%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    padding: 5% 5%;
    height: auto;
  }
`;

const SectionHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2%;

  @media (max-width: 991px) {
    margin-bottom: 4%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3%;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  color: #333333;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ServiceTag = styled.div`
  align-self: stretch;
  border-radius: 60px;
  border: 1px solid #606060;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 991px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  align-self: start;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const ExploreButton = styled.button`
  border-radius: 60px;
  background-color: rgba(0, 122, 204, 1);
  display: flex;
  height: 45px;
  padding: 4px 8px 4px 16px;
  align-items: center;
  gap: 8px;
  justify-content: center;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    height: 36px;
    padding: 4px 4px 4px 12px;
  }
`;

const ExploreText = styled.span`
  color: #ffffff;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

const IconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  width: 20px;
  height: 35px;
  padding: 0 8px;
  @media (max-width: 991px) {
    width: 12px;
    height: 28px;
  }
`;

const CarouselWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  margin: 2% 0;

  /* Override default carousel styles */
  .carousel .control-dots {
    margin: 10px 0;
  }

  .carousel .control-dots .dot {
    background: #ccc;
    box-shadow: none;
    width: 8px;
    height: 8px;
  }

  .carousel .control-dots .dot.selected {
    background: #007acc;
  }

  .carousel .slide {
    text-align: center;
    padding: 0 10px;
  }

  .carousel .carousel-slider {
    overflow: visible;
  }
`;

const ServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 25px;
  aspect-ratio: 1.2;
  height: 250px;
  overflow: hidden;
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  line-height: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 10px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 991px) {
    height: 200px;
    font-size: 16px;
  }
`;

const ServiceCardImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ServiceCardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 15px 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  border-radius: 0 0 25px 25px;
`;

const SectionFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 991px) {
    margin-top: 4%;
  }
`;

const FooterText = styled.p`
  font-family: Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 12px;
  }
`;

export default ServicesSection;
