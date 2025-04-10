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
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import {
  ExpandMore,
  AttachMoney,
  Work,
  Flag,
  CheckCircle,
  Close,
  School,
  Public,
  Language,
} from "@mui/icons-material";
import UKFlag from "/images/country/uk.png";
import LondonImage from "/images/cities/london.jpg";
import ManchesterImage from "/images/cities/manchester.jpg";
import EdinburghImage from "/images/cities/edinburgh.jpg";
import OxfordUni from "/images/Universities/oxford.jpg";
import CambridgeUni from "/images/Universities/cambridge.jpg";
import BookCounselling from "../components/BookCounselling";

const UKPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showUniversities, setShowUniversities] = useState(false);

  // Exchange rate: 1 GBP ≈ 170 NPR
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
      content:
        "Undergrad: NPR 2.7-6.8Million/year | Postgrad: NPR 2.5-8.5Million/year",
    },
    {
      icon: <Work fontSize="large" />,
      title: "Work Rights",
      content:
        "20hrs/week during term | 2-year Graduate Visa | Average salary: NPR 120k-300k/month",
    },
    {
      icon: <Flag fontSize="large" />,
      title: "For Nepalis",
      content: "IELTS 6.0+ | 55% in +2 | CAS required | IHS fee: NPR 85k/year",
    },
  ];

  const popularCities = [
    {
      name: "London",
      image: LondonImage,
      highlights: [
        "Imperial College London",
        "LSE",
        "Global financial hub",
        "Multicultural",
      ],
      livingCost: "NPR 170k-340k/month",
    },
    {
      name: "Manchester",
      image: ManchesterImage,
      highlights: [
        "University of Manchester",
        "Affordable living",
        "Industrial hub",
        "Vibrant music scene",
      ],
      livingCost: "NPR 100k-200k/month",
    },
    {
      name: "Edinburgh",
      image: EdinburghImage,
      highlights: [
        "University of Edinburgh",
        "Beautiful architecture",
        "Festival city",
        "Scottish culture",
      ],
      livingCost: "NPR 120k-240k/month",
    },
  ];

  const universities = [
    {
      name: "University of Oxford",
      image: OxfordUni,
      stats: {
        ranking: "#1 in Times Higher Education",
        acceptance: "17%",
        popular: "PPE, Law, Medicine",
        fees: "NPR 4.1-6.8M/year",
      },
    },
    {
      name: "University of Cambridge",
      image: CambridgeUni,
      stats: {
        ranking: "#3 in QS World Rankings",
        acceptance: "21%",
        popular: "Natural Sciences, Engineering",
        fees: "NPR 4.1-6.8M/year",
      },
    },
  ];

  const admissionSteps = [
    "Choose courses through UCAS (max 5 choices)",
    "Prepare personal statement and references",
    "Submit application by January deadline",
    "Interview process (for top universities)",
    "Receive conditional/unconditional offers",
    "Meet conditions (grades, IELTS)",
    "Apply for Tier 4 student visa",
  ];

  const scholarships = [
    {
      name: "Chevening Scholarship",
      amount: "Full tuition + living expenses",
      eligibility: "2+ years work experience, leadership potential",
    },
    {
      name: "Commonwealth Scholarship",
      amount: "Full tuition + stipend",
      eligibility: "First-class degree, development impact",
    },
    {
      name: "University Scholarships",
      amount: "10-50% tuition discount",
      eligibility: "Academic merit, country-specific",
    },
  ];

  const universityCategories = [
    {
      name: "Top-Ranked Universities",
      icon: <Public color="primary" />,
      universities: [
        {
          name: "University of Oxford",
          state: "England",
          url: "https://www.ox.ac.uk",
        },
        {
          name: "University of Cambridge",
          state: "England",
          url: "https://www.cam.ac.uk",
        },
        {
          name: "Imperial College London",
          state: "England",
          url: "https://www.imperial.ac.uk",
        },
        {
          name: "University College London (UCL)",
          state: "England",
          url: "https://www.ucl.ac.uk",
        },
        {
          name: "University of Edinburgh",
          state: "Scotland",
          url: "https://www.ed.ac.uk",
        },
        {
          name: "University of Manchester",
          state: "England",
          url: "https://www.manchester.ac.uk",
        },
        {
          name: "King’s College London",
          state: "England",
          url: "https://www.kcl.ac.uk",
        },
        {
          name: "University of Bristol",
          state: "England",
          url: "https://www.bristol.ac.uk",
        },
        {
          name: "University of Glasgow",
          state: "Scotland",
          url: "https://www.gla.ac.uk",
        },
        {
          name: "University of Birmingham",
          state: "England",
          url: "https://www.birmingham.ac.uk",
        },
      ],
    },
    {
      name: "Mid-Tier & Student-Friendly Options",
      icon: <School color="primary" />,
      universities: [
        {
          name: "University of Portsmouth",
          state: "England",
          url: "https://www.port.ac.uk",
        },
        {
          name: "University of Greenwich",
          state: "England",
          url: "https://www.gre.ac.uk",
        },
        {
          name: "University of West London",
          state: "England",
          url: "https://www.uwl.ac.uk",
        },
        {
          name: "London Metropolitan University",
          state: "England",
          url: "https://www.londonmet.ac.uk",
        },
        {
          name: "University of East London (UEL)",
          state: "England",
          url: "https://www.uel.ac.uk",
        },
        {
          name: "University of Wolverhampton",
          state: "England",
          url: "https://www.wlv.ac.uk",
        },
        {
          name: "Coventry University",
          state: "England",
          url: "https://www.coventry.ac.uk",
        },
        {
          name: "Middlesex University London",
          state: "England",
          url: "https://www.mdx.ac.uk",
        },
        {
          name: "University of Bedfordshire",
          state: "England",
          url: "https://www.beds.ac.uk",
        },
        {
          name: "University of Sunderland",
          state: "England",
          url: "https://www.sunderland.ac.uk",
        },
      ],
    },
    {
      name: "Affordable and Flexible Entry Options",
      icon: <Language color="primary" />,
      universities: [
        {
          name: "Leeds Beckett University",
          state: "England",
          url: "https://www.leedsbeckett.ac.uk",
        },
        {
          name: "Teesside University",
          state: "England",
          url: "https://www.tees.ac.uk",
        },
        {
          name: "University of Chester",
          state: "England",
          url: "https://www1.chester.ac.uk",
        },
        {
          name: "University of Central Lancashire (UCLan)",
          state: "England",
          url: "https://www.uclan.ac.uk",
        },
        {
          name: "University of South Wales",
          state: "Wales",
          url: "https://www.southwales.ac.uk",
        },
        {
          name: "Sheffield Hallam University",
          state: "England",
          url: "https://www.shu.ac.uk",
        },
        {
          name: "University of Northampton",
          state: "England",
          url: "https://www.northampton.ac.uk",
        },
        {
          name: "Solent University",
          state: "England",
          url: "https://www.solent.ac.uk",
        },
        {
          name: "London South Bank University",
          state: "England",
          url: "https://www.lsbu.ac.uk",
        },
        {
          name: "University of Roehampton",
          state: "England",
          url: "https://www.roehampton.ac.uk",
        },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1486299267070-83823f5448dd)",
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
              src={UKFlag}
              sx={{ width: 80, height: 80, mr: 3, border: "3px solid white" }}
            />
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Study in United Kingdom
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            Home to world-renowned universities with centuries of academic
            excellence
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
          Why Choose UK Education?
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
                  border: "1px solid rgb(0, 47, 255)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "all 1s ease",
                    boxShadow: `
              inset 0 0 50px rgba(0, 213, 255, 0.87),
              ${theme.shadows[6]}
            `,
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
                  border: "1px solid rgb(0, 47, 255)",

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
          World-Renowned Universities
        </Typography>
        <Grid container spacing={4}>
          {universities.map((uni, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  transition: "transform 0.3s",
                  borderRight: "5px solid rgb(0, 213, 255)",

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

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setShowUniversities(true)}
            sx={{
              px: 6,
              py: 2,
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderWidth: "2px",
              "&:hover": {
                borderWidth: "2px",
                transform: "translateY(-3px)",
                boxShadow: theme.shadows[4],
              },
              transition: "all 0.3s ease",
            }}
          >
            View All Recommended Universities
          </Button>
        </Box>
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
              UK Admission Process
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                For September Intake:
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
                * Oxford/Cambridge deadline: October 15 | Most others: January
                25
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
              Note: Many universities offer country-specific scholarships for
              Nepali students
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" fontWeight="bold">
              Post-Study Work Visa
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Graduate Route Visa
                  </Typography>
                  <Typography>
                    • 2 years work permit for bachelor/master graduates
                    <br />
                    • 3 years for PhD graduates
                    <br />
                    • No job offer required
                    <br />
                    • Can work in any job/sector
                    <br />• Switch to skilled worker visa if finding sponsored
                    job
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Work Opportunities
                  </Typography>
                  <Typography>
                    • High demand sectors: Healthcare, Engineering, IT
                    <br />
                    • Average starting salary: NPR 180k-350k/month
                    <br />
                    • Strong Nepali community in major cities
                    <br />
                    • 5-year path to settlement (ILR)
                    <br />• Citizenship possible after 6 years
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
          mb: 8,
          textAlign: "center",
          backgroundImage: "linear-gradient(135deg, #1a237e,rgb(0, 213, 255))",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Start Your UK Journey
          </Typography>
          <Typography variant="h6" paragraph>
            Our UK-certified counselors understand Nepali students' needs
            perfectly
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
            Free UK Education Consultation
          </Button>
          <BookCounselling
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Container>
      </Box>

      {/* Universities Dialog */}
      <Dialog
        open={showUniversities}
        onClose={() => setShowUniversities(false)}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Recommended UK Universities
          </Typography>
          <IconButton onClick={() => setShowUniversities(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          {universityCategories.map((category, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 4, mt: 4 }}>
                {category.icon}
                <Typography variant="h5" fontWeight="bold" sx={{ ml: 1 }}>
                  {category.name}
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {category.universities.map((uni, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        height: "100%",
                        transition: "all 0.1s",
                        "&:hover": {
                          borderLeft: "5px solid red",
                          transform: "translateY(-3px)",
                          boxShadow: theme.shadows[4],
                        },
                      }}
                    >
                      <Typography variant="h6" fontWeight="medium">
                        {uni.name}
                      </Typography>
                      <Chip
                        label={uni.state}
                        size="small"
                        sx={{ mt: 0.5, mb: 1 }}
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        href={uni.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                      >
                        Visit Official Website
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default UKPage;
