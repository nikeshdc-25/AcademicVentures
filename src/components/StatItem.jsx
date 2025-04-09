"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StatItem = React.memo(({ number, text, showDivider = false, animate = false }) => {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!animate || hasAnimated) return;

    const numericValue = parseInt(number.replace(/\D/g, ''));
    const suffix = number.replace(/[0-9]/g, '');
    
    const end = numericValue;
    const duration = 2000; // duration of animation
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * end);
      
      setDisplayNumber(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [number, animate, hasAnimated]);

  return (
    <>
      <StatContainer>
        <StatNumber>{displayNumber}</StatNumber>
        <StatText>{text}</StatText>
      </StatContainer>
      {showDivider && <Divider />}
    </>
  );
});

StatItem.displayName = "StatItem";

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 0 10px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 640px) {
    margin-bottom: 0px;
    padding: 5px;
  }
`;

const StatNumber = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 78px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #007acc, #00b4ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(0, 122, 204, 0.3);

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 52px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const StatText = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  max-width: 150px;

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 80px;
  margin: 0 20px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent);

  @media (max-width: 991px) {
    display: none;
  }
`;

export default StatItem;
