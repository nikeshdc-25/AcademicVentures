import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Floating animation with modern cubic-bezier
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

// Modern gradient animation
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Smooth scroll animation
const smoothScroll = (direction) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(${direction === 'left' ? '-' : ''}50%); }
`;

// Modern logo with sleek hover effect
const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: grayscale(20%) brightness(0.95);
  opacity: 0.9;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: scale(1.15);
    filter: grayscale(0%) brightness(1.05);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

// Modern container with subtle gradient
const Container = styled.section`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
`;

// Content wrapper with max-width
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

// Modern heading with animated underline
const Heading = styled.h2`
  color: #1e293b;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    background-size: 200% 200%;
    animation: ${gradientFlow} 4s ease infinite;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Universities container with fade effect
const UniversitiesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 1rem 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 3;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, #f8fafc, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, transparent, #f8fafc);
  }

  @media (max-width: 768px) {
    &::before, &::after {
      width: 50px;
    }
  }
`;

// Universities rows container
const UniversitiesRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Single row with smooth scrolling
const UniversitiesRow = styled.div`
  display: flex;
  gap: 3rem;
  animation: ${props => smoothScroll(props.direction)} ${props => props.duration || '30s'} linear infinite;
  will-change: transform;
  padding: 1rem 0;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

// Floating highlight circle (appears on hover)
const HighlightCircle = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: -1;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

// Tooltip for university names
const Tooltip = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1e293b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #1e293b;
  }
`;

// Global styles with font import
const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
`;

function UniversityPartners() {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // University data
  const universities = [
    { id: 1, src: "/images/UniversityLogo/uni1.jpg", alt: "Harvard University", name: "Harvard" },
    { id: 2, src: "/images/UniversityLogo/uni2.jpg", alt: "Stanford University", name: "Stanford" },
    { id: 3, src: "/images/UniversityLogo/uni3.jpg", alt: "Massachusetts Institute of Technology", name: "MIT" },
    { id: 4, src: "/images/UniversityLogo/uni4.jpg", alt: "University of Cambridge", name: "Cambridge" },
    { id: 5, src: "/images/UniversityLogo/uni5.jpg", alt: "University of Oxford", name: "Oxford" },
    { id: 6, src: "/images/UniversityLogo/uni6.jpg", alt: "ETH Zurich", name: "ETH Zurich" },
    { id: 7, src: "/images/UniversityLogo/uni7.jpg", alt: "Imperial College London", name: "Imperial" },
    { id: 8, src: "/images/UniversityLogo/uni8.jpg", alt: "University of Chicago", name: "UChicago" },
    { id: 9, src: "/images/UniversityLogo/uni9.jpg", alt: "Yale University", name: "Yale" },
    { id: 10, src: "/images/UniversityLogo/uni10.jpg", alt: "Princeton University", name: "Princeton" },
    { id: 11, src: "/images/UniversityLogo/uni11.jpg", alt: "Columbia University", name: "Columbia" },
    { id: 12, src: "/images/UniversityLogo/uni12.jpg", alt: "University of Pennsylvania", name: "Penn" },
    { id: 12, src: "/images/UniversityLogo/uni13.jpg", alt: "University of Pennsylvania", name: "Penn" },
    { id: 12, src: "/images/UniversityLogo/uni14.jpg", alt: "University of Pennsylvania", name: "Penn" },
    { id: 12, src: "/images/UniversityLogo/uni15.jpg", alt: "University of Pennsylvania", name: "Penn" },
    { id: 12, src: "/images/UniversityLogo/uni16.jpg", alt: "University of Pennsylvania", name: "Penn" },

  ];

  const rows = [
    { universities: [...universities, ...universities], direction: 'left', duration: '15s' },
  ];

  // Handle mouse move for highlight effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container 
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <ContentWrapper>
          <Heading>Global University Partners</Heading>
          
          <UniversitiesContainer>
            <UniversitiesRows>
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ position: 'relative' }}>
                  <HighlightCircle 
                    style={{
                      left: `${mousePosition.x - 80}px`,
                      top: `${mousePosition.y - 80}px`,
                      opacity: hoveredLogo ? 1 : 0,
                    }}
                  />
                  <UniversitiesRow 
                    direction={row.direction} 
                    duration={row.duration}
                  >
                    {row.universities.map((logo, logoIndex) => (
                      <div 
                        key={`${logo.id}-${rowIndex}-${logoIndex}`}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setHoveredLogo(logo.id)}
                        onMouseLeave={() => setHoveredLogo(null)}
                      >
                        <LogoImage
                          src={logo.src}
                          alt={logo.alt}
                        />
                        <Tooltip style={{ opacity: hoveredLogo === logo.id ? 1 : 0 }}>
                          {logo.name}
                        </Tooltip>
                      </div>
                    ))}
                  </UniversitiesRow>
                </div>
              ))}
            </UniversitiesRows>
          </UniversitiesContainer>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default UniversityPartners;