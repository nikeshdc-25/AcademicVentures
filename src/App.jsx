import HeaderNav from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <HeaderNav />
      <Outlet/>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
