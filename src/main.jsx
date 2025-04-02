import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Homepage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicePage from "./Pages/ServicePage";
import UKPage from "./Pages/UKPage";
import MaltaPage from "./Pages/MaltaPage";
import RomaniaPage from "./Pages/RomaniaPage";
import USPage from "./Pages/USPage";
import MalaysiaPage from "./Pages/MalaysiaPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007acc",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />

      <Route path="contact" element={<ContactPage />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      <Route path="/uk" element={<UKPage />} />
      <Route path="/usa" element={<USPage />} />
      <Route path="/malta" element={<MaltaPage />} />
      <Route path="/romania" element={<RomaniaPage />} />
      <Route path="/malaysia" element={<MalaysiaPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
