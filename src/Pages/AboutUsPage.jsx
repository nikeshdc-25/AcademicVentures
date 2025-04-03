import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import {
  School,
  Public,
  EmojiEvents,
  Person,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import BookCounselling from "../components/BookCounselling";

const AboutUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const animationRef = useRef(null);
  const duration = 3000; // Animation duration in ms

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const animate = (timestamp) => {
      const startTime = performance.now();
      
      const frame = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setAnimatedValues([
          Math.floor(progress * 1000), // 1000+
          Math.floor(progress * 10),  // 10+
          Math.floor(progress * 98),  // 98%
          Math.floor(progress * 20)   // 20+
        ]);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(frame);
        }
      };

      animationRef.current = requestAnimationFrame(frame);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    };

    // Start animation when component mounts
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Education specialist with 15+ years in international student counseling.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Head of Admissions",
      bio: "Expert in university admissions processes across 20+ countries.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop",
    },
    {
      name: "Priya Patel",
      role: "Test Prep Specialist",
      bio: "IELTS/TOEFL expert with 98% student satisfaction rate.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop",
    },
    {
      name: "David Wilson",
      role: "Visa Consultant",
      bio: "Successfully processed 1000+ student visas with 95% approval rate.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
    },
  ];

  const stats = [
    {
      value: "1000+",
      label: "Students Helped",
      icon: <Person fontSize="large" />,
    },
    {
      value: "10+",
      label: "Countries Covered",
      icon: <Public fontSize="large" />,
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <EmojiEvents fontSize="large" />,
    },
    {
      value: "20+",
      label: "Partner Institutions",
      icon: <School fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: isMobile ? "60vh" : "80vh",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/aboutus/aboutbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              animation: "fadeIn 1s ease-in",
            }}
          >
            Your Gateway to Global Education
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="p"
            sx={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Empowering students to achieve their academic dreams since 2010
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
            sx={{
                px: 4,
                py: 2,
                fontWeight: "bold",
                borderRadius: "50px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
          >
            Book Free Counseling
          </Button>
          <BookCounselling
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              Our Story
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Founded in 2010, Academic Ventures began as a small consultancy
              with a big vision - to make world-class education accessible to
              students from all backgrounds.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              What started as a two-person operation has now grown into a
              full-service education consultancy with offices in 5 countries and
              a team of dedicated professionals.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              We've helped over 10,000 students secure admissions to top
              universities worldwide, with scholarships totaling more than $50
              million.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                height: "100%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
                alt="Our team working together"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose Academic Ventures?
          </Typography>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <Box sx={{ color: "white", mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h3" component="div" fontWeight="bold">
                    {index === 2 ? `${animatedValues[index]}%` : `${animatedValues[index]}${stat.value.slice(-1)}`}
                  </Typography>
                  <Typography variant="h6">{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission/Vision Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                To break down barriers to quality education by providing
                personalized guidance, transparent processes, and end-to-end
                support that empowers students to achieve their academic and
                career aspirations.
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  height: "200px",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
                  alt="Our mission"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                To become the most trusted global education consultancy,
                recognized for our ethical practices, exceptional success rates,
                and transformative impact on students' lives across the world.
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  height: "200px",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                  alt="Our vision"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            color="primary"
            sx={{ mb: 6 }}
          >
            Meet Our Expert Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      textAlign="center"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ borderRadius: "50px" }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          color="primary"
          sx={{ mb: 6 }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Integrity",
              description:
                "We maintain the highest ethical standards in all our interactions.",
              icon: "🤝",
            },
            {
              title: "Excellence",
              description:
                "We strive for exceptional quality in every service we provide.",
              icon: "⭐",
            },
            {
              title: "Empathy",
              description:
                "We understand each student's unique needs and aspirations.",
              icon: "❤️",
            },
            {
              title: "Innovation",
              description:
                "We continuously improve our services with creative solutions.",
              icon: "💡",
            },
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {value.icon}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                >
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(25, 118, 210, 0.9), rgba(25, 118, 210, 0.9)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            Ready to Begin Your Academic Journey?
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4 }}>
            Our experts are here to guide you every step of the way
          </Typography>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Phone sx={{ fontSize: 18 }} />}
              onClick={() => setIsModalOpen(true)}
              sx={{
                ml: { xs: 1, md: 3 },
                borderRadius: 28,
                textTransform: "none",
                px: { xs: 2, md: 3 },
                py: 1,
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(0, 122, 204, 0.3)",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0, 122, 204, 0.4)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Book Free Counseling
            </Button>
            <BookCounselling
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 2,
                fontWeight: "bold",
                borderRadius: "50px",
                borderWidth: "2px",
                "&:hover": { borderWidth: "2px" },
              }}
            >
              Contact Our Team
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email color="primary" sx={{ mr: 2 }} />
              <Typography variant="h6">Email Us</Typography>
            </Box>
            <Typography variant="body1">info@academicventures.com</Typography>
            <Typography variant="body1">
              admissions@academicventures.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone color="primary" sx={{ mr: 2 }} />
              <Typography variant="h6">Call Us</Typography>
            </Box>
            <Typography variant="body1">+977 986-0671321 (Phone)</Typography>
            <Typography variant="body1">01-4321218 (Tel)</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography variant="h6">Visit Us</Typography>
            </Box>
            <Typography variant="body1">801/20/ Thirbom Sadak</Typography>
            <Typography variant="body1">Baluwatar, Kathmandu - 4</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
