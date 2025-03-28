import React from "react";
import styled from "styled-components";

// Logo component defined within the same file
const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  object-fit: contain;
  transition: 1500ms;
  &:hover {
    transform: scale(1.2);
  }
`;

const UniversityLogo = ({ src, altText }) => {
  return <LogoImage src={src} alt={altText} />;
};

const Container = styled.section`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 48px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding: 14px 80px 14px 80px;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 122, 204, 1);
  border-radius: 60px;
  font-family: "Open Sans", sans-serif;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 991px) {
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

const LogosContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 10px solid rgba(0, 122, 204, 1);
  padding-top: 2rem;
  border-radius: 10%;
`;

const LogosRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LogosRow = styled.div`
  display: flex;
  animation: scrollLeftToRight 30s linear infinite;
  gap: 80px;
`;

const GlobalStyles = styled.div`
  @keyframes scrollLeftToRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

function UniversityPartners() {
  const firstRowLogos = [
    { id: 1, src: "/images/logos/uni1.jpg", alt: "Harvard University" },
    { id: 2, src: "/images/logos/uni2.jpg", alt: "Stanford University" },
    { id: 3, src: "/images/logos/uni3.jpg", alt: "MIT" },
    { id: 4, src: "/images/logos/uni4.jpg", alt: "MIT" },
    { id: 5, src: "/images/logos/uni5.jpg", alt: "MIT" },
    { id: 6, src: "/images/logos/uni6.jpg", alt: "MIT" },
    { id: 7, src: "/images/logos/uni7.jpg", alt: "MIT" },
    { id: 8, src: "/images/logos/uni8.jpg", alt: "MIT" },
    { id: 9, src: "/images/logos/uni9.jpg", alt: "Harvard University" },
    { id: 10, src: "/images/logos/uni10.jpg", alt: "Harvard University" },
    { id: 11, src: "/images/logos/uni11.jpg", alt: "Harvard University" },
    { id: 12, src: "/images/logos/uni12.jpg", alt: "Harvard University" },
    { id: 13, src: "/images/logos/uni13.jpg", alt: "Harvard University" },
    { id: 14, src: "/images/logos/uni14.jpg", alt: "Harvard University" },
    { id: 15, src: "/images/logos/uni15.jpg", alt: "Harvard University" },
    { id: 16, src: "/images/logos/uni16.jpg", alt: "Harvard University" },
  ];

  // Duplicate logos to create continuous scrolling effect
  const duplicatedLogos = [...firstRowLogos, ...firstRowLogos];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <Container>
        <ContentWrapper>
          <Heading>Our University Partners</Heading>
          <LogosContainer>
            <LogosRows>
              <LogosRow>
                {duplicatedLogos.map((logo) => (
                  <UniversityLogo
                    key={logo.id}
                    src={logo.src}
                    altText={logo.alt}
                  />
                ))}
              </LogosRow>
            </LogosRows>
          </LogosContainer>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default UniversityPartners;
