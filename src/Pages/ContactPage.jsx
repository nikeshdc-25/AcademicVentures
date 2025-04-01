"use client";
import * as React from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaRegCommentDots } from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <MainContainer>
        <ContactContainer>
          <FormSection>
            <SectionTitle>Send Us a Message</SectionTitle>
            <InputRow>
              <InputGroup>
                <InputLabel>Your First Name</InputLabel>
                <StyledInput type="text" required />
              </InputGroup>
              <InputGroup>
                <InputLabel>Your Last Name</InputLabel>
                <StyledInput type="text" required />
              </InputGroup>
            </InputRow>
            <InputRow>
              <InputGroup>
                <InputLabel>Your Email</InputLabel>
                <StyledInput type="email" required />
              </InputGroup>
              <InputGroup>
                <InputLabel>Your Phone Number</InputLabel>
                <StyledInput type="tel" />
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
              </InputGroup>
            </InputRow>
            <MessageGroup>
              <InputLabel>Your Message</InputLabel>
              <StyledTextarea required />
            </MessageGroup>
            <SubmitButton type="submit">Send Your Inquiry</SubmitButton>
          </FormSection>

          <InfoSection>
            <InfoHeader>GET IN TOUCH WITH US!</InfoHeader>
            <InfoTitle>
              <span>
                <FaRegCommentDots style={{ marginRight: "10px" }} />
                We're Here to Assist You
              </span>
            </InfoTitle>

            <ContactInfoList>
              <ContactInfoItem>
                <IconContainer>
                  <EmailIcon fontSize="medium" />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Email Us</ContactTitle>
                  <ContactText>admissions@americangedcenter.com</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <PhoneIcon fontSize="medium" />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Call Us</ContactTitle>
                  <ContactText>(977) 9860671321</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <LocationOnIcon fontSize="medium" />
                </IconContainer>
                <ContactDetails>
                  <ContactTitle>Our Location</ContactTitle>
                  <ContactText>Baluwatar, Kathmandu, Nepal</ContactText>
                </ContactDetails>
              </ContactInfoItem>
            </ContactInfoList>
          </InfoSection>
        </ContactContainer>

        <LocationSection>
          <SectionTitle>Our Location</SectionTitle>
          <LocationContent>
            <LocationInfo>
              <LocationIconContainer>
                <LocationOnIcon fontSize="large" />
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
            </MapContainer>
          </LocationContent>
        </LocationSection>
      </MainContainer>
    </>
  );
}

// Styled Components
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Open Sans", sans-serif;
`;

const ContactContainer = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 60, 227, 0.66);
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
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

const FormSection = styled.form`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 30px 20px;
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
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;

  &:focus {
    border-color: #007acc;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }
`;

const StyledSelect = styled.select`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1em;

  &:focus {
    border-color: #007acc;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }
`;

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTextarea = styled.textarea`
  height: 150px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: none;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "Open Sans", sans-serif;

  &:focus {
    border-color: #007acc;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }
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

  &:hover {
    background-color: #0066b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const InfoSection = styled.div`
  width: 350px;
  background-color: #007acc;
  color: white;
  border-radius: 24px;
  margin: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 24px;
  margin-left: -10px;
    padding: 30px;
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

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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

const LocationSection = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
  padding: 40px;
  margin-bottom: 60px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
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

const LocationIconContainer = styled.div`
  color: #007acc;
  font-size: 40px;
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

const MapContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
