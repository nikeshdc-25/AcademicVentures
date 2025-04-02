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
import MalaysiaFlag from "/images/country/malaysia.png";
import KLImage from "/images/cities/kuala-lumpur.jpg";
import PenangImage from "/images/cities/penang.jpg";
import JohorImage from "/images/cities/johor.jpg";
import UMImage from "/images/Universities/um.jpg";
import MonashImage from "/images/Universities/monash.jpg";
import BookCounselling from "../components/BookCounselling";

const MalaysiaPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Exchange rate: 1 MYR ≈ 35 NPR
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const quickFacts = [
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Tuition Fees",
      content: "Undergrad: NPR 700k-1.4M/year | Postgrad: NPR 800k-2M/year",
    },
    {
      icon: <Work fontSize="large" />,
      title: "Work Rights",
      content: "20hrs/week during studies | 12-month post-study visa",
    },
    {
      icon: <Flag fontSize="large" />,
      title: "For Nepalis",
      content: "No IELTS required | 50% in +2 | Affordable living",
    },
  ];

  const popularCities = [
    {
      name: "Kuala Lumpur",
      image: KLImage,
      highlights: [
        "University of Malaya",
        "Cosmopolitan city",
        "Business hub",
        "Cultural diversity",
      ],
      livingCost: "NPR 50k-80k/month",
    },
    {
      name: "Penang",
      image: PenangImage,
      highlights: [
        "USM (Ranked #147 QS)",
        "Island lifestyle",
        "Tech manufacturing",
        "UNESCO heritage",
      ],
      livingCost: "NPR 35k-60k/month",
    },
    {
      name: "Johor Bahru",
      image: JohorImage,
      highlights: [
        "UTM (Top engineering)",
        "Singapore proximity",
        "Industrial growth",
        "Affordable housing",
      ],
      livingCost: "NPR 40k-65k/month",
    },
  ];

  const universities = [
    {
      name: "University of Malaya",
      image: UMImage,
      stats: {
        ranking: "#65 in QS World Rankings",
        acceptance: "35%",
        popular: "Engineering, Medicine, Business",
        fees: "NPR 700k-1.2M/year",
      },
    },
    {
      name: "Monash University Malaysia",
      image: MonashImage,
      stats: {
        ranking: "Australian degree in Malaysia",
        acceptance: "40%",
        popular: "Computer Science, Pharmacy",
        fees: "NPR 1.5-2M/year",
      },
    },
  ];

  const admissionSteps = [
    "Choose from 100+ English-taught programs",
    "Submit documents (transcripts, passport copies)",
    "Receive offer letter within 1-2 weeks",
    "Pay visa processing fee (NPR 35,000)",
    "EMGS approval (4-6 weeks processing)",
    "Visa endorsement",
    "Travel to Malaysia (pre-departure briefing available)",
  ];

  const scholarships = [
    {
      name: "Malaysia International Scholarship",
      amount: "Full tuition + monthly stipend",
      eligibility: "First-class degree, leadership qualities",
    },
    {
      name: "University Merit Awards",
      amount: "10-50% tuition discount",
      eligibility: "70%+ in previous studies",
    },
    {
      name: "ASEAN Scholarships",
      amount: "NPR 350k one-time grant",
      eligibility: "Nepali citizens, good academics",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1577931683033-1059552104e0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
              src={MalaysiaFlag}
              sx={{ width: 80, height: 80, mr: 3, border: "3px solid white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Study in Malaysia
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            World-class education at 1/3rd the cost of Western countries
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
          Why Nepali Students Choose Malaysia
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
          Best Student Cities
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
          Premier Universities
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
                Typical Timeline (3-4 months total):
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
                * No entrance exams required for most programs
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
              Note: Many universities offer early bird discounts for timely
              applications
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Student Life & Work
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Campus Life
                  </Typography>
                  <Typography>
                    • Modern facilities with international standards
                    <br />
                    • Active Nepali student associations
                    <br />
                    • Halal food widely available
                    <br />
                    • Tropical climate year-round
                    <br />• Affordable transportation (monthly pass: NPR 3,500)
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Work Opportunities
                  </Typography>
                  <Typography>
                    • Part-time: 20hrs/week (NPR 700-1,400/hour)
                    <br />
                    • Internships available in tech/engineering
                    <br />
                    • 12-month post-study work visa
                    <br />
                    • Growing sectors: IT, Manufacturing, Tourism
                    <br />• Strong Nepali professional network
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
          backgroundImage: "linear-gradient(135deg, #d32f2f, #b71c1c)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Begin Your Malaysian Journey
          </Typography>
          <Typography variant="h6" paragraph>
            Our Malaysia specialists have placed 300+ Nepali students since 2015
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
            Free Malaysia Consultation
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

export default MalaysiaPage;
