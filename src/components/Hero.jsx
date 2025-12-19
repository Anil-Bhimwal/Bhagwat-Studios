import { Box, Button, Container, Typography } from "@mui/material";
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

  // Camera Loader Component
  const CameraLoader = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Camera Body */}
        <Box
          sx={{
            position: "relative",
            width: 100,
            height: 80,
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Camera Lens */}
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "4px solid rgba(255, 255, 255, 0.4)",
              bgcolor: "rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Inner Lens Circle */}
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
            {/* Shutter Animation */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                bgcolor: "rgba(255, 255, 255, 0.9)",
                opacity: 0,
                animation: "shutterClick 1.5s ease-in-out infinite",
                "@keyframes shutterClick": {
                  "0%": {
                    opacity: 0,
                    transform: "scale(0)",
                  },
                  "45%": {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                  "55%": {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale(0)",
                  },
                },
              }}
            />
          </Box>
          {/* Flash */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 12,
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "rgba(255, 255, 255, 0.6)",
              animation: "flash 1.5s ease-in-out infinite",
              "@keyframes flash": {
                "0%, 100%": {
                  opacity: 0.3,
                  boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
                },
                "48%": {
                  opacity: 0.3,
                  boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
                },
                "50%": {
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
                },
                "52%": {
                  opacity: 0.3,
                  boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
                },
              },
            }}
          />
        </Box>
        {/* Camera Top */}
        <Box
          sx={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 12,
            borderRadius: "8px 8px 0 0",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderBottom: "none",
          }}
        />
      </Box>
      {/* Loading Text */}
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.95rem",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "0.1em",
          animation: "pulse 1.5s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": {
              opacity: 0.6,
            },
            "50%": {
              opacity: 1,
            },
          },
        }}
      >
        Capturing moments...
      </Typography>
    </Box>
  );

  return (
    <>
      {/* Full Page Loader */}
      {!imageLoaded && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            zIndex: 9999,
            background:
              "linear-gradient(135deg, rgba(15, 15, 15, 1) 0%, rgba(26, 26, 26, 1) 100%)",
          }}
        >
          <CameraLoader />
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
          background: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), 
                       url('/images/hero/background.jpg') center/cover`,
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: { xs: 4, md: 8 },
          px: 2,
          transition: "opacity 0.5s ease",
          opacity: imageLoaded ? 1 : 0,
        }}
      >
        <Container maxWidth="md">
          <Box
            ref={heroRef}
            sx={{
              position: "relative",
              zIndex: 1,
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease",
              animation: imageLoaded ? "fadeIn 1s ease-in" : "none",
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
    </>
  );
};

export default Hero;
