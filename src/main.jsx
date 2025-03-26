import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

// Create a theme using MUI's `createTheme` function
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

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
