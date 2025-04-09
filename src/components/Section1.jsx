"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import BookCounselling from "./BookCounselling";

function StudyAbroadHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const servicesCardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const handleServiceClick = () => {
    navigate(`/services`);
  };

  const handleMouseMove = (e) => {
    if (servicesCardRef.current) {
      const rect = servicesCardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      setMousePosition({ x: angleY, y: angleX });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroContainer>
      <BackgroundCircle />
      <BackgroundStripe />
      <BlueBlurCircle />
      <HeadingContainer>
        <Heading>
          <span>Transform Your Future</span>
          <BlueText>with Academic Ventures</BlueText>
          <span>Your Trusted Partner in</span>
          <BlueText>Study Abroad Opportunities.</BlueText>
        </Heading>
      </HeadingContainer>
      <Description>
        Unlock pathways to educational excellence with personalized guidance
        tailored to your aspirations. Our experienced team connects you with top
        universities worldwide, ensuring your study abroad journey is smooth and
        successful.
      </Description>
      <ScheduleButton onClick={() => setIsModalOpen(true)}>
        <IconWrapper>
          <PhoneIcon style={{ color: "white" }} />
        </IconWrapper>
        <ButtonText>Schedule Your Free Counseling</ButtonText>
        <ArrowIconContainer>
          <ArrowOutwardIcon sx={{ fontSize: 25, color: "#007acc" }} />
        </ArrowIconContainer>
      </ScheduleButton>
      <BookCounselling
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <MainImage src="../section1.png" alt="Study abroad illustration" />
      <ServicesCard 
        ref={servicesCardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        }}
      >
        <ServiceTitle>Explore Our Services</ServiceTitle>
        <ServiceDescription>
          With offerings like visa assistance, scholarship guidance, and
          comprehensive test preparation for PTE, SAT, IELTS, and more, we
          ensure every aspect of your education abroad is covered.
        </ServiceDescription>
        <ViewServicesButton onClick={handleServiceClick}>
          <ViewServicesText>View Services</ViewServicesText>
          <ArrowIconSmallContainer>
            <ArrowOutwardIcon sx={{ fontSize: 20, color: "#007acc" }} />
          </ArrowIconSmallContainer>
        </ViewServicesButton>
      </ServicesCard>
    </HeroContainer>
  );
}

// Modified ServicesCard with transition
const ServicesCard = styled.aside`
  width: 420px;
  height: 286px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  position: absolute;
  right: 40px;
  bottom: 48px;
  padding: 20px;
  background-color: rgba(160, 160, 160, 0.3);
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  will-change: transform;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 122, 204, 0.2);
  }

  @media (max-width: 1700px) {
    width: 380px;
    height: 260px;
    right: 30px;
    bottom: 40px;
  }

  @media (max-width: 768px) {
    max-height: 220px;
    width: 310px;
    bottom: 10px;
    backdrop-filter: blur(4px);
  }
`;

// Rest of your styled components remain the same...
const HeroContainer = styled.section`
  width: 98%;
  border-radius: 35px;
  position: relative;
  padding: 20px;
  overflow: hidden;
  background-color: #efefed;

  @media (max-width: 1700px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 25px;
  }
`;

const BackgroundCircle = styled.div`
  width: 209px;
  height: 209px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 232px;
  background-color: #e3f2fd;
  animation: pulse 8s infinite alternate;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.05);
      opacity: 1;
    }
  }

  @media (max-width: 1700px) {
    width: 180px;
    height: 180px;
    top: 200px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 150px;
    left: 5px;
  }
`;

const BackgroundStripe = styled.div`
  width: 326px;
  height: 1276px;
  transform: rotate(-18.74deg);
  opacity: 0.03;
  position: absolute;
  left: 939px;
  top: -121px;
  background-color: #30302b;
  animation: slide 20s linear infinite;

  @keyframes slide {
    0% {
      transform: rotate(-18.74deg) translateY(0);
    }
    100% {
      transform: rotate(-18.74deg) translateY(-50%);
    }
  }

  @media (max-width: 1700px) {
    left: 800px;
  }

  @media (max-width: 768px) {
    width: 200px;
    left: 50%;
    top: -50px;
  }
`;

