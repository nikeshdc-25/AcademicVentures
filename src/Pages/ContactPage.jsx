"use client";
import * as React from "react";
import styled, { keyframes } from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaRegCommentDots, FaPaperPlane } from "react-icons/fa";
import { useEffect, useRef } from "react";

//Styled Initialization:

const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #34495e;
  font-family: "Open Sans", sans-serif;
`;

const StyledInput = styled.input`
  padding: 12px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }
`;

const InputUnderline = styled.div`
  height: 2px;
  background: #007acc;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  margin-top: -2px;
`;

const ButtonHoverEffect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #0066b3, #004d88);
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const SubmitButton = styled.button`
  background-color: #007acc;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  align-self: flex-start;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 122, 204, 0.3);

    ${ButtonHoverEffect} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TextareaUnderline = styled(InputUnderline)`
  margin-top: -5px;
`;

const FormSection = styled.form`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.animate {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }

  ${InputGroup}:hover ${InputUnderline} {
    transform: scaleX(1);
  }

  ${MessageGroup}:hover ${TextareaUnderline} {
    transform: scaleX(1);
  }
`;

// Floating animation for decorative elements
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Fade-in animation for content
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function ContactPage() {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add intersection observers for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MainContainer>
        {/* Decorative floating elements */}
        <FloatingCircle
          $size="100px"
          $top="10%"
          $left="5%"
          $color="#e3f2fd"
          $delay="0s"
        />
        <FloatingCircle
          $size="150px"
          $top="70%"
          $left="80%"
          $color="rgba(0, 122, 204, 0.1)"
          $delay="0.5s"
        />
        <FloatingShape $size="120px" $top="30%" $right="8%" $delay="1s" />

        <ContactContainer>
          <FormSection ref={formRef}>
            <SectionTitle>Send Us a Message</SectionTitle>
            <InputRow>
              <InputGroup>
                <InputLabel>Your First Name</InputLabel>
                <StyledInput type="text" required />
                <InputUnderline />
              </InputGroup>
              <InputGroup>
                <InputLabel>Your Last Name</InputLabel>
                <StyledInput type="text" required />
                <InputUnderline />
              </InputGroup>
            </InputRow>
            <InputRow>
              <InputGroup>
                <InputLabel>Your Email</InputLabel>
                <StyledInput type="email" required />
                <InputUnderline />
              </InputGroup>
              <InputGroup>
                <InputLabel>Your Phone Number</InputLabel>
                <StyledInput type="tel" />
                <InputUnderline />
              </InputGroup>
            </InputRow>
            <InputRow>
              <InputGroup>
                <InputLabel>Subject of Inquiry</InputLabel>
                <StyledSelect required>
                  <option value="">Select an option</option>
                  <option value="Test Preparation">Test Preparation</option>
                  <option value="Counselling">Counselling</option>
                  <option value="Mock Tests">Mock Tests</option>
                  <option value="Visa Processing">Visa Processing</option>
                  <option value="Interview Preparation">
                    Interview Preparation
                  </option>
                </StyledSelect>
                <SelectArrow>▼</SelectArrow>
              </InputGroup>
            </InputRow>
            <MessageGroup>
              <InputLabel>Your Message</InputLabel>
              <StyledTextarea required />
              <TextareaUnderline />
            </MessageGroup>
            <SubmitButton type="submit">
              <ButtonContent>
                <FaPaperPlane style={{ marginRight: "10px" }} />
                Send Your Inquiry
              </ButtonContent>
              <ButtonHoverEffect />
            </SubmitButton>
          </FormSection>

          <InfoSection ref={infoRef}>
            <InfoHeader>GET IN TOUCH WITH US!</InfoHeader>
            <InfoTitle>
              <AnimatedText>
                <FaRegCommentDots style={{ marginRight: "10px" }} />
                We're Here to Assist You
              </AnimatedText>
            </InfoTitle>

            <ContactInfoList>
              <ContactInfoItem>
                <IconContainer>
                  <EmailIcon fontSize="medium" />
                  <IconHoverEffect />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Email Us</ContactTitle>
                  <ContactText>admissions@americangedcenter.com</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <PhoneIcon fontSize="medium" />
                  <IconHoverEffect />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Call Us</ContactTitle>
                  <ContactText>(977) 9860671321</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <LocationOnIcon fontSize="medium" />
                  <IconHoverEffect />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Our Location</ContactTitle>
                  <ContactText>Baluwatar, Kathmandu, Nepal</ContactText>
                </ContactDetails>
              </ContactInfoItem>
            </ContactInfoList>

            {/* Decorative pattern */}
            <InfoPattern />
          </InfoSection>
        </ContactContainer>

        <LocationSection ref={mapRef}>
          <SectionTitle>Our Location</SectionTitle>
          <LocationContent>
            <LocationInfo>
              <LocationIconContainer>
                <LocationOnIcon fontSize="large" />
                <LocationIconHover />
              </LocationIconContainer>
              <LocationText>
                <h3>Academic Ventures Pvt. Ltd</h3>
                <p>Baluwatar, Kathmandu, Nepal</p>
              </LocationText>
            </LocationInfo>

            <MapContainer>
              <LocationIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6128450238484!2d85.32797007571811!3d27.729237524525164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d959984d6b%3A0xe7e56287b4f1f587!2sAcademic%20Ventures%20International%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1743488667381!5m2!1sen!2snp"
                allowFullScreen=""
                loading="lazy"
              />
              <MapOverlay />
            </MapContainer>
          </LocationContent>
        </LocationSection>
      </MainContainer>
    </>
  );
}

