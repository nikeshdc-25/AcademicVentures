"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Section3Carousel from "./Section3Carousel";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BookCounselling from "./BookCounselling";
import { useNavigate } from "react-router-dom";

function Section3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [carouselContent] = useState([
    {
      image: "./section3.1.png",
      title: "Unleash Your Global Potential with Academic Ventures",
      description:
        "Our expert team is committed to guiding you through every step of your study abroad journey. We connect you with top-tier universities across the globe, ensuring a seamless and transformative academic experience that shapes your future.",
    },
    {
      image: "./section3.2.png",
      title: "Showcase Your Potential with Our Services",
      description:
        "With years of expertise, we provide comprehensive support to students navigating the complex journey of studying abroad. From rigorous test preparations to intricate visa processes, we equip you with everything you need to succeed on the global stage.",
    },
    {
      image: "./section3.3.png",
      title: "Empower Your Academic Future with Our Services",
      description:
        "Discover opportunities with our services, including expert visa assistance and test prep for PTE, GRE, IELTS, SAT, and more. Our resources are designed to unlock your potential and lead you to success in your international education.",
    },
  ]);

  const serviceCategories = [
    { name: "Visa Assistance", id: "visa-assistance" },
    { name: "Language Program", id: "language-programs" },
    { name: "Partner Universities", id: "partner-universities" },
    { name: "Study Abroad", id: "study-abroad" },
    { name: "Pre-Departure Support", id: "pre-departure-support" },
    { name: "Career Support", id: "career-counselling" },
    { name: "Test Preparation", id: "test-preparation" },
    { name: "University Selection", id: "university-selection" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselContent.length) % carouselContent.length
    );
  };

  return (
    <SectionWrapper>
      <ContentContainer>
        <ServiceCategoriesNav>
          {serviceCategories.map((category, index) => (
            <CategoryButton
              key={index}
              onClick={() => navigate(`/services/${category.id}`)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </ServiceCategoriesNav>

        <MainContentGrid>
          <BlueCard>
            <CardContentGrid>
              <CarouselImageWrapper>
                <CarouselSlider
                  className={`${
                    isTransitioning ? "transitioning" : ""
                  } ${slideDirection}`}
                >
                  <StyledCarouselImage
                    key={currentSlide}
                    src={carouselContent[currentSlide].image}
                    alt="Academic journey showcase"
                  />
                  <PrevImagePlaceholder
                    className={slideDirection === "prev" ? "active" : ""}
                    src={
                      carouselContent[
                        (currentSlide - 1 + carouselContent.length) %
                          carouselContent.length
                      ].image
                    }
                    alt=""
                    aria-hidden="true"
                  />
                  <NextImagePlaceholder
                    className={slideDirection === "next" ? "active" : ""}
                    src={
                      carouselContent[
                        (currentSlide + 1) % carouselContent.length
                      ].image
                    }
                    alt=""
                    aria-hidden="true"
                  />
                </CarouselSlider>
              </CarouselImageWrapper>

              <ContentColumn>
                <TextContentWrapper>
                  <TextContent
                    className={`${
                      isTransitioning ? "transitioning" : ""
                    } ${slideDirection}`}
                  >
                    <Heading>{carouselContent[currentSlide].title}</Heading>
                    <Description>
                      {carouselContent[currentSlide].description}
                    </Description>
                  </TextContent>
                </TextContentWrapper>

                <CtaButton onClick={() => setIsModalOpen(true)}>
                  <CtaText>Schedule a Free Counseling</CtaText>
                  <IconWrapper>
                    <ArrowOutwardIcon sx={{ color: "white" }} />
                  </IconWrapper>
                </CtaButton>
                <BookCounselling
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />

                <NavigationRow>
                  <SlideCounter>
                    <span>
                      <span>{currentSlide + 1}</span>
                      <span> /</span>
                    </span>
                    <CounterTotal>{carouselContent.length}</CounterTotal>
                  </SlideCounter>

                  <Section3Carousel
                    onPrevClick={prevSlide}
                    onNextClick={nextSlide}
                  />
                </NavigationRow>
              </ContentColumn>
            </CardContentGrid>
          </BlueCard>

          <InfoSection>
            <TopRightImage>
              <img src="./circle.png" alt="Decorative" />
            </TopRightImage>
            <InfoHeading>
              <HeadingRegular>
                Transform Your Aspirations into Achievements with
              </HeadingRegular>
              <HeadingAccent> Academic Ventures.</HeadingAccent>
            </InfoHeading>

            <InfoContent>
              <ImageContainer>
                <FeatureImage
                  src="./section3.4.png"
                  alt="Educational success"
                />
                <PlusIcon>+</PlusIcon>
              </ImageContainer>

              <InfoText>
                <LogoIcon>
                  <AutoAwesomeIcon sx={{ fontSize: 40 }} />
                </LogoIcon>
                Our commitment to quality and detailed guidance empowers you to
                navigate your education abroad successfully. Let us help turn
                your dreams into reality with our expert support and resources.
              </InfoText>
            </InfoContent>
          </InfoSection>
        </MainContentGrid>
      </ContentContainer>
    </SectionWrapper>
  );
}

// Styled Components
const TopRightImage = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 18%;
  height: auto;
  animation: float 1.5s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    animation: pulse 3s ease-in-out infinite;
  }

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

  @media (max-width: 1024px) {
    top: -10px;
    right: -10px;
    width: 90px;
  }

  @media (max-width: 768px) {
    top: -5px;
    right: -5px;
    width: 80px;
  }
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1570px;
  padding: 2rem 1rem;
`;

const ServiceCategoriesNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  width: 100%;
  position: relative;
    -webkit-overflow-scrolling: touch;

    /* Hide scrollbar for all browsers */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }


  /* Show scrollbar only on small devices */
  @media (max-width: 768px) {
    scrollbar-width: thin; /* Firefox */
    &::-webkit-scrollbar {
      display: initial; /* Chrome, Safari, Opera */
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,0.2);
      border-radius: 3px;
    }
  }
`;

const CategoryButton = styled.button`
  height: 50px;
  padding: 11px 25px;
  border-radius: 9999px;
  border: 1px solid rgba(96, 96, 96, 0.2);
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  cursor: pointer;
  margin: 2px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: rgba(0, 122, 204, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;


const MainContentGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr;
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const BlueCard = styled.article`
  background-color: #007acc;
  border-radius: 35px;
  padding: 2rem;
  position: relative;
  height: 86%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CardContentGrid = styled.div`
  display: grid;
  gap: 2rem;
  height: 60%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CarouselImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  height: 550px; /* Set a fixed height */
  overflow: hidden;
  border-radius: 25px;
`;

const CarouselSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* The transition now includes a 200ms delay */
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.2s;
  display: flex; /* Ensures images align properly */
  flex-shrink: 0; /* Prevents shrinking */

  &.transitioning.next {
    transform: translateX(-100%);
  }

  &.transitioning.prev {
    transform: translateX(100%);
  }
`;



const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  position: relative;
  z-index: 2;
  flex-shrink: 0; /* Prevents resizing */
`;

const PrevImagePlaceholder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-shrink: 0;

  &.active {
    opacity: 1;
  }
`;

const NextImagePlaceholder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-shrink: 0;

  &.active {
    opacity: 1;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const TextContentWrapper = styled.div`
  overflow: hidden;
`;

const TextContent = styled.div`
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  position: relative;

  &.transitioning.next {
    transform: translateX(-100%);
  }

  &.transitioning.prev {
    transform: translateX(100%);
  }
`;

const Heading = styled.h2`
  color: #ffffff;
  font-family: Open Sans;
  font-size: 33px;
  line-height: 35px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

const Description = styled.p`
  color: #ffffff;
  font-family: Open Sans;
  font-size: 18px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CtaButton = styled.button`
  display: inline-flex;
  padding: 5px 5px;
  align-items: center;
  border-radius: 9999px;
  background-color: #ffffff;
  justify-content: center;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const CtaText = styled.span`
  color: #000000;
  font-family: Open Sans;
  font-size: 18px;
  line-height: 28px;
  margin-right: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin-right: -25px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: #007acc;
`;

const NavigationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SlideCounter = styled.div`
  color: #ffffff;
  font-family: Open Sans;
  font-size: 36px;
  line-height: 25px;
`;

const CounterTotal = styled.span`
  opacity: 0.5;
  font-size: 15px;
`;

const InfoSection = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
  position: relative;
`;

const InfoHeading = styled.h2`
  font-size: 45px;
  line-height: 60px;
  font-family: Open Sans;
`;

const HeadingRegular = styled.span`
  color: #333;
`;

const HeadingAccent = styled.span`
  color: #007acc;
`;

const LogoIcon = styled.div`
  position: relative;
  top: -30px;
`;

const InfoContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const FeatureImage = styled.img`
  width: 400px;
  height: 270px;
  border-radius: 25px;
  object-fit: cover;
`;

const PlusIcon = styled.div`
  position: absolute;
  left: -25px;
  top: 90px;
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  background-color: #000000;
  color: #ffffff;
  font-family: Open Sans;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.p`
  color: #333;
  font-family: Open Sans;
  font-size: 18px;
  line-height: 28px;
  flex: 1;
`;

export default Section3;
