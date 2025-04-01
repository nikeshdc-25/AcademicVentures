import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Typography,
  Divider,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon, CalendarToday, Schedule, School, Public } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookCounselling = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    countryOfInterest: "",
    educationLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast.success(
      <div>
        <Typography variant="subtitle1" fontWeight="bold" color="inherit">
          Thank you for booking a counselling session!
        </Typography>
        <Typography variant="body2" color="inherit">
          Our education expert will contact you shortly at {formData.contact}.
        </Typography>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: "8px",
        },
      }
    );
    
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: isMobile ? 0 : 3,
          overflow: "hidden",
          background: "linear-gradient(145deg, #f8faff, #ffffff)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{
          background: "linear-gradient(135deg, #1976d2, #2196f3)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 3,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ff5722, #ff9800)",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <School sx={{ mr: 1.5, fontSize: "1.8rem" }} />
          <Typography variant="h6" fontWeight="bold">
            Book Free Counselling Session
          </Typography>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ py: 3, px: isMobile ? 2 : 4 }}>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Fill out the form below and our education expert will contact you to schedule 
          your free counselling session at your preferred time.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number *"
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Country of Interest</InputLabel>
                <Select
                  name="countryOfInterest"
                  value={formData.countryOfInterest}
                  onChange={handleChange}
                  label="Country of Interest"
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  }}
                  startAdornment={<Public sx={{ mr: 1, color: "action.active" }} />}
                >
                  <MenuItem value="">Select a country</MenuItem>
                  <MenuItem value="USA">United States 🇺🇸</MenuItem>
                  <MenuItem value="UK">United Kingdom 🇬🇧</MenuItem>
                  <MenuItem value="Canada">Canada 🇨🇦</MenuItem>
                  <MenuItem value="Australia">Australia 🇦🇺</MenuItem>
                  <MenuItem value="Germany">Germany 🇩🇪</MenuItem>
                  <MenuItem value="Others">Other Countries</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Current Education Level</InputLabel>
                <Select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  label="Current Education Level"
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  }}
                >
                  <MenuItem value="">Select your level</MenuItem>
                  <MenuItem value="High School">High School</MenuItem>
                  <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                  <MenuItem value="Graduate">Graduate</MenuItem>
                  <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Preferred Date"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                  startAdornment: <CalendarToday sx={{ mr: 1, color: "action.active" }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Preferred Time"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                  startAdornment: <Schedule sx={{ mr: 1, color: "action.active" }} />,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Subject of Interest"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Your Questions or Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "rgba(25, 118, 210, 0.03)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <Divider sx={{ my: 1 }} />

      <DialogActions sx={{ py: 2, px: 3, justifyContent: "space-between" }}>
        <Button
          onClick={onClose}
          variant="outlined"
          color="secondary"
          sx={{
            borderRadius: "8px",
            px: 4,
            py: 1,
            fontWeight: "bold",
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "8px",
            px: 4,
            py: 1,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #1976d2, #2196f3)",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #1976d2)",
              boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
            },
          }}
        >
          Book Free Session
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookCounselling;