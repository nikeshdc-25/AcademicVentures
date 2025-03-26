import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  MenuList,
  MenuItem,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import logo from "../assets/academicV.png";
import "./headerNav.css";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Handle hover events to show and hide the dropdown
  const handleMouseEnter = (event) => {
    if (event.target.innerText === "DESTINATION") {
      setAnchorEl(event.currentTarget);
    }
    if (event.target.innerText === "TEST PREPARATION") {
      setAnchorE2(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };

  // Toggle Drawer on mobile
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ height: 70, margin: 2 }}
    >
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{ height: 60, justifyContent: "space-between" }}
        >
          {/* Company Logo and Name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 85, height: 80, marginRight: 8 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "#007acc",
                fontWeight: 600,
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              Academic Ventures
            </Typography>
          </Box>

          {/* Navigation Links */}
          {!isMobile ? (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="end"
              sx={{ flex: 1 }}
            >
              {/* Non-mobile navigation buttons */}
              <Button
                sx={{ color: "black", fontSize: 15 }}
                className="nav-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Button>
              <Button
                sx={{ color: "black", fontSize: 15 }}
                className="nav-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About Us
              </Button>
              <Button
                sx={{ color: "black", fontSize: 15 }}
                className="nav-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Study Abroad
              </Button>

              {/* Dropdown for "Destination" */}
              <Box
                className="dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  className="nav-button"
                  sx={{ color: "black", fontSize: 15 }}
                >
                  Destination
                  <KeyboardArrowDownIcon  sx={{ width: 16, height: 14, font: 20 }} />
                </Button>
                <div className={`dropdown-menu ${anchorEl ? "show" : ""}`}>
                  <MenuList>
                    <MenuItem className="dropdown-item">UK</MenuItem>
                    <MenuItem className="dropdown-item">USA</MenuItem>
                    <MenuItem className="dropdown-item">Malaysia</MenuItem>
                    <MenuItem className="dropdown-item">Romania</MenuItem>
                    <MenuItem className="dropdown-item">Malta</MenuItem>
                  </MenuList>
                </div>
              </Box>

              <Button
                sx={{ color: "black", fontSize: 15 }}
                className="nav-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
              </Button>

              {/* Dropdown for "Test Preparation" */}
              <Box
                className="dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  className="nav-button"
                  sx={{ color: "black", fontSize: 15 }}
                >
                  Test Preparation
                  <KeyboardArrowDownIcon sx={{ width: 15.4, height: 14 }} />
                </Button>
                <div className={`dropdown-menu ${anchorE2 ? "show" : ""}`}>
                  <MenuList>
                    <MenuItem className="dropdown-item">SAT</MenuItem>
                    <MenuItem className="dropdown-item">IELTS</MenuItem>
                    <MenuItem className="dropdown-item">GRE/GMAT</MenuItem>
                    <MenuItem className="dropdown-item">TOEFL/PTE</MenuItem>
                  </MenuList>
                </div>
              </Box>
            </Stack>
          ) : (
            // Mobile Drawer Menu
            <IconButton
              color="inherit"
              onClick={() => toggleDrawer(true)}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <GiHamburgerMenu />
            </IconButton>
          )}

          {/* CTA Button */}
          <Button
            component="a"
            href="https://osom.one/contact"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#007acc",
              borderRadius: 28,
              textTransform: "none",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "auto",
              whiteSpace: "normal", 
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            endIcon={
              <IconButton
                size="small"
                sx={{
                  bgcolor: "white",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <PhoneIcon sx={{ color: "#007acc", width: 13.5, height: 19 }} />
              </IconButton>
            }
          >
            <Typography
              sx={{
                display: "inline-block",
                maxWidth: "180px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Book Free Counseling
            </Typography>
          </Button>
        </Toolbar>
      </Container>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          <ListItem button>Home</ListItem>
          <ListItem button>About Us</ListItem>
          <ListItem button>Study Abroad</ListItem>
          <ListItem button>Destination</ListItem>
          <ListItem button>Services</ListItem>
          <ListItem button>Test Preparation</ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default HeaderNav;