const BlueBlurCircle = styled.div`
  width: 315px;
  height: 315px;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(40px);
  position: absolute;
  left: 603px;
  top: 238px;
  background-color: #007acc;
  animation: breathe 6s ease-in-out infinite;

  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.4;
    }
  }

  @media (max-width: 1700px) {
    width: 250px;
    height: 250px;
    left: 500px;
    top: 200px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    left: 30%;
    top: 150px;
  }
`;

const HeadingContainer = styled.div`
  width: 500px;
  position: relative;
  margin-left: 100px;
  z-index: 1;
  overflow: hidden;  // Add this to contain the animations

  @media (max-width: 1700px) {
    width: 450px;
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 20px;
    margin-top: 20px;
  }
`;


const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  font-weight: 600;
  line-height: 75px;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow: hidden;

  span {
    display: inline-block;
    transform: translateY(-100%);
    opacity: 0;
    animation: slideIn 0.8s forwards;
    
    &:nth-child(1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
  }

  @keyframes slideIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1700px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 45px;
  }
`;


const BlueText = styled.span`
  color: #007acc;
  display: inline-block;
  transform: translateY(-100%);
  opacity: 0;
  animation: slideIn 0.8s forwards;
  
  &:nth-of-type(1) {
    animation-delay: 0.4s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.8s;
  }

  @keyframes slideIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;


const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #000;
  width: 500px;
  max-width: 620px;
  margin-left: 100px;
  margin-top: 20px;
  z-index: 1;

  @media (max-width: 1700px) {
    width: 450px;
    margin-left: 50px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 20px;
    font-size: 15px;
    line-height: 22px;
    margin-top: 15px;
  }
`;

const ScheduleButton = styled.button`
  display: inline-flex;
  padding: 5px 10px 5px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 9999px;
  margin-left: 100px;
  margin-top: 30px;
  margin-bottom: -15px;
  background-color: #007acc;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(30deg);
    }
    100% {
      transform: translateX(100%) rotate(30deg);
    }
  }

  &:hover {
    transform: scale(1.02);
    &::after {
      animation: shine 1.5s infinite;
    }
  }

  @media (max-width: 1700px) {
    margin-left: 50px;
    padding: 5px 8px 5px 15px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    width: calc(100% - 40px);
    justify-content: center;
  }
`;

const ButtonText = styled.span`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  z-index: 1;

  @media (max-width: 1700px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ArrowIconContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
  transition: transform 0.3s ease;

  ${ScheduleButton}:hover & {
    transform: rotate(45deg);
  }

  @media (max-width: 1700px) {
    width: 28px;
    height: 28px;
    padding: 8px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const MainImage = styled.img`
  width: 1030px;
  height: auto;
  border-radius: 35px;
  right: 0;
  position: absolute;
  top: 139px;
  object-fit: cover;
  z-index: 0;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 1700px) {
    max-width: 900px;
    height: auto;
    top: 100px;
  }
  @media (max-width: 1500px) {
    max-width: 750px;
    height: auto;
    top: 100px;
  }
  @media (max-width: 1300px) {
    max-width: 700px;
    height: auto;
    top: 100px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    margin-top: 30px;
    border-radius: 20px;
  }
`;

const ServiceTitle = styled.h2`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  ${ServicesCard}:hover & {
    transform: translateX(5px);
  }

  @media (max-width: 1700px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const ServiceDescription = styled.p`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
  transition: transform 0.3s ease 0.1s;

  ${ServicesCard}:hover & {
    transform: translateX(5px);
  }

  @media (max-width: 1700px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    color: rgb(255, 255, 255);
  }
`;

const ViewServicesButton = styled.button`
  display: inline-flex;
  height: 50px;
  padding: 5px 6px 5px 16px;
  align-items: center;
  gap: 18px;
  border-radius: 9999px;
  position: absolute;
  right: 33px;
  bottom: 17px;
  background-color: #007acc;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
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
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.02);
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 1700px) {
    height: 45px;
    padding: 5px 5px 5px 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 5px;
    width: 60%;
    justify-content: center;
    height: 45px;
  }
`;

const ViewServicesText = styled.span`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 1700px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ArrowIconSmallContainer = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;

  ${ViewServicesButton}:hover & {
    transform: rotate(45deg);
  }

  @media (max-width: 1700px) {
    width: 18px;
    height: 18px;
    padding: 8px;
  }
`;

export default StudyAbroadHero;