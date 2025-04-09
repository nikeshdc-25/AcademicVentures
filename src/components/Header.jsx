import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Grow,
  Divider,
  Avatar,
} from "@mui/material";
import {
  KeyboardArrowDown,
  Phone,
  Menu as MenuIcon,
  Flag,
} from "@mui/icons-material";
import logo from "/academicV.svg";
import { keyframes } from "@emotion/react";
import BookCounselling from "./BookCounselling";

// Country flags
const countryFlags = {
  UK: "🇬🇧",
  USA: "🇺🇸",
  Malaysia: "🇲🇾",
  Romania: "🇷🇴",
  Malta: "🇲🇹",
};

// Animation for dropdown
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [destinationAnchor, setDestinationAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState("");

  const handleDestinationOpen = (event) => {
    setDestinationAnchor(event.currentTarget);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setDestinationAnchor(null);
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    {
      name: "Destination",
      subItems: [
        { name: "USA", path: "/usa" },
        { name: "UK", path: "/uk" },
        { name: "Malaysia", path: "/malaysia" },
        { name: "Romania", path: "/romania" },
        { name: "Malta", path: "/malta" },
      ],
    },
    { name: "Services", path: "/services" },
    {
      name: "Test Preparation",
      path: "/test-prep",
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        height: 75,
        width: "100%",
        marginBottom: 1,
        marginTop: -1,
        padding: 0,
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        background: "linear-gradient(to right,rgb(255, 255, 255),rgb(202, 217, 251))",
        backdropFilter: "blur(5px)",
        zIndex: theme.zIndex.appBar,
        borderBottom: "3px solid rgba(230, 55, 2, 0.56)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 3 }, height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ height: "100%", justifyContent: "space-between" }}
        >
          {/* Logo and Brand */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              height: "100%",
              "&:hover": {
                "& img": {
                  transform: "scale(1.05)",
                },
                "& .MuiTypography-root": {
                  color: theme.palette.primary.dark,
                },
              },
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={logo}
              alt="Academic Ventures Logo"
              style={{
                width: 90,
                height: 65,
                marginRight: 10,
                transition: "transform 0.3s ease",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.3s ease",
              }}
            >
              Academic Ventures
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Stack
              direction="row"
              spacing={1}
              alignItems="flex-start"
              sx={{ height: "100%" }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "start",
                    position: "relative",
                  }}
                >
                  {item.subItems ? (
                    <>
                      <Button
                        aria-controls={item.name.toLowerCase()}
                        aria-haspopup="true"
                        onMouseEnter={
                          item.name === "Destination"
                            ? handleDestinationOpen
                            : handleTestPrepOpen
                        }
                        onClick={
                          item.name === "Destination"
                            ? handleDestinationOpen
                            : handleTestPrepOpen
                        }
                        endIcon={
                          <KeyboardArrowDown
                            sx={{ transition: "transform 0.2s" }}
                          />
                        }
                        sx={{
                          color: theme.palette.text.primary,
                          textTransform: "none",
                          fontSize: "1rem",
                          fontWeight: 500,
                          height: "100%",
                          px: 1,
                          position: "relative",
                          "&:hover": {
                            color: theme.palette.primary.main,
                            backgroundColor: "transparent",
                            "& .MuiSvgIcon-root": {
                              transform: "rotate(180deg)",
                            },
                            "&::after": {
                              width: "100%",
                            },
                          },
                          "&.active": {
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            "&::after": {
                              width: "100%",
                            },
                          },
                          transition: "all 0.2s ease",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 0,
                            height: 3,
                            backgroundColor: theme.palette.primary.main,
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                      <Menu
                        id={item.name.toLowerCase()}
                        anchorEl={
                          item.name === "Destination"
                            ? destinationAnchor
                            : testPrepAnchor
                        }
                        open={
                          item.name === "Destination"
                            ? Boolean(destinationAnchor)
                            : Boolean(testPrepAnchor)
                        }
                        onClose={handleClose}
                        MenuListProps={{
                          onMouseLeave: handleClose,
                          sx: { py: 0 },
                        }}
                        transitionDuration={200}
                        PaperProps={{
                          sx: {
                            mt: -2,
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                            borderRadius: 2,
                            minWidth: item.name === "Destination" ? 400 : 200,
                            animation: `${fadeIn} 0.2s ease-out`,
                          },
                        }}
                      >
                        {item.name === "Destination" ? (
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ width: "50%", py: 1 }}>
                              {item.subItems.map((subItem) => (
                                <MenuItem
                                  key={subItem.name}
                                  component={NavLink}
                                  to={subItem.path}
                                  onClick={handleClose}
                                  sx={{
                                    px: 3,
                                    py: 1.5,
                                    "&:hover": {
                                      backgroundColor:
                                        "rgba(0, 122, 204, 0.08)",
                                      borderLeft: `3px solid ${theme.palette.primary.main}`,
                                    },
                                    "&.active": {
                                      color: theme.palette.primary.main,
                                      fontWeight: 600,
                                      backgroundColor:
                                        "rgba(0, 122, 204, 0.05)",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                  onMouseEnter={() =>
                                    setHoveredCountry(subItem.name)
                                  }
                                  onMouseLeave={() => setHoveredCountry("")}
                                >
                                  <Avatar
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      fontSize: "1rem",
                                      bgcolor: "primary",
                                    }}
                                  >
                                    {countryFlags[subItem.name] || (
                                      <Flag fontSize="small" />
                                    )}
                                  </Avatar>
                                  {subItem.name}
                                </MenuItem>
                              ))}
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box
                              sx={{
                                width: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 2,
                              }}
                            >
                              {/* Dynamic flag image */}
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  background:
                                    "linear-gradient(145deg, #f0f0f0, #ffffff)",
                                  borderRadius: 1,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: theme.palette.text.secondary,
                                }}
                              >
                                {hoveredCountry ? (
                                  <img
                                    src={`/images/country/${hoveredCountry.toLowerCase()}.png`}
                                    alt={`${hoveredCountry} Flag`}
                                    style={{ width: "200px", height: "auto" }}
                                  />
                                ) : (
                                  <img
                                    src="/images/country/global.png"
                                    alt="Global Map"
                                    style={{
                                      width: "200px",
                                      height: "auto",
                                      opacity: 0.8,
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                          </Box>
                        ) : (
                          item.subItems.map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              component={NavLink}
                              to={subItem.path}
                              onClick={handleClose}
                              sx={{
                                px: 3,
                                py: 1.5,
                                "&:hover": {
                                  backgroundColor: "rgba(0, 122, 204, 0.08)",
                                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                                },
                              }}
                            >
                              {subItem.name}
                            </MenuItem>
                          ))
                        )}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={NavLink}
                      to={item.path}
                      sx={{
                        color: theme.palette.text.primary,
                        textTransform: "none",
                        fontSize: "1rem",
                        fontWeight: 500,
                        height: "100%",
                        px: 2,
                        position: "relative",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          backgroundColor: "transparent",
                          "&::after": {
                            width: "100%",
                          },
                        },
                        "&.active": {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          "&::after": {
                            width: "100%",
                          },
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 3,
                          backgroundColor: theme.palette.primary.main,
                          transition: "width 0.3s ease",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </Box>
              ))}
            </Stack>
          ) : (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{
                  mr: 1,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: "rgba(0, 122, 204, 0.1)",
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleClose}
                sx={{ mt: 1 }}
                transitionDuration={200}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  sx: {
                    width: 280,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                    borderRadius: 2,
                    py: 0.5,
                  },
                }}
              >
                {navItems.map((item) => (
                  <Box key={item.name}>
                    {item.subItems ? (
                      <>
                        <MenuItem
                          onClick={
                            item.name === "Destination"
                              ? handleDestinationOpen
                              : handleTestPrepOpen
                          }
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: 500,
                            "&:hover": {
                              backgroundColor: "rgba(0, 122, 204, 0.08)",
                            },
                          }}
                        >
                          {item.name}
                          <KeyboardArrowDown />
                        </MenuItem>
                        <Menu
                          anchorEl={
                            item.name === "Destination"
                              ? destinationAnchor
                              : testPrepAnchor
                          }
                          open={Boolean(
                            item.name === "Destination"
                              ? destinationAnchor
                              : testPrepAnchor
                          )}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          TransitionComponent={Grow}
                          PaperProps={{
                            sx: {
                              ml: 0.5,
                              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                              borderRadius: 2,
                            },
                          }}
                        >
                          {item.subItems.map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              component={NavLink}
                              to={subItem.path}
                              onClick={handleClose}
                              sx={{
                                px: 3,
                                py: 1.5,
                                "&:hover": {
                                  backgroundColor: "rgba(0, 122, 204, 0.08)",
                                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                                },
                                "&.active": {
                                  color: theme.palette.primary.main,
                                  fontWeight: 600,
                                },
                              }}
                            >
                              {item.name === "Destination" && (
                                <Avatar
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    fontSize: "1rem",
                                    bgcolor: "transparent",
                                    mr: 1,
                                  }}
                                >
                                  {countryFlags[subItem.name] || (
                                    <Flag fontSize="small" />
                                  )}
                                </Avatar>
                              )}
                              {subItem.name}
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <MenuItem
                        component={NavLink}
                        to={item.path}
                        onClick={handleClose}
                        sx={{
                          "&:hover": {
                            backgroundColor: "rgba(0, 122, 204, 0.08)",
                          },
                          "&.active": {
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            backgroundColor: "rgba(0, 122, 204, 0.05)",
                          },
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    )}
                  </Box>
                ))}
              </Menu>
            </>
          )}

          {/* CTA Button */}
          <Button
  variant="contained"
  color="primary"
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
    display: { xs: "none", xl: "flex" },
  }}
>
  Book Free Counseling
</Button>

          <BookCounselling
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderNav;
