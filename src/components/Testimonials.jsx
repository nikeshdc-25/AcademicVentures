import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [testimonials] = useState([
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      image: "/images/Students/std1.jpg",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      image: "/images/Students/std2.jpg",
      rating: 4,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      image: "/images/Students/std3.jpg",
      rating: 5,
    },
  ]);

  function nextTestimonial() {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((activeIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }

  function prevTestimonial() {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }

  function goToTestimonial(index) {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} $filled={i < count} />
    ));
  };

  return (
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
                $active={activeIndex === index}
                $position={index - activeIndex}
                aria-hidden={activeIndex !== index}
              >
                <TestimonialImage
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                />
                <ImageOverlay $active={activeIndex === index} />
              </ImageWrapper>
            ))}
          </ImageContainer>
          <ContentContainer>
            <QuoteContent $animating={isAnimating}>
              <RatingWrapper>
                {renderStars(testimonials[activeIndex].rating)}
              </RatingWrapper>
              <TestimonialQuote>
                <QuoteMark>&ldquo;</QuoteMark>
                {testimonials[activeIndex].quote}
                <QuoteMark>&rdquo;</QuoteMark>
              </TestimonialQuote>
              <AuthorInfo>
                <AuthorName>{testimonials[activeIndex].name}</AuthorName>
                <AuthorTitle>
                  {testimonials[activeIndex].designation}
                </AuthorTitle>
              </AuthorInfo>
            </QuoteContent>
            <ControlsContainer>
              <NavigationButtons>
                <NavButton
                  className="prev-button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowBackIcon />
                </NavButton>
                <DotsContainer>
                  {testimonials.map((_, index) => (
                    <Dot
                      key={index}
                      $active={activeIndex === index}
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </DotsContainer>
                <NavButton
                  className="next-button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowForwardIcon />
                </NavButton>
              </NavigationButtons>
            </ControlsContainer>
          </ContentContainer>
        </TestimonialsGrid>
      </TestimonialsContainer>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  align-items: center;
  background-color: #f9fafb;
  display: flex;
  padding: 120px 192px;
  flex-direction: column;
  justify-content: start;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(0, 122, 204, 0.05) 0%, transparent 50%);
    z-index: 0;
  }

  @media (max-width: 991px) {
    padding: 80px 20px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  max-width: 100%;
  width: 1536px;
  padding: 0 80px 82px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 991px) {
    padding: 0 20px 60px;
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
  color: #2d3748;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #007acc, #00a0e9);
    margin: 20px auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 991px) {
    font-size: 36px;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const SectionSubtitle = styled.h3`
  color: #718096;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-top: 24px;
  line-height: 1.6;
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 48px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  padding: 60px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #007acc, #00a0e9);
  }
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 30px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 991px) {
    height: 300px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  opacity: ${props => props.$active ? 1 : 0.5};
  transform: ${props => 
    props.$active ? "scale(1) translateX(0)" : 
    props.$position < 0 ? "scale(0.9) translateX(-20px)" : "scale(0.9) translateX(20px)"};
  z-index: ${props => props.$active ? 2 : 1};
  filter: ${props => props.$active ? "none" : "brightness(0.8)"};
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => 
    props.$active 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 40%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 30%)"};
  transition: all 0.6s ease;
  border-radius: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const QuoteContent = styled.div`
  opacity: ${props => props.$animating ? 0.7 : 1};
  transform: ${props => props.$animating ? "translateY(10px)" : "translateY(0)"};
  transition: all 0.4s ease;
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 24px;
`;

const Star = styled(StarIcon)`
  color: ${props => props.$filled ? "#FFD700" : "#E2E8F0"};
  font-size: 24px;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 20px;
  color: #4a5568;
  line-height: 1.8;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  position: relative;
  margin: 0 0 32px;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const QuoteMark = styled.span`
  font-size: 48px;
  color: #007acc;
  font-family: serif;
  line-height: 0;
  position: relative;
  top: 20px;
  opacity: 0.3;
  
  &:first-child {
    margin-right: 8px;
  }
  
  &:last-child {
    margin-left: 8px;
  }
`;

const AuthorInfo = styled.div`
  margin-top: 32px;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

const AuthorName = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: #2d3748;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const AuthorTitle = styled.p`
  font-size: 16px;
  color: #718096;
  margin-top: 4px;
  font-family: 'Open Sans', sans-serif;
  
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

const ControlsContainer = styled.div`
  margin-top: 40px;
`;

const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavButton = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  color: #4a5568;
  
  &:hover {
    background-color: #007acc;
    color: white;
    transform: scale(1.1);
    border-color: #007acc;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    font-size: 24px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
  justify-content: center;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$active ? "#007acc" : "#E2E8F0"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.$active ? "#007acc" : "#CBD5E0"};
    transform: scale(1.2);
  }
`;

export default Testimonials;