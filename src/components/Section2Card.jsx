import React from "react";
import styled from "styled-components";

function Section2Card({
  imageUrl,
  imageHeight = "520px",
  badgeText,
  title,
  description,
  additionalContent,
  overlayPosition = "bottom",
  overlayTop,
}) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="" height={imageHeight} />
      <BadgeWrapper>
        <Badge>{badgeText}</Badge>
      </BadgeWrapper>

      <OverlayWrapper position={overlayPosition} top={overlayTop}>
        <OverlayContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </OverlayContent>
      </OverlayWrapper>

      {additionalContent && additionalContent}
    </CardContainer>
  );
}

const CardContainer = styled.article`
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: ${(props) => props.height || "520px"};
  object-fit: cover;
  border-radius: 30px;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Badge = styled.div`
  color:rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 9px 33px;
  border-radius: 60px;
  border-width: 1px;
  border-color: "#ccc";
  background-color: transparent;
`;

const OverlayWrapper = styled.div`
  position: absolute;
  ${(props) =>
    props.position === "bottom"
      ? `
    bottom: 10px;
    left: 19px;
    right: 19px;
  `
      : `
     bottom: 10px;
    left: 16px;
    right: 16px;
  `}
`;

const OverlayContent = styled.div`
  padding: 29px 24px;
  border-radius: 20px;
  background-color: rgba(153, 153, 153, 0.3);
  backdrop-filter: blur(2.5px);
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
`;

export default Section2Card;
