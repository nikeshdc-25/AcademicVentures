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
import USFlag from "/images/country/usa.png";
import NYImage from "/images/cities/ny.jpg";
import BostonImage from "/images/cities/boston.jpg";
import CaliforniaImage from "/images/cities/california.jpg";
import HarvardUni from "/images/Universities/harvard.jpg";
import StanfordUni from "/images/Universities/stanford.jpg";
import BookCounselling from "../components/BookCounselling";

const USPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Exchange rate: 1 USD ≈ 133 NPR
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Tuition Fees",
      content: "Undergrad: NPR 5.3-13.3M/year | Grad: NPR 4.7-10.6M/year",
    },
    {
      icon: <Work fontSize="large" />,
      title: "Work Rights",
      content:
        "CPT/OPT available | STEM extensions | Average salary: NPR 160k-400k/month",
    },
    {
      icon: <Flag fontSize="large" />,
      title: "For Nepalis",
      content: "F-1 visa requirements | 60%+ in +2 | Strong SOP needed",
    },
  ];

  const popularCities = [
    {
      name: "New York",
      image: NYImage,
      highlights: [
        "Columbia University",
        "NYU",
        "Financial capital",
        "Diverse culture",
      ],
      livingCost: "NPR 160k-320k/month",
    },
    {
      name: "Boston",
      image: BostonImage,
      highlights: [
        "Harvard/MIT",
        "50+ colleges",
        "Education hub",
        "Historic city",
      ],
      livingCost: "NPR 140k-280k/month",
    },
    {
      name: "California",
      image: CaliforniaImage,
      highlights: [
        "Stanford/Berkeley",
        "Silicon Valley",
        "Tech jobs",
        "Great weather",
      ],
      livingCost: "NPR 150k-300k/month",
    },
  ];

  const universities = [
    {
      name: "Harvard University",
      image: HarvardUni,
      stats: {
        ranking: "#3 in QS World Rankings",
        acceptance: "4.6%",
        popular: "CS, Economics, Law",
        fees: "NPR 8.5M/year",
      },
    },
    {
      name: "Stanford University",
      image: StanfordUni,
      stats: {
        ranking: "#5 in QS World Rankings",
        acceptance: "5.2%",
        popular: "Engineering, Business, Medicine",
        fees: "NPR 9.2M/year",
      },
    },
  ];

  const admissionSteps = [
    "Research universities (Common App/Coalition App)",
    "Take SAT/ACT (for undergrad) or GRE/GMAT (for grad)",
    "Prepare documents: Transcripts, SOP, LORs, CV",
    "Apply before deadlines (Nov-Jan for Fall intake)",
    "Receive I-20 after acceptance",
    "Pay SEVIS fee (NPR 26,600)",
    "Visa interview at US Embassy",
  ];

  const scholarships = [
    {
      name: "Fulbright Scholarship",
      amount: "Full tuition + living expenses",
      eligibility: "Exceptional academics, leadership",
    },
    {
      name: "University Merit Scholarships",
      amount: "Up to 100% tuition waiver",
      eligibility: "SAT 1400+/ACT 32+ or GPA 3.8+",
    },
    {
      name: "Need-Based Financial Aid",
      amount: "Variable (up to full tuition)",
      eligibility: "Demonstrated financial need",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1499188073299-5bd9060e044b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
              src={USFlag}
              sx={{ width: 80, height: 80, mr: 3, border: "3px solid white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Study in United States
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            World's top destination for higher education with unparalleled
            opportunities
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
          Why Study in USA?
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
          Popular Student Cities
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
          World-Class Universities
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
              Admission Process Timeline
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                For Fall Intake (August/September):
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
                * Early Decision deadlines typically November 1 | Regular
                Decision January 1-15
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
              Note: Most Ivy League schools offer need-blind admission with full
              financial aid for international students
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Post-Study Work Visa (OPT/CPT)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Curricular Practical Training (CPT)
                  </Typography>
                  <Typography>
                    • Allows paid internships during studies
                    <br />
                    • Must be related to your major
                    <br />
                    • Can be part-time (20hrs/week) or full-time
                    <br />
                    • Requires authorization from DSO
                    <br />• No limit on duration but 12+ months full-time CPT
                    cancels OPT eligibility
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Optional Practical Training (OPT)
                  </Typography>
                  <Typography>
                    • 12 months work authorization after graduation
                    <br />
                    • STEM fields get 24-month extension (total 3 years)
                    <br />
                    • Must find job within 90 days of OPT start
                    <br />
                    • Employer must be E-Verified for STEM extension
                    <br />• Pathway to H-1B visa
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
          backgroundImage: "linear-gradient(135deg, #0d47a1, #1976d2)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Begin Your American Dream
          </Typography>
          <Typography variant="h6" paragraph>
            Our US education specialists have helped 500+ Nepali students secure
            admissions
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
            Free US Education Consultation
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

export default USPage;
