import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const About = ({ config }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      const aboutIntensity = isMobile ? 0.04 : 0.08;

      if (elementTop < windowHeight && elementTop > -rect.height) {
        const offset = (windowHeight - elementTop) * aboutIntensity;

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${-offset}px)`;
        }

        if (textRef.current) {
          const textOffset = isMobile ? offset * 0.3 : offset * 0.5;
          textRef.current.style.transform = `translateY(${textOffset}px)`;
        }
      }
    };

    const throttledParallax = (() => {
      let lastCall = 0;
      return () => {
        const now = Date.now();
        if (now - lastCall < 10) return;
        lastCall = now;
        handleParallax();
      };
    })();

    window.addEventListener("scroll", throttledParallax);
    window.addEventListener("load", handleParallax);

    return () => {
      window.removeEventListener("scroll", throttledParallax);
      window.removeEventListener("load", handleParallax);
    };
  }, []);

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "background.default",
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              ref={imageRef}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                height: { xs: 350, md: 500 },
              }}
            >
              <CardMedia
                component="img"
                image="/images/about/about.png"
                alt="Photography studio"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ref={textRef}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                {config?.about_title || "About Our Studio"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {config?.about_text ||
                  "With over 10 years of experience, we specialize in creating timeless memories through our lens. Our passion is to capture authentic emotions and stunning visuals that you'll treasure forever."}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 3,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "secondary.main",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    3000+
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      mt: 0.5,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Happy Clients
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "secondary.main",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    25+
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      mt: 0.5,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Years Experience
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
