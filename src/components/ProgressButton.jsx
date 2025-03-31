import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ProgressButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true); // Show button after scrolling 300px
    } else {
      setShowButton(false);
    }
  };

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the listener on component unmount
    };
  }, []);

  return (
    <div
      style={{
        display: showButton ? "block" : "none",
        opacity: showButton ? 1 : 0,
        transition: "opacity 0.5s ease",
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
      }}
      onClick={scrollToTop}
    >
      <IconButton
        sx={{
          backgroundColor: "#007acc",
          color: "white",
          borderRadius: "50%",
          width: 50,
          height: 50,
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#005f99",
          },
          transition: "background-color 0.3s ease",
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default ProgressButton;
