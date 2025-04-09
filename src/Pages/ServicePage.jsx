import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Grow,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ExpandMore,
  School,
  Language,
  Assignment,
  FlightTakeoff,
  AccountBalance,
  MonetizationOn,
  Work,
  CheckCircle,
  Star,
  Public,
  TrendingUp,
  Quiz,
} from "@mui/icons-material";
import BookCounselling from "../components/BookCounselling";
import visaImage from '/services/visa.jpg';
import languageImage from '/services/languageprogram.jpg';
import partnerUniImage from '/services/partneruni.jpg';
import testImage from '/services/test.jpg';
import universityselectImage from '/services/universityselection.jpg';
import studyabroadImage from '/services/studyabroad.jpg';
import predepartureImage from '/services/predeparture.jpg';
import careerImage from '/services/career.jpg';
import financeImage from '/services/finance.jpg';

// Animation variants
const cardVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  initial: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  initial: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const services = [
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    icon: <Assignment fontSize="large" />,
    image: visaImage,
    description:
      "Our comprehensive visa assistance program ensures you have the highest chance of approval with personalized guidance through every step of the complex visa application process.",
    details: [
      "Complete document checklist preparation tailored to your destination country",
      "Visa application form assistance with error-proof review",
      "Mock interview preparation with former visa officers",
      "Financial documentation guidance including bank statements and sponsorship letters",
      "Post-approval support including visa stamping guidance",
      "Emergency assistance for last-minute applications",
    ],
    stats: "98% success rate across all countries",
    benefits: [
      "Dedicated visa consultant assigned to your case",
      "Priority appointment booking assistance",
      "Continuous status updates throughout the process",
    ],
  },
  {
    id: "language-programs",
    title: "Language Programs",
    icon: <Language fontSize="large" />,
    image: languageImage,
    description:
      "Enhance your language skills with our tailored language programs designed for students, professionals, and travelers.",
    details: [
      "Customized courses for beginners to advanced levels",
      "IELTS, TOEFL, and other exam preparation options",
      "Interactive learning with native-speaking instructors",
      "Flexible online and offline learning options",
      "Certification upon course completion",
    ],
    stats: "Over 10,000 students trained worldwide",
    benefits: [
      "One-on-one tutoring available",
      "Access to extensive digital learning materials",
      "Personalized progress tracking and support",
    ],
  },
  {
    id: "partner-universities",
    title: "Partner Universities",
    icon: <School fontSize="large" />,
    image: partnerUniImage,
    description:
      "Gain access to a network of top universities worldwide through our exclusive partnerships, ensuring quality education and seamless admission processes.",
    details: [
      "Direct admission pathways with reduced requirements",
      "Scholarship opportunities for eligible students",
      "Exclusive tie-ups with globally ranked institutions",
      "Dedicated admission support and counseling",
    ],
    stats: "100+ partner universities across 20 countries",
    benefits: [
      "Simplified application process",
      "Guaranteed seat for qualifying students",
      "Support for visa and accommodation arrangements",
    ],
  },
  {
    id: "test-preparation",
    title: "Test Preparation Courses",
    icon: <Quiz fontSize="large" />,
    image: testImage,
    description:
      "Maximize your test scores with our expert-led preparation courses for standardized exams like SAT, GRE, GMAT, IELTS, and TOEFL.",
    details: [
      "Comprehensive study materials and practice tests",
      "One-on-one coaching and group classes",
      "Mock tests with detailed performance analysis",
      "Exam-taking strategies and time management tips",
    ],
    stats: "Average score improvement of 20%",
    benefits: [
      "Flexible class schedules",
      "Access to an extensive question bank",
      "Experienced trainers with high success rates",
    ],
  },
  {
    id: "university-selection",
    title: "University Selection Assistance",
    icon: <AccountBalance fontSize="large" />,
    image: universityselectImage,
    description:
      "Find the perfect university for your aspirations with our expert guidance and customized recommendations.",
    details: [
      "Personalized shortlisting of best-fit universities",
      "Application and documentation assistance",
      "Guidance on tuition fees and scholarship opportunities",
      "Admission essay and SOP review and enhancement",
    ],
    stats: "92% admission success rate",
    benefits: [
      "Expert career counseling included",
      "Assistance with multiple university applications",
      "Direct interaction with university representatives",
    ],
  },
  {
    id: "study-abroad",
    title: "Study Abroad Services",
    icon: <Public fontSize="large" />,
    image: studyabroadImage,
    description:
      "Achieve your academic dreams by studying abroad with our end-to-end support for international education.",
    details: [
      "Comprehensive study abroad consultation",
      "Guidance on university selection and applications",
      "Assistance with student visa and immigration procedures",
      "Support for accommodation and living arrangements",
      "Cultural and academic transition guidance",
    ],
    stats: "Thousands of students successfully placed in top institutions",
    benefits: [
      "Step-by-step guidance from application to arrival",
      "Exclusive partnerships with global universities",
      "Personalized support for every stage of your journey",
    ],
  },
  {
    id: "pre-departure-support",
    title: "Pre-Departure Support",
    icon: <FlightTakeoff fontSize="large" />,
    image: predepartureImage,
    description:
      "Prepare for your journey abroad with our complete pre-departure support, covering everything from travel to cultural adaptation.",
    details: [
      "Guidance on travel arrangements and packing essentials",
      "Accommodation and local transportation setup",
      "Cultural adaptation and survival skills training",
      "Health insurance and banking setup advice",
    ],
    stats: "98% of students feel more confident after our sessions",
    benefits: [
      "Detailed checklist for a hassle-free transition",
      "Networking opportunities with fellow students",
      "24/7 emergency support upon arrival",
    ],
  },
  {
    id: "scholarship-financial-aid",
    title: "Scholarship & Financial Aid Guidance",
    icon: <MonetizationOn fontSize="large" />,
    image: financeImage,
    description:
      "Secure scholarships and financial aid options to support your education abroad with our expert guidance.",
    details: [
      "Comprehensive database of scholarships available",
      "Assistance with scholarship applications and essays",
      "Guidance on education loans and financial planning",
    ],
    stats: "Over $10 million in scholarships secured for students",
    benefits: [
      "Personalized funding strategy",
      "Access to exclusive scholarship opportunities",
      "Step-by-step loan application assistance",
    ],
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    icon: <Work fontSize="large" />,
    image: careerImage,
    description:
      "Plan your career with expert advice on choosing the right course, university, and job market opportunities.",
    details: [
      "One-on-one career consultation sessions",
      "Job market analysis and employment trends",
      "Internship and job placement assistance",
      "Resume building and interview preparation",
    ],
    stats: "85% of students land a job within 6 months of graduation",
    benefits: [
      "Industry-specific career mentoring",
      "Networking with top employers",
      "Personalized career growth roadmap",
    ],
  },
];


