import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [testimonials] = useState([
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      image: "/images/Students/std1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      image: "/images/Students/std2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      image: "/images/Students/std3.jpg",
    },
  ]);

  function nextTestimonial() {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  }

  function prevTestimonial() {
    setActiveIndex(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  return (
    <>
      <SectionWrapper>
        <HeaderContainer>
          <ContentWrapper>
            <SectionTitle>What Our Clients Are Saying</SectionTitle>
            <SectionSubtitle>
              Your success is our greatest reward!
            </SectionSubtitle>
          </ContentWrapper>
        </HeaderContainer>
        <TestimonialsContainer>
          <TestimonialsGrid>
            <ImageContainer>
              {testimonials.map((testimonial, index) => (
                <ImageWrapper
                  key={index}
                  style={{
                    opacity: activeIndex === index ? "1" : "0.7",
                    transform:
                      activeIndex === index ? "scale(1)" : "scale(0.95)",
                    zIndex: activeIndex === index ? "2" : "1",
                  }}
                  aria-hidden={activeIndex !== index}
                >
                  <TestimonialImage
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                  />
                </ImageWrapper>
              ))}
            </ImageContainer>
            <ContentContainer>
              <div>
                <AuthorName>{testimonials[activeIndex].name}</AuthorName>
                <AuthorTitle>
                  {testimonials[activeIndex].designation}
                </AuthorTitle>
                <TestimonialQuote>
                  <span>&quot;</span>
                  <span>{testimonials[activeIndex].quote}</span>
                  <span>&quot;</span>
                </TestimonialQuote>
              </div>
              <NavigationButtons>
                <NavButton
                  className="prev-button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ArrowBackIcon />
                </NavButton>
                <NavButton
                  className="next-button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ArrowForwardIcon />
                </NavButton>
              </NavigationButtons>
            </ContentContainer>
          </TestimonialsGrid>
        </TestimonialsContainer>
      </SectionWrapper>

      <style>{`
        .prev-button:hover {
          background-color: #007acc;
          color: white;
        }
        .next-button:hover {
          background-color: #007acc;
          color: white;
        }
      `}</style>
    </>
  );
}

const SectionWrapper = styled.section`
  align-items: center;
  background-color: #fff;
  display: flex;
  padding-left: 192px;
  padding-right: 192px;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  max-width: 100%;
  width: 1536px;
  padding: 82px 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 1280px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const SectionSubtitle = styled.h3`
  color: #777777;
  text-align: center;
  font-family:
    Open Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin-top: 24px;
  line-height: 24px;
  margin-bottom: 0;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin-top: -80px;
  padding: 80px 48px;
  @media (max-width: 991px) {
    padding: 60px 32px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 320px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  transition: all 0.4s ease-in-out;
`;

const TestimonialImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
`;

const AuthorName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  margin: 0;
`;

const AuthorTitle = styled.p`
  font-size: 14px;
  color: #777777;
  margin-top: 4px;
  font-family:
    Open Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  margin-bottom: 0;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 18px;
  color: #777777;
  margin-top: 32px;
  line-height: 1.6;
  font-family:
    Open Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  margin-bottom: 0;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 48px;
`;

const NavButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export default Testimonials;
