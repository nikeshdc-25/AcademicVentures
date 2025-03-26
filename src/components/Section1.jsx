"use client";
import * as React from "react";
import styled from "styled-components";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneIcon from "@mui/icons-material/Phone";

function StudyAbroadHero() {
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
      <ScheduleButton>
        <IconWrapper>
          <PhoneIcon style={{ color: "white" }} />
        </IconWrapper>
        <ButtonText>Schedule Your Free Counseling</ButtonText>
        <ArrowIconContainer>
        <ArrowOutwardIcon sx={{ fontSize: 25, color: "#007acc" }} />
        </ArrowIconContainer>
      </ScheduleButton>
      <MainImage
        src="../../public/section1.png"
        alt="Study abroad illustration"
      />
      <ServicesCard>
        <ServiceTitle>Explore Our Services</ServiceTitle>
        <ServiceDescription>
          With offerings like visa assistance, scholarship guidance, and
          comprehensive test preparation for PTE, SAT, IELTS, and more, we
          ensure every aspect of your education abroad is covered.
        </ServiceDescription>
        <ViewServicesButton>
          <ViewServicesText>View Services</ViewServicesText>
          <ArrowIconSmallContainer>
          <ArrowOutwardIcon sx={{ fontSize: 20, color: "#007acc" }} />
          </ArrowIconSmallContainer>
        </ViewServicesButton>
      </ServicesCard>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 98%;
  border-radius: 35px;
  position: relative;
  padding: 20px;
  overflow: hidden;
  background-color: #efefed;
`;

const BackgroundCircle = styled.div`
  width: 209px;
  height: 209px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 232px;
  background-color: #e3f2fd;
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
`;

const HeadingContainer = styled.div`
  width: 500px;
  position: relative;
  margin-left: 100px;
  @media (max-width: 991px) {
    width: 90%;
    margin-left: 20px;
  }
`;

const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  font-weight: 600;
  line-height: 75px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const BlueText = styled.span`
  color: #007acc;
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
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 991px) {
    width: 90%;
    margin-left: 20px;
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
  @media (max-width: 640px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const ButtonText = styled.span`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
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
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled.img`
  width: 1030px;
  height: 700px;
  border-radius: 35px;
  position: absolute;
  right: 0;
  top: 139px;
  object-fit: cover;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    position: relative;
    top: 40px;
    margin-bottom: 40px;
  }
`;

const ServicesCard = styled.aside`
  width: 420px;
  height: 286px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1.25px);
  position: absolute;
  right: 40px;
  bottom: 48px;
  padding: 20px;
  background-color: rgba(160, 160, 160, 0.3);
  @media (max-width: 991px) {
    width: 90%;
    right: 5%;
    bottom: 20px;
  }
  @media (max-width: 640px) {
    height: auto;
    padding: 15px;
  }
`;

const ServiceTitle = styled.h2`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 12px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const ServiceDescription = styled.p`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
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
  @media (max-width: 640px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    right: auto;
    bottom: auto;
  }
`;

const ViewServicesText = styled.span`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 28px;
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
`;

export default StudyAbroadHero;
