import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  // Navigation links data
  const navLinks = [
    { title: "HOME", href: "https://osom.one/" },
    { title: "ABOUT US", href: "https://osom.one/about-us" },
    { title: "STUDY ABROAD", href: "https://osom.one/student-success-stories" },
    { title: "GALLERY", href: "https://osom.one/gallery" },
  ];

  // Dropdown menus data
  const dropdownMenus = [{ title: "SERVICES" }, { title: "TEST PREPARATION" }];

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ height: 60 }}
    >
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{ height: 60, justifyContent: "space-between" }}
        >
          {/* Company Logo/Name */}
          <Link
            href="https://osom.one/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: "#007acc",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.5,
              height: 36,
              display: "flex",
              alignItems: "center",
            }}
          >
            Academic Ventures
          </Link>

          {/* Navigation Links */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{ flex: 1 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#333333",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {link.title}
              </Link>
            ))}

            {dropdownMenus.map((menu) => (
              <Box
                key={menu.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {menu.title}
                </Typography>
                <KeyboardArrowDownIcon sx={{ width: 15.4, height: 14 }} />
              </Box>
            ))}
          </Stack>

          {/* CTA Button */}
          <Button
            component={Link}
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
            Book Free Counseling
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
