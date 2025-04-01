import HeaderNav from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <HeaderNav />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
