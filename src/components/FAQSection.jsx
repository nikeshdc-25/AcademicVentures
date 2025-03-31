"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How Can I Begin My Study Abroad Journey with Academic Ventures?",
      answer: "Start by booking a free consultation with us. We'll assess your goals, recommend suitable programs, and guide you through the application process."
    },
    {
      question: "How Do I Know Your Services Are Credible?",
      answer: "Academic Ventures is recognized for its expertise, success stories, and partnerships with reputable institutions. Check our client testimonials and accreditation details."
    },
    {
      question: "What Preparations Should I Make Before Studying Abroad?",
      answer: "You should prepare your academic documents, financial proof, visa applications, and language proficiency tests. Our team will help you at every step."
    },
    {
      question: "What Test Preparation Services Do You Offer?",
      answer: "We provide coaching for IELTS, TOEFL, GRE, and other standardized tests essential for your study abroad journey."
    },
    {
      question: "How Can Academic Ventures Simplify My Study Abroad Path?",
      answer: "We handle everything from university selection, application processing, visa guidance, and pre-departure support to make your journey smooth."
    },
    {
      question: "How Do I Contact Academic Ventures for Support?",
      answer: "You can reach us via email, phone, or visit our website to book an appointment with our consultants."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer>
      <HeadingContainer>
        <Heading>
          <RegularText>Frequently</RegularText>
          <HighlightedText> Asked Questions</HighlightedText>
        </Heading>
      </HeadingContainer>
      <AccordionContainer>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} isOpen={openIndex === index}>
            <AccordionHeader
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`content-${index}`}
            >
              <QuestionText>{item.question}</QuestionText>
              <IconWrapper isOpen={openIndex === index}>
                <ArrowDownwardIcon />
              </IconWrapper>
            </AccordionHeader>
            {openIndex === index && (
              <AccordionContent id={`content-${index}`}>
                <p>{item.answer}</p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </AccordionContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 15px;
  gap: 30px;
  background-color: #f9f9f9;
`;

const HeadingContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
`;

const Heading = styled.h2`
  font-size: 50px;
  line-height: 68px;
  font-family: Open Sans;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const RegularText = styled.span`
  color: #333333;
`;

const HighlightedText = styled.span`
  color: #007acc;
`;

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isOpen ? "#e6f7ff" : "#ffffff")};
  margin-bottom: 10px;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: ${(props) => (props.isOpen ? "0px 4px 15px rgba(0, 122, 204, 0.2)" : "none")};
`;

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const QuestionText = styled.h3`
  margin: 0;
  font-size: 20px;
  font-family: Open Sans;
  color: #333;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${(props) => (props.isOpen ? "#007acc" : "#606060")};
`;

const AccordionContent = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: #f1faff;
  border-radius: 5px;
  color: #333;
  font-family: Open Sans;
  font-size: 16px;

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

export default FAQSection;