const ServicePage = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(serviceId || false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (serviceId) {
      setExpanded(serviceId);
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [serviceId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    navigate(isExpanded ? `/services/${panel}` : "/services");
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Enhanced Hero Section with Parallax Effect */}
      <Box
        sx={{
          backgroundImage: "linear-gradient(rgba(25, 118, 210, 0.85), rgba(25, 118, 210, 0.85)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundPosition: "center",
          color: "white",
          py: 12,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ff5722, #ff9800)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 40%)",
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              mb: 2,
              transform: "translateY(20px)",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out forwards",
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" }
              }
            }}
          >
            Our Premier Education Services
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="p"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              transform: "translateY(20px)",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            Comprehensive support for your global education journey, from initial planning to career success
          </Typography>
        </Container>
      </Box>

      {/* Services Grid with Enhanced Animations */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ 
            mb: 6, 
            textAlign: "center", 
            color: "primary.main",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #007acc, #00b4ff)",
              borderRadius: "2px"
            }
          }}
        >
          Explore Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Grow in timeout={500 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    transform: "translateY(0) scale(1)",
                    transition: "0.5s ease",
                    borderTop: "4px solid transparent",
                    "&:hover": {
                      borderTop: "5px solid",
                      borderTopColor: "primary.main",
                      ...cardVariants.hover
                    },
                    ...cardVariants.initial
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    setExpanded(service.id === expanded ? false : service.id);
                    navigate(service.id === expanded ? "/services" : `/services/${service.id}`);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      transition: "transform 5s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      transform: "scale(1)",
                      "&:hover": imageHoverVariants.hover,
                      ...imageHoverVariants.initial
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          mr: 2,
                          width: 48,
                          height: 48,
                          transition: "all 2s ease",
                          transform: hoveredCard === index ? "rotate(360deg)" : "rotate(0)"
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Typography variant="h6" component="h3" fontWeight="bold">
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                      <Star color="warning" sx={{ mr: 1 }} />
                      <Typography variant="caption" color="text.secondary" fontWeight="bold">
                        {service.stats}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enhanced Services Details Accordion */}
      <Container maxWidth={false} sx={{ width: "95%", pb: 8 }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          {services.map((service) => (
            <Accordion
              key={service.id}
              expanded={expanded === service.id}
              onChange={handleChange(service.id)}
              sx={{
                mb: 3,
                borderRadius: "12px !important",
                overflow: "hidden",
                boxShadow: theme.shadows[6],
                "&:before": { display: "none" },
                transition: "all 0.3s ease",
                borderLeft: expanded === service.id ? "6px solid" : "3px solid",
                borderLeftColor: expanded === service.id ? "primary.main" : "divider",
                transform: "perspective(1000px)",
                "&:hover": {
                  transform: expanded === service.id ? "perspective(1000px)" : "perspective(1000px) rotateX(1deg)"
                }
              }}
              id={service.id}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMore
                    sx={{
                      color: expanded === service.id ? "white" : "primary.main",
                      fontSize: "2rem",
                      transition: "all 0.3s ease",
                      transform: expanded === service.id ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                }
                sx={{
                  bgcolor: expanded === service.id ? "primary.main" : "background.paper",
                  color: expanded === service.id ? "white" : "text.primary",
                  minHeight: "80px !important",
                  "&:hover": {
                    bgcolor: expanded === service.id ? "primary.dark" : "action.hover",
                  },
                  transition: "all 0.3s ease",
                  px: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <Avatar
                    sx={{
                      bgcolor: expanded === service.id ? "white" : "primary.main",
                      color: expanded === service.id ? "primary.main" : "white",
                      mr: 3,
                      width: 48,
                      height: 48,
                      transition: "all 0.3s ease",
                      transform: expanded === service.id ? "rotate(360deg)" : "rotate(0)"
                    }}
                  >
                    {service.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" component="h3" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: expanded === service.id ? "white" : "text.secondary",
                      }}
                    >
                      {service.stats}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "background.paper", p: 0 }}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 4 }}>
                      <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">
                        Comprehensive Service Details:
                      </Typography>
                      <List dense>
                        {service.details.map((detail, i) => (
                          <ListItem 
                            key={i} 
                            sx={{ 
                              py: 1,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "translateX(5px)"
                              }
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                              <CheckCircle color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              primaryTypographyProps={{ variant: "body1" }}
                            />
                          </ListItem>
                        ))}
                      </List>

                      <Divider sx={{ my: 3 }} />

                      <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">
                        Key Benefits:
                      </Typography>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: 2,
                        }}
                      >
                        {service.benefits.map((benefit, i) => (
                          <Paper
                            key={i}
                            elevation={2}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "translateY(-3px)",
                                boxShadow: theme.shadows[4],
                                background: "linear-gradient(to right, rgba(25, 118, 210, 0.05), rgba(25, 118, 210, 0.1))"
                              },
                            }}
                          >
                            <TrendingUp
                              color="primary"
                              sx={{ 
                                mr: 1.5, 
                                fontSize: "1.5rem",
                                transition: "all 0.3s ease",
                                transform: "rotate(0deg)"
                              }}
                            />
                            <Typography variant="body1">{benefit}</Typography>
                          </Paper>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        height: "100%",
                        minHeight: "400px",
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, transparent 50%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        },
                        "&:hover::after": {
                          opacity: 1
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Enhanced CTA Section with Floating Animation */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          py: 8,
          mb: 8,
          borderRadius: "16px",
          textAlign: "center",
          backgroundImage: "linear-gradient(135deg, rgba(13, 71, 161, 0.9), rgba(21, 101, 192, 0.9)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          animation: "floating 6s ease-in-out infinite",
          "@keyframes floating": {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
            "100%": { transform: "translateY(0px)" }
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 30%)",
          }
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                height: "3px",
                background: "linear-gradient(90deg, #ff5722, #ff9800)",
                borderRadius: "2px"
              }
            }}
          >
            Begin Your Educational Journey Today
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              mb: 4,
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            Our team of experts is ready to guide you every step of the way!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setIsModalOpen(true)}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: "bold",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
              },
              transition: "all 0.3s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                transform: "rotate(45deg)",
                transition: "all 0.5s ease",
              },
              "&:hover::after": {
                left: "100%",
              }
            }}
          >
            Get Started Now
          </Button>
          <BookCounselling
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePage;