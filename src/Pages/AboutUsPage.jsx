"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
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
import { useNavigate } from "react-router-dom";
import BookCounselling from "../components/BookCounselling";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AboutUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const animationRef = useRef(null);
  const duration = 2000;
  const containerRef = useRef(null);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Track cursor position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize particles
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Counter animation
  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedValues([
        Math.floor(progress * 1000),
        Math.floor(progress * 10),
        Math.floor(progress * 98),
        Math.floor(progress * 20),
      ]);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Static data
  const teamMembers = React.useMemo(
    () => [
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
    ],
    []
  );

  const stats = React.useMemo(
    () => [
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
    ],
    []
  );

  const values = React.useMemo(
    () => [
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
    ],
    []
  );

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        overflowX: "hidden",
        position: "relative",
      }}
      ref={containerRef}
    >
      {/* Floating Particles Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#1976d2",
              },
              links: {
                color: "#1976d2",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </Box>

      {/* Hero Section with Animated Background */}
      <Box
        sx={{
          position: "relative",
          height: isMobile ? "60vh" : "90vh",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(25, 118, 210, 0.5), rgba(33, 150, 243, 0.5))",
            zIndex: 1,
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            scale: 1.05,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Elements */}
        <motion.div
          style={{
            position: "absolute",
            top: "15%",
            left: "15%",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            boxShadow: "0 8px 30px rgba(7, 81, 255, 0.96)",
            zIndex: 2,
          }}
          animate={{
            x: [-50, -10, -50],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            boxShadow: "0 8px 30px rgba(255, 7, 7, 0.8)",
            zIndex: 2,
          }}
          animate={{
            x: [50, -50, 50],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant={isMobile ? "h3" : "h1"}
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                mb: 3,
                background:
                  "linear-gradient(90deg,rgb(255, 255, 255),rgb(236, 236, 236))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Your Gateway to Global Education
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="p"
                sx={{
                  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Empowering students to achieve their academic dreams since 2010
              </Typography>
            </motion.div>
            {/* Animated Orbiting Particle */}
            <motion.div
              style={{
                position: "absolute",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                boxShadow: "0 0 15px rgba(79, 172, 254, 0.7)",
                zIndex: 1,
                pointerEvents: "none",
              }}
              animate={{
                x: [0, 40, 0, -40, 0],
                y: [-40, 0, 40, 0, -40],
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 1, 0.8, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                x: [0, 60, 0, -60, 0],
                y: [-60, 0, 60, 0, -60],
                transition: { duration: 2 },
              }}
            />

            {/* Button with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ position: "relative" }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsModalOpen(true)}
                sx={{
                  px: 5,
                  py: 2,
                  fontWeight: "bold",
                  borderRadius: "50px",
                  boxShadow: "0 8px 30px rgba(255, 193, 7, 0.4)",
                  fontSize: "1.1rem",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transition: "all 0.5s ease",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                }}
              >
                Book Free Counseling
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 10, position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #2196f3)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Founded in 2010, Academic Ventures began as a small consultancy
                with a big vision - to make world-class education accessible to
                students from all backgrounds.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                What started as a two-person operation has now grown into a
                full-service education consultancy with offices in 5 countries
                and a team of dedicated professionals.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                We've helped over 10,000 students secure admissions to top
                universities worldwide, with scholarships totaling more than $50
                million.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                  height: "100%",
                  position: "relative",
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
                  alt="Our team working together"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 8 }}
            >
              Why Choose Academic Ventures?
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      height: "100%",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                        bgcolor: "rgba(255,255,255,0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "white",
                        mb: 2,
                        display: "inline-flex",
                        p: 1.5,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.2)",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h2"
                      component="div"
                      fontWeight="bold"
                      sx={{
                        mb: 1,
                        background: "linear-gradient(90deg, #ffffff, #e0f7fa)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {index === 2
                        ? `${animatedValues[index]}%`
                        : `${animatedValues[index]}${stat.value.slice(-1)}`}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission/Vision Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />
                <Typography
                  variant="h4"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    mb: 3,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  To break down barriers to quality education by providing
                  personalized guidance, transparent processes, and end-to-end
                  support that empowers students to achieve their academic and
                  career aspirations.
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    width: "100%",
                    height: "250px",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
                    alt="Our mission"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -50,
                    left: -50,
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    bgcolor: "secondary.light",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />
                <Typography
                  variant="h4"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    mb: 3,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  To become the most trusted global education consultancy,
                  recognized for our ethical practices, exceptional success
                  rates, and transformative impact on students' lives across the
                  world.
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    width: "100%",
                    height: "250px",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                    alt="Our vision"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
              sx={{
                mb: 8,
                background: "linear-gradient(90deg, #1976d2, #2196f3)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Meet Our Expert Team
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 300,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        loading="lazy"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.6), transparent 70%)",
                          zIndex: 1,
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ color: "text.primary" }}
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                      >
                        {member.bio}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        p: 2,
                        textAlign: "center",
                        background:
                          "linear-gradient(to right, #f5f7fa, #ffffff)",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{
                            borderRadius: "50px",
                            fontWeight: "bold",
                          }}
                        >
                          View Profile
                        </Button>
                      </motion.div>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              mb: 8,
              background: "linear-gradient(90deg, #1976d2, #2196f3)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Core Values
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Typography variant="h1" sx={{ mb: 2, lineHeight: 1 }}>
                        {value.icon}
                      </Typography>
                    </motion.div>
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(25, 118, 210, 0.9), rgba(33, 150, 243, 0.9))",
          color: "white",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 0,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 0,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                mb: 3,
                background: "linear-gradient(90deg, #ffffff, #e0f7fa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Ready to Begin Your Academic Journey?
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 6,
                color: "rgba(255,255,255,0.9)",
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Our experts are here to guide you every step of the way
            </Typography>
          </motion.div>

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={3}
            justifyContent="center"
            sx={{ maxWidth: "800px", mx: "auto" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Phone sx={{ fontSize: 20 }} />}
                onClick={() => setIsModalOpen(true)}
                sx={{
                  borderRadius: "50px",
                  px: 5,
                  py: 2,
                  fontWeight: 700,
                  boxShadow: "0 8px 30px rgba(255, 193, 7, 0.5)",
                  fontSize: "1.1rem",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    transition: "all 0.7s ease",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                }}
              >
                Book Free Counseling
              </Button>
            </motion.div>

            <AnimatePresence>
              {isModalOpen && (
                <BookCounselling
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  px: 5,
                  py: 2,
                  fontWeight: 700,
                  borderRadius: "50px",
                  borderWidth: "2px",
                  fontSize: "1.1rem",
                  "&:hover": {
                    borderWidth: "2px",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Contact Our Team
              </Button>
            </motion.div>
          </Stack>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={6}>
            {[
              {
                icon: <Email color="primary" sx={{ fontSize: 40 }} />,
                title: "Email Us",
                items: [
                  "info@academicventures.com",
                  "admissions@academicventures.com",
                ],
              },
              {
                icon: <Phone color="primary" sx={{ fontSize: 40 }} />,
                title: "Call Us",
                items: ["+977 986-0671321 (Phone)", "01-4321218 (Tel)"],
              },
              {
                icon: <LocationOn color="primary" sx={{ fontSize: 40 }} />,
                title: "Visit Us",
                items: ["801/20/ Thirbom Sadak", "Baluwatar, Kathmandu - 4"],
              },
            ].map((contact, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 3,
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{contact.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      {contact.title}
                    </Typography>
                    {contact.items.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 1,
                          color: "text.secondary",
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
