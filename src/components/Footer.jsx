import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  // Quick Links data
  const quickLinks = [
    { title: "Home", url: "https://osom.one/" },
    { title: "About Us", url: "https://osom.one/about-us" },
    { title: "Services", url: "https://osom.one/services" },
    {
      title: "Student Success Stories",
      url: "https://osom.one/student-success-stories",
    },
    { title: "Test Preparation", url: "https://osom.one/test-preparation" },
    { title: "Contact", url: "https://osom.one/contact" },
    {
      title: "Partner Universities",
      url: "https://osom.one/partner-universities",
    },
  ];

  // Our Capabilities data
  const capabilities = [
    { title: "Visa Assistance", url: "https://osom.one/" },
    { title: "University Applications", url: "https://osom.one/" },
    { title: "Scholarship Guidance", url: "https://osom.one/" },
    { title: "Career Counseling", url: "https://osom.one/" },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon />, url: "https://www.facebook.com/people/Academic-Ventures-International/61557008751706/" },
    { icon: <LinkedInIcon />, url: "https://osom.one/" },
    { icon: <InstagramIcon />, url: "https://osom.one/" },
    { icon: <YouTubeIcon />, url: "https://osom.one/" },
  ];
  let currentYear = new Date().getFullYear();

  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", pt: 22.5 }}>
        {/* Blue accent bar */}
        <Box
          sx={{
            position: "absolute",
            width: "98%",
            height: 200,
            top: 48,
            left: 38,
            bgcolor: "#007acc",
            borderRadius: "55px 35px 0 0",
            transform: "rotate(-3deg)",
          }}
        />

        {/* Main dark background */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: 200,
            top: 64,
            left: 0,
            bgcolor: "#161616",
            borderRadius: "55px 35px 0 0",
            transform: "rotate(-3deg)",
          }}
        />

        {/* Footer content */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            bgcolor: "#161616",
            height: 485,
          }}
        >
          <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Grid container spacing={4}>
              {/* Company info section */}
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Academic Ventures
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    mb: 4,
                    maxWidth: 418,
                  }}
                >
                  At <i>Academic Ventures</i>, we specialize in providing
                  <br />
                  comprehensive study abroad guidance to help students
                  <br />
                  achieve their educational dreams. Our dedicated team
                  <br />
                  is committed to offering personalized support with a
                  <br />
                  focus on success.
                </Typography>

                <Stack spacing={2}>
                  <Link
                    href="https://osom.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <PhoneIcon sx={{ color: "white" }} />
                      <Typography variant="body1" sx={{ color: "white" }}>
                      +977 9860671321
                      </Typography>
                    </Stack>
                  </Link>

                  <Link
                    href="https://osom.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <EmailIcon sx={{ color: "white" }} />
                      <Typography variant="body1" sx={{ color: "white" }}>
                      info@avi.edu.np
                      </Typography>
                    </Stack>
                  </Link>

                  <Link
                    href="https://osom.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <LocationOnIcon sx={{ color: "white" }} />
                      <Typography variant="body1" sx={{ color: "white" }}>
                        801/20/ Thirbom Sadak Baluwatar, Kathmandu
                      </Typography>
                    </Stack>
                  </Link>
                </Stack>
              </Grid>

              {/* Quick Links section */}
              <Grid item xs={12} md={2}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Quick Links
                </Typography>

                <Stack spacing={2}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      <Typography variant="body1" sx={{ color: "white" }}>
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Our Capabilities section */}
              <Grid item xs={12} md={2}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Our Capabilities
                </Typography>

                <Stack spacing={2}>
                  {capabilities.map((capability, index) => (
                    <Link
                      key={index}
                      href={capability.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      <Typography variant="body1" sx={{ color: "white" }}>
                        {capability.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Subscribe and Social Media section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ position: "relative", mb: 4 }}>
                  <TextField
                    fullWidth
                    placeholder="Your Email..."
                    variant="outlined"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.07)",
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                        color: "white",
                        height: 60,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      position: "absolute",
                      right: 5,
                      top: 5,
                      bgcolor: "#007acc",
                      borderRadius: "30px",
                      height: 50,
                      width: 130,
                      textTransform: "none",
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Follow Us
                </Typography>

                <Stack direction="row" spacing={2}>
                  {socialMedia.map((social, index) => (
                    <IconButton
                      key={index}
                      component={Link}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "#010202",
                        border: "1px solid white",
                        color: "white",
                        width: 50,
                        height: 50,
                        "&:hover": {
                          bgcolor: "#333",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Grid>
            </Grid>

            {/* Copyright section */}
            <Divider sx={{ mt: 6, bgcolor: "rgba(255, 255, 255, 0.2)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                py: 3,
              }}
            >
              © {currentYear} Academic Ventures. All Rights Reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
