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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
