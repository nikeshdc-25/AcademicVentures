import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import ServiceSection from "../components/ServicesSection";
import StatSection from "../components/StatSection";
import UniversityPartners from "../components/UniversityPartners";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ProgressButton from "../components/ProgressButton";

const HomepageContainer = styled("div")({
  width: "100%",
  overflowX: "hidden",
});

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomepageContainer>
      <Section1 />
      <Section2 />
      <Section3 />
      <ServiceSection />
      <StatSection />
      <UniversityPartners />
      <Testimonials />
      <FAQSection />
      <ProgressButton />
    </HomepageContainer>
  );
};

export default Homepage;