// New styled components for enhanced design
const FloatingCircle = styled.div`
  position: fixed;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border-radius: 50%;
  background: ${(props) => props.$color};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  z-index: -1;
  opacity: 0.7;
  filter: blur(20px);
  animation: ${floatAnimation} 8s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  pointer-events: none;
`;

const FloatingShape = styled.div`
  position: fixed;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  background: linear-gradient(45deg, #007acc, #00b4ff);
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  z-index: -1;
  opacity: 0.1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: ${floatAnimation} 12s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  pointer-events: none;
`;

const AnimatedText = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);

  .animate & {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const SelectArrow = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #7f8c8d;
  font-size: 12px;
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const IconHoverEffect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
`;

const InfoPattern = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  opacity: 0.5;
  pointer-events: none;
`;

const LocationIconHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 122, 204, 0.1);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 122, 204, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: 0;
`;

// Enhanced existing styled components
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Open Sans", sans-serif;
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 122, 204, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 122, 204, 0.3);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledSelect = styled.select`
  padding: 12px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;
  appearance: none;
  background: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }
`;

const StyledTextarea = styled.textarea`
  height: 150px;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  resize: none;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }
`;

const InfoSection = styled.div`
  width: 350px;
  background: linear-gradient(135deg, #007acc, #00b4ff);
  color: white;
  border-radius: 16px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;

  &.animate {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0 0 16px 16px;
    padding: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    opacity: 0.3;
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);

    ${IconHoverEffect} {
      transform: scale(1);
    }
  }
`;

const LocationSection = styled.section`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 122, 204, 0.2);
  padding: 40px;
  margin-bottom: 60px;
  font-family: "Open Sans", sans-serif;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

const LocationIconContainer = styled.div`
  color: #007acc;
  font-size: 40px;
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);

    ${LocationIconHover} {
      transform: scale(1);
    }
  }
`;

const MapContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);

    ${MapOverlay} {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 10px;
  font-family: "Inter", sans-serif;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #007acc;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const InfoHeader = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const InfoTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.3;
  font-family: "Inter", sans-serif;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const ContactText = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
`;

const LocationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const LocationText = styled.div`
  h3 {
    font-size: 22px;
    margin: 0 0 5px 0;
    color: #2c3e50;
    font-family: "Inter", sans-serif;
  }

  p {
    font-size: 16px;
    margin: 0;
    color: #7f8c8d;
  }
`;

const LocationIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export default ContactPage;
