"use client";
import * as React from "react";
import styled from "styled-components";
import StatItem from "./StatItem";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CloseIcon from "@mui/icons-material/Close";

function StatSection() {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <HeroContainer>
      <HeroContent>
        {showVideo ? (
          <IframeContainer>
            <CloseButton onClick={() => setShowVideo(false)}>
              <CloseIcon sx={{ fontSize: 40, color: "white" }} />
            </CloseButton>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/89dGC8de0CA"
              title="Aerosmith - Dream On (Audio)"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </IframeContainer>
        ) : (
          <ContentSection>
            <Heading>Transform Your Aspirations into Reality</Heading>
            <LogoContainer>
              <LogoWrapper onClick={() => setShowVideo(true)}>
                <PlayCircleIcon sx={{ fontSize: 125, color: "white" }} />
              </LogoWrapper>
            </LogoContainer>
            <Description>
              Gain unparalleled access to the world-class education institutions
              with Technimus Consultancy. Our tailored support guides you through
              the complexities of studying abroad, ensuring personalized
              assistance with every step.
            </Description>
            <StatsContainer>
              <StatItem number="2000+" text="Students Counseled" showDivider />
              <StatItem number="150+" text="Partner Universities" showDivider />
              <StatItem number="95%" text="Visa Success" showDivider />
              <StatItem number="100+" text="Scholarships" showDivider={false} />
            </StatsContainer>
          </ContentSection>
        )}
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  background: url("https://cdn.builder.io/api/v1/image/assets/TEMP/2eef42d0362253a7542094a9742583d5d6ffa8ff?placeholderIfAbsent=true")
    lightgray;
  background-size: cover;
  background-position: center;
  padding: 80px 140px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 60px 40px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const HeroContent = styled.div`
  border-radius: 40px;
  height: 750px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 99px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 78px;
  max-width: 1143px;
  margin-bottom: 30px;
  @media (max-width: 991px) {
    font-size: 48px;
    line-height: 62px;
  }
  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 47px;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  max-width: 837px;
  margin-bottom: 40px;
  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: -30px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  margin-top: 80px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export default StatSection;