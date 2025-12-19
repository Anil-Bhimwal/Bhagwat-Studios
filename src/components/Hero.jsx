import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Hero = ({ config }) => {
  const heroRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = "/images/hero/background.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true); // Still show content even if image fails
    };

    const handleParallax = () => {
      const scrolled = window.scrollY;
      const isMobile = window.innerWidth <= 768;
      const heroIntensity = isMobile ? 0.15 : 0.3;

      if (heroRef.current) {
        const opacity = Math.max(1 - scrolled / (isMobile ? 400 : 500), 0);
        heroRef.current.style.transform = `translateY(${
          scrolled * heroIntensity
        }px)`;
        heroRef.current.style.opacity = opacity;
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: imageLoaded
          ? `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), 
             url('/images/hero/background.jpg') center/cover`
          : "linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%)",
        minHeight: { xs: "60vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 4, md: 8 },
        px: 2,
        transition: "background 0.5s ease",
      }}
    >
      {!imageLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <CircularProgress sx={{ color: "primary.main" }} size={50} />
        </Box>
      )}
      <Container maxWidth="md">
        <Box
          ref={heroRef}
          sx={{
            position: "relative",
            zIndex: 1,
            animation: "fadeIn 1s ease-in",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              color: "white",
              mb: 2,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              lineHeight: 1.2,
            }}
          >
            {config?.hero_title || "Capture Your Perfect Moment"}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "rgba(255,255,255,0.95)",
              mb: 4,
              textShadow: "0 1px 5px rgba(0,0,0,0.3)",
              lineHeight: 1.6,
            }}
          >
            {config?.hero_subtitle ||
              "Professional photography that tells your unique story with elegance and artistry"}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              bgcolor: "primary.main",
              background: "linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)",
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              boxShadow: "0 4px 15px rgba(231, 76, 60, 0.3)",
              "&:hover": {
                bgcolor: "primary.dark",
                boxShadow: "0 6px 20px rgba(231, 76, 60, 0.4)",
              },
            }}
          >
            {config?.cta_button || "Book a Session"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
