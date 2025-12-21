import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = ({ config }) => {
  const studioName = config?.studio_name || "Bhagwat Film Studios";
  const tagline = config?.tagline || "Capture Your Perfect Moment";

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        py: { xs: 4, md: 3 },
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="lg">
        {/* Contact Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {config?.contact_title || "Let's Create Together"}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {config?.contact_subtitle ||
              "Ready to capture your special moments? Get in touch with us today to discuss your photography needs."}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Half */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 1,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                {studioName}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mb: 2,
                }}
              >
                {tagline}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Professional photography services in Bandikui, Rajasthan. Creating
              timeless memories through our lens.
            </Typography>

            {/* Social Media Links */}
            <Box>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mb: 1.5,
                  fontWeight: 500,
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <IconButton
                  component="a"
                  href="https://youtube.com/@bhagwatstudiobandikuipro-n4138?si=3hyvrnmdJAmDu-mh"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "background.default",
                    color: "text.secondary",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "#FF0000",
                      color: "white",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                    },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/narendra.bhagwat.501?utm_source=qr&igsh=MXNtOTYwcWk2aDk0bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "background.default",
                    color: "text.secondary",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "#E4405F",
                      color: "white",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(228, 64, 95, 0.3)",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/share/17pzBsMBMh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "background.default",
                    color: "text.secondary",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "#1877F2",
                      color: "white",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(24, 119, 242, 0.3)",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Half */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                color: "text.primary",
                mb: 2,
                fontSize: { xs: "1.1rem", md: "1.2rem" },
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                mb: 3,
              }}
            >
              {/* Contact Person */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "background.default",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <PersonIcon sx={{ color: "text.secondary", fontSize: 24 }} />
                </Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Narendra Bhagwat
                </Typography>
              </Box>
              <Box
                component={Link}
                href="tel:+919928961229"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "opacity 0.3s",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "background.default",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      fontSize: { xs: 20, md: 22 },
                      color: "text.secondary",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  +91 9928961229
                </Typography>
              </Box>

              <Box
                component={Link}
                href="mailto:bhagwatnarendra247@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "opacity 0.3s",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "background.default",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon
                    sx={{
                      fontSize: { xs: 20, md: 22 },
                      color: "text.secondary",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  bhagwatnarendra247@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  color: "text.secondary",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "background.default",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: { xs: 20, md: 22 },
                      color: "text.secondary",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Samar eye hospital, baswa road, Dalvriya ka bass, Bandikui,
                  Rajasthan 303327
                </Typography>
              </Box>
            </Box>

            {/* Google Maps Button */}
            <Button
              variant="contained"
              startIcon={<MapIcon />}
              component="a"
              href="https://www.google.com/maps/place/BHAGWAT+STUDIO+BANDIKUI+pro-Narendra+bhagwat/@26.6862609,76.0650518,10z/data=!4m10!1m2!2m1!1sbhagwat+studios!3m6!1s0x397271ea753b04cd:0xb976fada4d73fa51!8m2!3d27.0585231!4d76.572043!15sCg9iaGFnd2F0IHN0dWRpb3OSARJwaG90b2dyYXBoeV9zdHVkaW_gAQA!16s%2Fg%2F11hwf8z16z!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "primary.main",
                background: "linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)",
                px: 3,
                py: 1.5,
                "&:hover": {
                  bgcolor: "primary.dark",
                  boxShadow: "0 6px 20px rgba(231, 76, 60, 0.4)",
                },
              }}
            >
              Open in Google Maps
            </Button>
          </Grid>
        </Grid>

        {/* Copyright Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
            }}
          >
            {config?.footer_text ||
              "© 2025 Bhagwat Film Studios. All rights reserved."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
