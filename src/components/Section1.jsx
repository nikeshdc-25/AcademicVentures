import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Section1 = () => {
  // Service details for the card
  const serviceDetails = {
    title: "Explore Our Services",
    description: [
      "With offerings like visa assistance,",
      "scholarship guidance, and comprehensive",
      "test preparation for PTE, SAT, IELTS, and",
      "more, we ensure every aspect of your",
      "education abroad is covered.",
    ],
    buttonText: "View Services",
    buttonLink: "https://osom.one/services",
  };

  // Main content text
  const mainContent = {
    heading: [
      { text: "Transform Your", color: "text.primary" },
      { text: "Future ", color: "text.primary" },
      { text: "with", color: "primary" },
      { text: "Technimus", color: "primary" },
      { text: "Consultancy", color: "primary" },
      { text: " Your", color: "text.primary" },
      { text: "Trusted Partner in", color: "text.primary" },
      { text: "Study Abroad", color: "primary" },
      { text: "Opportunities", color: "primary" },
    ],
    description:
      "Unlock pathways to educational excellence with personalized guidance tailored to your aspirations. Our experienced team connects you with top universities worldwide, ensuring your study abroad journey is smooth and successful.",
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1884,
        height: 951,
        bgcolor: "#efefed",
        borderRadius: "35px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative", mt: -15, mx: 2.5, height: 1313 }}>
        {/* Background elements */}
        <Box
          sx={{
            width: 209,
            height: 209,
            position: "absolute",
            top: 353,
            left: 0,
            bgcolor: "#e3f2fd",
            borderRadius: "50%",
          }}
        />

        <Box
          sx={{
            width: 326,
            height: 1276,
            position: "absolute",
            top: 19,
            left: 1126,
            bgcolor: "#30302b",
            transform: "rotate(-18.74deg)",
            opacity: 0.03,
          }}
        />

        <Box
          sx={{
            width: 315,
            height: 315,
            position: "absolute",
            top: 358,
            left: 593,
            bgcolor: "#007acc",
            borderRadius: "50%",
            filter: "blur(16px)",
            opacity: 0.3,
          }}
        />

        {/* Main heading */}
        <Stack
          sx={{
            width: 657,
            position: "absolute",
            top: 249,
            left: 172,
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold", lineHeight: 1.2 }}>
            {mainContent.heading.map((item, index) => (
              <React.Fragment key={index}>
                <Box component="span" sx={{ color: item.color }}>
                  {item.text}
                </Box>
                {[0, 1, 3, 4, 6, 7].includes(index) && <br />}
              </React.Fragment>
            ))}
          </Typography>
        </Stack>

        {/* Main image */}
        <Box
          sx={{
            width: 1021,
            height: 800,
            position: "absolute",
            top: 259,
            left: 853,
            borderRadius: "35px",
            backgroundImage: "url(/section1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Services card */}
        <Paper
          sx={{
            width: 420,
            height: 286,
            position: "absolute",
            top: 737,
            left: 1414,
            bgcolor: "rgba(160, 160, 160, 0.3)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(1.25px) brightness(100%)",
            p: 3,
          }}
        >
          <Typography variant="h4" color="white" sx={{ mb: 1 }}>
            {serviceDetails.title}
          </Typography>

          <Typography color="white" sx={{ mb: 3 }}>
            {serviceDetails.description.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              component={Link}
              href={serviceDetails.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 28,
                pl: 2,
                pr: 0.5,
                py: 0.5,
                textTransform: "none",
                fontSize: 18,
              }}
              endIcon={
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowForwardIcon
                    color="primary"
                    sx={{ width: 13.5, height: 19 }}
                  />
                </Box>
              }
            >
              {serviceDetails.buttonText}
            </Button>
          </Box>
        </Paper>

        {/* Description text */}
        <Box
          sx={{
            maxWidth: 620,
            width: 620,
            position: "absolute",
            top: 864,
            left: 172,
          }}
        >
          <Typography sx={{ fontSize: 18, lineHeight: 1.75 }}>
            {mainContent.description}
          </Typography>
        </Box>

        {/* Call to action button */}
        <Button
          component={Link}
          href="https://osom.one/contact"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: 1012,
            left: 172,
            borderRadius: 28,
            pl: 2.5,
            pr: 1.25,
            py: 1.25,
            textTransform: "none",
            fontSize: 18,
          }}
          startIcon={<PhoneIcon />}
          endIcon={
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIcon
                color="primary"
                sx={{ width: 13.5, height: 19 }}
              />
            </Box>
          }
        >
          Schedule Your Free Counseling
        </Button>
      </Box>
    </Box>
  );
};

export default Section1;
