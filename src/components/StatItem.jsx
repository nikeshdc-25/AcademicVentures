"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StatItem = React.memo(({ number, text, showDivider }) => {
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    // Extract numeric value from the prop (handles cases like "2000+" or "95%")
    const numericValue = parseInt(number.replace(/\D/g, ''));
    const suffix = number.replace(/[0-9]/g, ''); // Get the suffix (+ or %)
    
    const end = numericValue;
    const duration = 7000; // Animation duration in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * end);
      
      setDisplayNumber(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [number]);

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
  align-items: flex-start;
  color: #fff;
  @media (max-width: 640px) {
    align-items: center;
    margin-bottom: 30px;
  }
`;

const StatNumber = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  line-height: 78px;
  margin-bottom: 16px;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 52px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const StatText = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  line-height: 30px;

  @media (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 20px;
  }
`;


const Divider = styled.div`
  width: 1px;
  height: 80px;
  margin: 0 40px;
  background-color: #fff;
  @media (max-width: 991px) {
    display: none;
  }
`;

export default StatItem;
