import {
  Box,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const About = ({ config }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const backgroundRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleParallax = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      const aboutIntensity = isMobile ? 0.04 : 0.08;
      const backgroundIntensity = isMobile ? 0.15 : 0.25; // Upward parallax for background

      if (elementTop < windowHeight && elementTop > -rect.height) {
        const offset = (windowHeight - elementTop) * aboutIntensity;
        const backgroundOffset =
          (windowHeight - elementTop) * backgroundIntensity;

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${-offset}px)`;
        }

        if (textRef.current) {
          const textOffset = isMobile ? offset * 0.3 : offset * 0.5;
          textRef.current.style.transform = `translateY(${textOffset}px)`;
        }

        // Upward parallax for background (moves up as you scroll down)
        if (backgroundRef.current) {
          backgroundRef.current.style.transform = `translateY(${-backgroundOffset}px)`;
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax */}
      <Box
        ref={backgroundRef}
        sx={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          bottom: "-20%",
          width: "100%",
          height: "140%",
          backgroundImage: "url('/images/background/camera-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          zIndex: 0,
          transform: "translateY(0)",
          transition: "transform 0.1s ease-out",
          pointerEvents: "none",
        }}
      />
      {/* Overlay to ensure content readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.75))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
              {!imageLoaded && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                >
                  <CircularProgress sx={{ color: "primary.main" }} />
                </Box>
              )}
              <CardMedia
                component="img"
                image="/images/about/about.png"
                alt="Photography studio"
                onLoad={() => setImageLoaded(true)}
                onLoadStart={() => setImageLoaded(false)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
                onError={(e) => {
                  setImageLoaded(true);
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
                  "With over 25 years of experience, we specialize in creating timeless memories through our lens. Our passion is to capture authentic emotions and stunning visuals that you'll treasure forever."}
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
