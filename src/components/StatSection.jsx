"use client";
import * as React from "react";
import styled, { keyframes, css } from "styled-components";
import StatItem from "./StatItem";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CloseIcon from "@mui/icons-material/Close";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

function StatSection() {
  const [showVideo, setShowVideo] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sectionRef}>
      <HeroContent>
        {showVideo ? (
          <IframeContainer>
            <CloseButton onClick={() => setShowVideo(false)}>
              <CloseIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "white" }} />
            </CloseButton>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/89dGC8de0CA"
              title="Aerosmith - Dream On (Audio)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </IframeContainer>
        ) : (
          <ContentSection>
            <Heading visible={isVisible}>
              Transform Your Aspirations into Reality
            </Heading>
            <LogoContainer>
              <LogoWrapper visible={isVisible} onClick={() => setShowVideo(true)}>
                <PlayCircleIcon sx={{ 
                  fontSize: { xs: 80, sm: 100, md: 125 }, 
                  color: "white" 
                }} />
              </LogoWrapper>
            </LogoContainer>
            <Description visible={isVisible}>
              Gain unparalleled access to the world-class education institutions with Technimus Consultancy. Our tailored support guides you through the complexities of studying abroad, ensuring personalized assistance with every step.
            </Description>
            <StatsContainer visible={isVisible}>
              <StatItem number="2000+" text="Students Counseled" showDivider animate={isVisible} />
              <StatItem number="125+" text="Partner Universities" showDivider animate={isVisible} />
              <StatItem number="95%" text="Visa Success" showDivider animate={isVisible} />
              <StatItem number="100+" text="Scholarships" showDivider={false} animate={isVisible} />
            </StatsContainer>
          </ContentSection>
        )}
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 80px 140px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 40px 0;

  @media (max-width: 1200px) {
    padding: 80px 60px;
  }

  @media (max-width: 991px) {
    padding: 60px 40px;
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
    margin: 30px 0;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
    border-radius: 30px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const HeroContent = styled.div`
  border-radius: 40px;
  font-family: "Open Sans", sans-serif;
  height: 750px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    height: 700px;
  }

  @media (max-width: 991px) {
    height: 650px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 640px) {
    height: 500px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 450px;
    padding: 15px;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  iframe {
    border-radius: 40px;
  }

  @media (max-width: 640px) {
    iframe {
      border-radius: 30px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.7);
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 15px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 78px;
  max-width: 1143px;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeIn} 0.8s ease-out forwards;
    `}

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #007acc, #00b4ff);
    border-radius: 2px;
  }

  @media (max-width: 1200px) {
    font-size: 54px;
    line-height: 70px;
    max-width: 900px;
  }

  @media (max-width: 991px) {
    font-size: 48px;
    line-height: 62px;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 52px;
    max-width: 700px;
    margin-bottom: 25px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 20px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
    max-width: 350px;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  max-width: 837px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
    `}

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 28px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    max-width: 600px;
    margin-bottom: 30px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;


const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 122, 204, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  ${({ visible }) =>
    visible &&
    css`
      animation: ${pulse} 2s infinite 0.5s;
    `}

  &:hover {
    background-color: rgba(0, 122, 204, 1);
    transform: scale(1.1);
  }

  @media (max-width: 991px) {
    width: 90px;
    height: 90px;
    margin: 25px 0;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    margin: 15px 0;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
    `}

  @media (max-width: 1200px) {
    gap: 25px;
    margin-top: 70px;
  }

  @media (max-width: 991px) {
    gap: 20px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 50px;
  }

  @media (max-width: 640px) {
    margin-top: 30px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 0px;
    gap: 0;
  }
`;

export default StatSection;