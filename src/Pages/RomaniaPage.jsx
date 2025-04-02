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
import RomaniaFlag from "/images/country/romania.png";
import BucharestImage from "/images/cities/bucharest.jpg";
import ClujImage from "/images/cities/cluj.jpg";
import TimisoaraImage from "/images/cities/timisoara.jpg";
import BucharestUniImage from "/images/Universities/bucharest-uni.jpg";
import BabesBolyaiImage from "/images/Universities/babes-bolyai.jpg";
import BookCounselling from "../components/BookCounselling";

const RomaniaPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Exchange rate: 1 RON ≈ 30 NPR
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const quickFacts = [
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Tuition Fees",
      content: "Undergrad: NPR 300k-700k/year | Postgrad: NPR 400k-900k/year",
    },
    {
      icon: <Work fontSize="large" />,
      title: "Work Rights",
      content: "20hrs/week during studies | 6-month job search visa",
    },
    {
      icon: <Flag fontSize="large" />,
      title: "For Nepalis",
      content: "No IELTS required | 50% in +2 | Schengen access",
    },
  ];

  const popularCities = [
    {
      name: "Bucharest",
      image: BucharestImage,
      highlights: [
        "University of Bucharest",
        "Affordable capital",
        "Vibrant nightlife",
        "Economic center",
      ],
      livingCost: "NPR 45k-75k/month",
    },
    {
      name: "Cluj-Napoca",
      image: ClujImage,
      highlights: [
        "Babes-Bolyai University",
        "Tech hub",
        "Student-friendly",
        "Cultural festivals",
      ],
      livingCost: "NPR 40k-65k/month",
    },
    {
      name: "Timișoara",
      image: TimisoaraImage,
      highlights: [
        "Western University",
        "Industrial city",
        "European Capital of Culture",
        "High quality of life",
      ],
      livingCost: "NPR 35k-60k/month",
    },
  ];

  const universities = [
    {
      name: "University of Bucharest",
      image: BucharestUniImage,
      stats: {
        ranking: "Top 800 QS World",
        acceptance: "65%",
        popular: "Computer Science, Business",
        fees: "NPR 400k-700k/year",
      },
    },
    {
      name: "Babeș-Bolyai University",
      image: BabesBolyaiImage,
      stats: {
        ranking: "Top in Romania",
        acceptance: "60%",
        popular: "Medicine, Engineering",
        fees: "NPR 450k-800k/year",
      },
    },
  ];

  const admissionSteps = [
    "Choose from English-taught programs",
    "Submit academic documents (translated)",
    "Receive admission letter within 2 weeks",
    "Pay tuition deposit (NPR 100k-200k)",
    "Apply for student visa (4-6 weeks processing)",
    "Obtain health insurance (NPR 15k/year)",
    "Travel to Romania (airport pickup available)",
  ];

  const scholarships = [
    {
      name: "Romania Government Scholarship",
      amount: "Full tuition + monthly stipend",
      eligibility: "Excellent academics, under 35 years",
    },
    {
      name: "University Excellence Awards",
      amount: "30-50% tuition discount",
      eligibility: "Top 10% in previous studies",
    },
    {
      name: "Erasmus+ Mobility Grants",
      amount: "NPR 200k-400k for EU exchanges",
      eligibility: "Enrolled in partner universities",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1475754073691-4423e1368422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
              src={RomaniaFlag}
              sx={{ width: 80, height: 80, mr: 3, border: "3px solid white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Study in Romania
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            Quality European education at Nepal-friendly costs
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
          Advantages for Nepali Students
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
          Recommended Student Cities
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
          Leading Universities
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
                * No entrance exams for most English-taught programs
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
              Note: Some scholarships require basic Romanian language skills
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Life in Romania
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Cultural Adaptation
                  </Typography>
                  <Typography>
                    • Friendly locals with increasing English proficiency
                    <br />
                    • Four distinct seasons (cold winters)
                    <br />
                    • Rich history and medieval architecture
                    <br />
                    • Vibrant student communities
                    <br />• Schengen visa access for travel
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Career Prospects
                  </Typography>
                  <Typography>
                    • 6-month job search visa after graduation
                    <br />
                    • Growing IT and automotive sectors
                    <br />
                    • Average graduate salary: NPR 90k-180k/month
                    <br />
                    • EU Blue Card pathway available
                    <br />• 5-year residence leads to permanent status
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
          backgroundImage: "linear-gradient(135deg, #2e7d32, #1b5e20)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Start Your Romanian Adventure
          </Typography>
          <Typography variant="h6" paragraph>
            Our Romania education experts specialize in Nepali student
            placements
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
            Free Romania Consultation
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

export default RomaniaPage;
