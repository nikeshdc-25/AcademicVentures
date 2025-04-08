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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 900px by default, but we'll adjust

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Quick Links data
  const quickLinks = [
    { 
      title: "Home", 
      onClick: () => {
        navigate("/");
        scrollToTop();
      } 
    },
    { 
      title: "About Us", 
      onClick: () => navigate("/aboutus") 
    },
    { 
      title: "Services", 
      onClick: () => navigate("/services") 
    },
    { 
      title: "Contact", 
      onClick: () => navigate("/contact") 
    },
    {
      title: "Test Preparation",
      onClick: () => navigate("/test-prep") 
    },
  ];

  const services = [
    { title: "Visa Assistance", onClick: () => navigate("/services/visa-assistance") },
    { title: "Language Programs", onClick: () => navigate("/services/language-programs") },
    { title: "Partner Universities", onClick: () => navigate("/services/partner-universities") },
    { title: "Study Abroad", onClick: () => navigate("/services/study-abroad") },
    { title: "Pre-Departure Support", onClick: () => navigate("/services/pre-departure-support") },
    { title: "Career Counselling", onClick: () => navigate("/services/career-counselling") },
    { title: "Financial Aids", onClick: () => navigate("/services/scholarship-financial-aid") },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon />, url: "https://www.facebook.com/people/Academic-Ventures-International/61557008751706/" },
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/your-profile" }, // Updated with your LinkedIn
    { icon: <InstagramIcon />, url: "https://osom.one/" },
    { icon: <YouTubeIcon />, url: "https://osom.one/" },
  ];
  
  let currentYear = new Date().getFullYear();

  return (
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
          height: "auto",
          pb: 4,
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
                comprehensive study abroad guidance to help students
                achieve their educational dreams. Our dedicated team
                is committed to offering personalized support with a
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
                  link.onClick ? (
                    <Typography 
                      key={index}
                      variant="body1" 
                      sx={{ 
                        color: "white",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline"
                        }
                      }}
                      onClick={link.onClick}
                    >
                      {link.title}
                    </Typography>
                  ) : (
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
                  )
                ))}
              </Stack>
            </Grid>

            {/* Our Services section - hidden on mobile */}
            <Grid item xs={12} md={2} sx={{ display: { xs: "none", md: "block" } }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Our Services
              </Typography>

              <Stack spacing={2}>
                {services.map((service, index) => (
                  <Typography 
                    key={index}
                    variant="body1" 
                    sx={{ 
                      color: "white",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline"
                      }
                    }}
                    onClick={service.onClick}
                  >
                    {service.title}
                  </Typography>
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
                textAlign: "center",
              }}
            >
               <Link
            href="https://www.linkedin.com/in/nikeshdc/"
            target="_blank"
            sx={{color: 'white',
              "&:hover": {
                textDecoration: 'none',
              },
            }}
          >
              © </Link> {currentYear} Academic Ventures. All Rights Reserved.
            </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;