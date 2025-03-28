import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import "./App.css";
import HeaderNav from "./components/Header";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ServiceSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <HeaderNav />
      <Section1 />
      <Section2 />
      <Section3 />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default App;
