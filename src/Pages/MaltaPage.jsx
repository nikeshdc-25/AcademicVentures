import React, { useEffect, useState } from "react";
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
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ExpandMore,
  AttachMoney,
  Work,
  Flag,
  CheckCircle,
} from "@mui/icons-material";
import MaltaFlag from "/images/country/malta.png";
import VallettaImage from "/images/cities/valletta.jpg";
import MsidaImage from "/images/cities/msida.jpg";
import GozoImage from "/images/cities/gozo.jpg";
import MaltaUniImage from "/images/Universities/malta-uni.jpg";
import MCASTImage from "/images/Universities/mcast.jpg";
import BookCounselling from "../components/BookCounselling";

const MaltaPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const quickFacts = [
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Tuition Fees",
      content: "Undergrad: NPR 500k-900k/year | Postgrad: NPR 600k-1.2M/year",
    },
    {
      icon: <Work fontSize="large" />,
      title: "Work Rights",
      content: "20hrs/week during studies | 1-year job search visa",
    },
    {
      icon: <Flag fontSize="large" />,
      title: "For Nepalis",
      content: "IELTS 6.0 required | 60% in +2 | EU English-speaking country",
    },
  ];

  const popularCities = [
    {
      name: "Valletta",
      image: VallettaImage,
      highlights: [
        "University of Malta main campus",
        "Historic capital city",
        "Mediterranean lifestyle",
        "Cultural hub",
      ],
      livingCost: "NPR 70k-100k/month",
    },
    {
      name: "Msida",
      image: MsidaImage,
      highlights: [
        "University of Malta campus",
        "Student accommodation",
        "Coastal location",
        "Vibrant student life",
      ],
      livingCost: "NPR 65k-90k/month",
    },
    {
      name: "Gozo",
      image: GozoImage,
      highlights: [
        "University of Malta campus",
        "Peaceful island life",
        "Lower living costs",
        "Beautiful landscapes",
      ],
      livingCost: "NPR 55k-80k/month",
    },
  ];

  const universities = [
    {
      name: "University of Malta",
      image: MaltaUniImage,
      stats: {
        ranking: "Top 500-600 QS World",
        acceptance: "70%",
        popular: "Business, IT, Medicine",
        fees: "NPR 600k-1M/year",
      },
    },
    {
      name: "Malta College of Arts, Science & Technology (MCAST)",
      image: MCASTImage,
      stats: {
        ranking: "Top vocational institute",
        acceptance: "75%",
        popular: "Engineering, Media, Hospitality",
        fees: "NPR 500k-800k/year",
      },
    },
  ];

  const admissionSteps = [
    "Choose from 300+ English-taught programs",
    "Submit academic documents with certified translations",
    "Provide IELTS/TOEFL scores (minimum 6.0 IELTS)",
    "Receive conditional offer within 4 weeks",
    "Pay tuition deposit (NPR 150k-300k)",
    "Apply for student visa (6-8 weeks processing)",
    "Obtain health insurance (NPR 20k/year)",
    "Travel to Malta (orientation programs available)",
  ];

  const scholarships = [
    {
      name: "Malta Government Scholarship",
      amount: "Up to 50% tuition waiver",
      eligibility: "Academic excellence, under 30 years",
    },
    {
      name: "University of Malta International Scholarships",
      amount: "NPR 200k-500k per year",
      eligibility: "Strong academic background",
    },
    {
      name: "Commonwealth Scholarship",
      amount: "Full tuition + stipend",
      eligibility: "Postgraduate studies, Nepali citizens",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1562923928-6078542d1ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          color: "white",
          py: 12,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Avatar
              src={MaltaFlag}
              sx={{ width: 80, height: 80, mr: 3, border: "3px solid white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Study in Malta
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            English-speaking EU education in the Mediterranean
          </Typography>
        </Container>
      </Box>

      {/* Quick Facts */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          Why Malta for Nepali Students
        </Typography>
        <Grid container spacing={4}>
          {quickFacts.map((fact, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{ bgcolor: "primary.main", color: "white", mr: 2 }}
                  >
                    {fact.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    {fact.title}
                  </Typography>
                </Box>
                <Typography variant="body1">{fact.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Top Cities */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          Best Student Locations
        </Typography>
        <Grid container spacing={4}>
          {popularCities.map((city, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={city.image}
                  alt={city.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {city.name}
                  </Typography>
                  <List dense>
                    {city.highlights.map((highlight, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={highlight} />
                      </ListItem>
                    ))}
                  </List>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      p: 1.5,
                      borderRadius: 2,
                      mt: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body2" color="primary.dark">
                      Living Cost: {city.livingCost}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Top Universities */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          Top Institutions
        </Typography>
        <Grid container spacing={4}>
          {universities.map((uni, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 300 },
                    height: { xs: 200, md: "auto" },
                  }}
                  image={uni.image}
                  alt={uni.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {uni.name}
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(uni.stats).map(([key, value]) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <Paper elevation={1} sx={{ p: 1.5, borderRadius: 2 }}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </Typography>
                          <Typography variant="body1" fontWeight="medium">
                            {value}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Detailed Information */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          Essential Information for Nepali Students
        </Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Admission Process
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Step-by-Step Guide:
              </Typography>
              <List>
                {admissionSteps.map((step, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: "36px" }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          width: 24,
                          height: 24,
                          fontSize: "0.8rem",
                        }}
                      >
                        {index + 1}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                * Some programs may require interviews or additional tests
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Scholarship Opportunities
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {scholarships.map((scholarship, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 3,
                      borderTop: "4px solid",
                      borderTopColor: "primary.main",
                    }}
                  >
                    <Typography variant="h6" gutterBottom color="primary">
                      {scholarship.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Amount:</strong> {scholarship.amount}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Eligibility:</strong> {scholarship.eligibility}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" sx={{ mt: 3, fontStyle: "italic" }}>
              Note: Scholarship deadlines are typically 6 months before semester
              starts
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Student Life in Malta
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Living in Malta
                  </Typography>
                  <Typography>
                    • English is an official language (no language barrier)
                    <br />
                    • Mediterranean climate (mild winters, hot summers)
                    <br />
                    • Safe island nation with low crime rates
                    <br />
                    • Compact size makes commuting easy
                    <br />• Rich history and cultural festivals
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Career Opportunities
                  </Typography>
                  <Typography>
                    • 1-year post-study work visa
                    <br />
                    • Growing industries: iGaming, finance, tourism
                    <br />
                    • Average graduate salary: NPR 120k-250k/month
                    <br />
                    • EU work rights after graduation
                    <br />• Pathway to permanent residency
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          py: 8,
          textAlign: "center",
          backgroundImage: "linear-gradient(135deg, #1565c0, #0d47a1)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Begin Your Maltese Education Journey
          </Typography>
          <Typography variant="h6" paragraph>
            Our Malta education specialists guide Nepali students through the
            entire process
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setIsModalOpen(true)}
            sx={{
              px: 8,
              py: 2,
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Free Malta Consultation
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

export default MaltaPage;
