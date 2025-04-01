import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ProgressButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };
  

  return (
  <>
     {showScroll && (
        <Fab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1,
            borderRadius: 25,
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
      </>
  );
};

export default ProgressButton;
