"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FAQSection = () => {
  const faqItems = [
    {
      question: "Can I get a scholarship?",
      answer: "Yes, many universities offer merit-based and need-based scholarships. Eligibility depends on academic performance, test scores, and extracurricular achievements. Our experts can guide you in finding the best scholarship options."
    },
    {
      question: "How long does it take to get a student visa?",
      answer: "Processing time varies by country, typically ranging from 2 to 8 weeks. It's best to apply early to avoid delays and ensure timely processing."
    },
    {
      question: "What are your service charges?",
      answer: "Our consultancy offers transparent pricing. Some services may be free, while others, such as application and processing fees, depend on the university and country."
    },
    {
      question: "Can I work while studying?",
      answer: (
        <>
          Yes, most study destinations allow students to work part-time. Here's a quick breakdown:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>USA:</strong> 20 hours/week (on-campus)</li>
            <li><strong>UK, Canada, Australia:</strong> 20 hours/week (during semesters)</li>
            <li><strong>Malaysia, Romania:</strong> Work restrictions apply</li>
          </ul>
        </>
      )
    },
    {
      question: "How long does the admission process take?",
      answer: "The admission process typically takes between 4 to 12 weeks after submitting your application. This can vary depending on the university."
    },
    {
      question: "Do you guarantee a visa?",
      answer: "While we cannot guarantee a visa, we provide expert guidance to improve your chances through proper documentation and preparation."
    },
    {
      question: "What are the general admission requirements?",
      answer: (
        <>
          Admission requirements may vary, but typically include:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Academic Transcripts</li>
            <li>English proficiency (IELTS/PTE/TOEFL)</li>
            <li>Statement of Purpose (SOP)</li>
            <li>Recommendation Letters (LOR)</li>
            <li>Financial proof for tuition and living costs</li>
          </ul>
        </>
      )
    },
    {
      question: "Can I settle after studying?",
      answer: "It depends on the country. Many countries offer post-study work visas, which may lead to permanent residency (PR) if certain criteria are met."
    },
    {
      question: "Do I get PR after my studies?",
      answer: "Permanent Residency (PR) is not automatically granted after your studies. However, countries like Canada, Australia, and the UK offer pathways to PR through work experience after graduation."
    },
    {
      question: "Can I get admission to a top university despite having a low GPA?",
      answer: "Yes, it's possible! While a strong GPA is important, universities also consider factors like standardized test scores (e.g., GRE, GMAT, IELTS/TOEFL), relevant work experience, extracurricular activities, and your personal statement. We can help you present a compelling application, even with a low GPA."
    },
    {
      question: "What GPA is required for admission?",
      answer: "Most universities require a minimum GPA of 2.5 - 3.0 (out of 4.0) for undergraduate programs and 3.0+ for master's programs. However, top universities may require higher GPAs."
    },
    {
      question: "Can I study in a country with affordable education?",
      answer: "Yes, we work with top universities in countries that offer both high-quality education and affordable tuition. Some options include Malaysia, Romania, and certain universities in the USA and UK."
    },
    {
      question: "What are the main study intakes?",
      answer: (
        <>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>Fall Intake (Aug/Sept/Oct):</strong> The most common intake with the highest scholarships.</li>
            <li><strong>Spring Intake (Jan/Feb):</strong> An alternative intake for those who miss the Fall deadlines.</li>
            <li><strong>Summer Intake (May/June):</strong> Limited program availability.</li>
          </ul>
        </>
      )
    },
    {
      question: "How do I get started?",
      answer: (
        <>
          Starting your global education journey is easy:
          <ol style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>Free Consultation:</strong> Talk to our study abroad advisors.</li>
            <li><strong>University Selection & Application:</strong> We handle everything.</li>
            <li><strong>Visa Success & Pre-Departure Support:</strong> Get ready for your journey.</li>
          </ol>
        </>
      )
    },
    {
      question: "Can I access virtual counseling?",
      answer: "Yes, we offer virtual counseling via WhatsApp or Viber for your convenience."
    },
    {
      question: "What types of programs can I study?",
      answer: (
        <>
          We offer guidance in both undergraduate and graduate programs, including fields such as:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Business Administration (BBA, MBA)</li>
            <li>Computer Science & Engineering</li>
            <li>Health Sciences (Nursing, Pre-Med)</li>
            <li>IT & Data Science</li>
            <li>Hospitality & Tourism</li>
            <li>Law, International Studies, Public Health</li>
          </ul>
        </>
      )
    },
    {
      question: "Do you help with accommodation?",
      answer: "Yes, we assist in finding affordable student accommodation in your study destination."
    },
    {
      question: "What extra support do you provide?",
      answer: (
        <>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>Pre-departure Support:</strong> Orientation and tips for adjusting to life abroad.</li>
            <li><strong>Post-arrival Support:</strong> Assistance with settling in, including banking and transportation.</li>
            <li><strong>Career Counselling:</strong> Guidance on internships, jobs, and future career opportunities.</li>
          </ul>
        </>
      )
    },
    {
      question: "What are the work and PR pathways available after studying?",
      answer: "We provide information on post-study work options and PR pathways in countries like Canada, Australia, and the UK."
    },
    {
      question: "What are your success rates?",
      answer: (
        <>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li><strong>Visa Success Rate:</strong> We have a high visa success rate, thanks to our thorough documentation and preparation.</li>
            <li><strong>Client Reviews:</strong> We have positive reviews from satisfied clients who have successfully gone abroad.</li>
          </ul>
        </>
      )
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
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </AccordionContainer>
    </SectionContainer>
  );
};

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 20px;
  gap: 40px;
  background-color: #f9f9f9;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 15px;
    gap: 30px;
  }
`;

const HeadingContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  line-height: 1.2;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-weight: 700;
  color: #333;

  @media (max-width: 991px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const RegularText = styled.span`
  color: #333333;
  display: block;
`;

const HighlightedText = styled.span`
  color: #007acc;
  display: block;
`;

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1px;
  }
`;

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 25px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background-color: ${(props) => (props.isOpen ? "#e6f7ff" : "#ffffff")};
  margin-bottom: 15px;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.isOpen ? "0 4px 20px rgba(0, 122, 204, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.05)")};

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 122, 204, 0.1);
  }

  @media (max-width: 768px) {
    padding: 18px 20px;
    margin-bottom: 12px;
  }
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
  gap: 20px;
  outline: none;
`;

const QuestionText = styled.h3`
  margin: 0;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  font-weight: 600;
  flex: 1;
  line-height: 1.4;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${(props) => (props.isOpen ? "#007acc" : "#606060")};
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOpen ? "rgba(0, 122, 204, 0.1)" : "transparent")};

  svg {
    font-size: 24px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  &:hover {
    color: #007acc;
    background-color: rgba(0, 122, 204, 0.1);
  }
`;

const AccordionContent = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f1faff;
  border-radius: 8px;
  color: #333;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  p, ul, ol {
    margin: 0 0 10px 0;
  }

  ul, ol {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  strong {
    color: #007acc;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 12px;
    font-size: 15px;
  }
`;

export default FAQSection;