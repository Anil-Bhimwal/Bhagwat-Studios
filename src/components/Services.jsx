import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

// Video Recording Animation Component
const VideoRecordingAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState("preparing"); // preparing -> recording -> complete

  useEffect(() => {
    const timings = {
      preparing: 600,
      recording: 800,
    };

    const preparingTimer = setTimeout(() => {
      setPhase("recording");
    }, timings.preparing);

    const recordingTimer = setTimeout(() => {
      setPhase("complete");
      if (onComplete) onComplete();
    }, timings.preparing + timings.recording);

    return () => {
      clearTimeout(preparingTimer);
      clearTimeout(recordingTimer);
    };
  }, [onComplete]);

  return (
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
        bgcolor: "rgba(0, 0, 0, 0.9)",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      {/* Video Camera */}
      <Box
        sx={{
          position: "relative",
          width: 200,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Camera Body */}
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 120,
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Video Screen */}
          <Box
            sx={{
              width: 140,
              height: 90,
              borderRadius: 1,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Film Strip Effect */}
            {phase === "recording" && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "20%",
                    background:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 8px, transparent 8px, transparent 16px)",
                    animation: "filmMove 0.3s linear infinite",
                    "@keyframes filmMove": {
                      "0%": { transform: "translateX(0)" },
                      "100%": { transform: "translateX(16px)" },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "20%",
                    background:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 8px, transparent 8px, transparent 16px)",
                    animation: "filmMove 0.3s linear infinite",
                  }}
                />
              </>
            )}
            {/* Recording Indicator */}
            {phase === "recording" && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "#FF0000",
                  animation: "recordingPulse 1s ease-in-out infinite",
                  "@keyframes recordingPulse": {
                    "0%, 100%": {
                      opacity: 1,
                      boxShadow: "0 0 0 0 rgba(255, 0, 0, 0.7)",
                    },
                    "50%": {
                      opacity: 0.7,
                      boxShadow: "0 0 0 8px rgba(255, 0, 0, 0)",
                    },
                  },
                }}
              />
            )}
            {/* Play Icon Preview */}
            {phase === "preparing" && (
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid rgba(255, 255, 255, 0.8)",
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  marginLeft: "4px",
                }}
              />
            )}
          </Box>
          {/* Microphone */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 12,
              width: 8,
              height: 20,
              borderRadius: "4px",
              bgcolor: "rgba(255, 255, 255, 0.3)",
            }}
          />
        </Box>
        {/* Camera Top */}
        <Box
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 20,
            borderRadius: "12px 12px 0 0",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderBottom: "none",
          }}
        />
      </Box>

      {/* Recording Text */}
      {phase === "recording" && (
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "0.875rem",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#FF0000",
              animation: "recordingPulse 1s ease-in-out infinite",
            }}
          />
          REC
        </Box>
      )}
    </Box>
  );
};

// Camera Capture Animation Component
const CameraCaptureAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState("focusing"); // focusing -> capturing -> flash -> complete

  useEffect(() => {
    const timings = {
      focusing: 800,
      capturing: 400,
      flash: 200,
    };

    const focusingTimer = setTimeout(() => {
      setPhase("capturing");
    }, timings.focusing);

    const capturingTimer = setTimeout(() => {
      setPhase("flash");
    }, timings.focusing + timings.capturing);

    const flashTimer = setTimeout(() => {
      setPhase("complete");
      if (onComplete) onComplete();
    }, timings.focusing + timings.capturing + timings.flash);

    return () => {
      clearTimeout(focusingTimer);
      clearTimeout(capturingTimer);
      clearTimeout(flashTimer);
    };
  }, [onComplete]);

  return (
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
        bgcolor: "rgba(0, 0, 0, 0.9)",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      {/* Camera Viewfinder */}
      <Box
        sx={{
          position: "relative",
          width: 200,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Camera Body */}
        <Box
          sx={{
            position: "relative",
            width: 160,
            height: 120,
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Camera Lens */}
          <Box
            sx={{
              width: 80,
              height: 80,
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
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            />
            {/* Focusing Animation */}
            {phase === "focusing" && (
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px solid rgba(0, 255, 0, 0.6)",
                  animation: "pulse 0.6s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": {
                      transform: "scale(0.8)",
                      opacity: 0.6,
                    },
                    "50%": {
                      transform: "scale(1.1)",
                      opacity: 1,
                    },
                  },
                }}
              />
            )}
            {/* Shutter Animation */}
            {phase === "capturing" && (
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  animation: "shutterClick 0.4s ease-in-out",
                  "@keyframes shutterClick": {
                    "0%": {
                      opacity: 0,
                      transform: "scale(0)",
                    },
                    "50%": {
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
            )}
          </Box>
          {/* Flash */}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 16,
              width: 20,
              height: 20,
              borderRadius: "50%",
              bgcolor: "rgba(255, 255, 255, 0.6)",
              opacity: phase === "capturing" ? 1 : 0.3,
              transition: "opacity 0.2s",
            }}
          />
        </Box>
        {/* Camera Top */}
        <Box
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 20,
            borderRadius: "12px 12px 0 0",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderBottom: "none",
          }}
        />
      </Box>

      {/* Flash Effect */}
      {phase === "flash" && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            animation: "flash 0.2s ease-out",
            "@keyframes flash": {
              "0%": {
                opacity: 1,
              },
              "100%": {
                opacity: 0,
              },
            },
          }}
        />
      )}
    </Box>
  );
};

const Services = ({ config, onServiceClick }) => {
  const serviceRefs = useRef([]);
  const videoRefs = useRef([]);
  const backgroundRef = useRef(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState({});
  const [playingVideos, setPlayingVideos] = useState({});
  const [cameraAnimationComplete, setCameraAnimationComplete] = useState({});
  const [videoAnimationComplete, setVideoAnimationComplete] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const serviceId = entry.target.dataset.serviceId;
          setVisibleServices((prev) => {
            if (!prev.includes(serviceId)) {
              return [...prev, serviceId];
            }
            return prev;
          });
        }
      });
    }, observerOptions);

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Parallax effect for background
    const handleParallax = () => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection || !backgroundRef.current) return;

      const rect = servicesSection.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      const backgroundIntensity = isMobile ? 0.15 : 0.25; // Upward parallax

      if (elementTop < windowHeight && elementTop > -rect.height) {
        const backgroundOffset =
          (windowHeight - elementTop) * backgroundIntensity;
        backgroundRef.current.style.transform = `translateY(${-backgroundOffset}px)`;
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
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", throttledParallax);
      window.removeEventListener("load", handleParallax);
    };
  }, []);

  const services = [
    {
      id: "portrait",
      title: config?.service_1_title || "Portrait Photography",
      description:
        config?.service_1_desc ||
        "Professional headshots and personal portraits that capture your unique personality and style.",
      image: "/images/services/portrait1.JPG",
    },
    {
      id: "event",
      title: config?.service_2_title || "Event Photography",
      description:
        config?.service_2_desc ||
        "Comprehensive coverage of weddings, parties, and corporate events with stunning detail.",
      image: "/images/services/wedding_ceremony.jpg",
    },
    {
      id: "drone",
      title: config?.service_4_title || "Drone Photography",
      description:
        config?.service_4_desc ||
        "Aerial photography and videography services capturing stunning bird's-eye views for real estate, events, and landscapes.",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=800&fit=crop",
      video: "/images/services/cinematography.mp4",
      videoSpeed: 0.5, // Playback speed (0.5 = half speed, 1.0 = normal, 2.0 = double speed)
    },
    {
      id: "prewedding",
      title: config?.service_5_title || "Pre-Wedding Photography",
      description:
        config?.service_5_desc ||
        "Romantic pre-wedding shoots capturing your love story in beautiful locations with creative poses and stunning visuals.",
      image: "/images/services/cinemetography-1.jpg",
    },
  ];

  return (
    <Box
      id="services"
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
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {config?.services_title || "Our Services"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
          }}
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // Even index (0-based) means 2nd, 4th service
            const isVisible = visibleServices.includes(service.id);

            return (
              <Box
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                data-service-id={service.id}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              >
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  sx={{
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                  }}
                >
                  {/* Image Side */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      order: { xs: 1, md: isEven ? 2 : 1 },
                    }}
                  >
                    <Box
                      data-image-card
                      sx={{
                        position: "relative",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                        height: { xs: 300, md: 400 },
                        transform: isVisible
                          ? "translateX(0)"
                          : isEven
                          ? "translateX(100px)"
                          : "translateX(-100px)",
                        opacity: isVisible ? 1 : 0,
                        transition:
                          "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease",
                      }}
                    >
                      {/* Camera Capture Animation */}
                      {isVisible &&
                        !service.video &&
                        !cameraAnimationComplete[service.id] && (
                          <CameraCaptureAnimation
                            onComplete={() => {
                              setCameraAnimationComplete((prev) => ({
                                ...prev,
                                [service.id]: true,
                              }));
                            }}
                          />
                        )}

                      {loadingMedia[service.id] &&
                        cameraAnimationComplete[service.id] && (
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
                              bgcolor: "rgba(0, 0, 0, 0.7)",
                              zIndex: 2,
                            }}
                          >
                            <CircularProgress sx={{ color: "primary.main" }} />
                          </Box>
                        )}
                      {/* Video Recording Animation */}
                      {isVisible &&
                        service.video &&
                        !videoAnimationComplete[service.id] && (
                          <VideoRecordingAnimation
                            onComplete={() => {
                              setVideoAnimationComplete((prev) => ({
                                ...prev,
                                [service.id]: true,
                              }));
                            }}
                          />
                        )}

                      {service.video ? (
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Box
                            component="video"
                            ref={(el) => {
                              videoRefs.current[index] = el;
                              // Set playback rate when video element is ready
                              if (el && service.videoSpeed !== undefined) {
                                el.playbackRate = service.videoSpeed;
                              }
                            }}
                            src={service.video}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            onLoadStart={() => {
                              setLoadingMedia((prev) => ({
                                ...prev,
                                [service.id]: true,
                              }));
                            }}
                            onCanPlay={(e) => {
                              const video = e.target;
                              // Set playback speed when video can play
                              if (service.videoSpeed !== undefined) {
                                video.playbackRate = service.videoSpeed;
                              }
                              setLoadingMedia((prev) => ({
                                ...prev,
                                [service.id]: false,
                              }));
                            }}
                            onLoadedData={(e) => {
                              const video = e.target;
                              // Set playback speed when video data is loaded
                              if (service.videoSpeed !== undefined) {
                                video.playbackRate = service.videoSpeed;
                              }
                              setLoadingMedia((prev) => ({
                                ...prev,
                                [service.id]: false,
                              }));
                            }}
                            onPlay={() => {
                              setPlayingVideos((prev) => ({
                                ...prev,
                                [service.id]: true,
                              }));
                            }}
                            onPause={() => {
                              setPlayingVideos((prev) => ({
                                ...prev,
                                [service.id]: false,
                              }));
                            }}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              cursor: "default",
                              transition:
                                "transform 0.3s ease, opacity 0.6s ease-in-out",
                              opacity:
                                loadingMedia[service.id] ||
                                !videoAnimationComplete[service.id]
                                  ? 0
                                  : 1,
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              // Don't open service detail on video click
                            }}
                            onError={(e) => {
                              setLoadingMedia((prev) => ({
                                ...prev,
                                [service.id]: false,
                              }));
                              // Fallback to image if video fails
                              e.target.style.display = "none";
                              const img =
                                e.target.parentElement?.nextElementSibling;
                              if (img) img.style.display = "block";
                            }}
                          />
                          {/* Play Button Overlay - Desktop and Mobile */}
                          {!playingVideos[service.id] && (
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
                                bgcolor: "rgba(0, 0, 0, 0.3)",
                                zIndex: 3,
                                cursor: "pointer",
                                "&:hover": {
                                  bgcolor: "rgba(0, 0, 0, 0.4)",
                                },
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const video = videoRefs.current[index];
                                if (video) {
                                  if (service.videoSpeed !== undefined) {
                                    video.playbackRate = service.videoSpeed;
                                  }
                                  video.play().catch(() => {
                                    // Handle play error silently
                                  });
                                }
                              }}
                            >
                              <IconButton
                                sx={{
                                  bgcolor: "rgba(0, 0, 0, 0.6)",
                                  color: "rgba(255, 255, 255, 0.95)",
                                  width: 80,
                                  height: 80,
                                  "&:hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.8)",
                                    transform: "scale(1.1)",
                                  },
                                  transition: "all 0.3s ease",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const video = videoRefs.current[index];
                                  if (video) {
                                    if (service.videoSpeed !== undefined) {
                                      video.playbackRate = service.videoSpeed;
                                    }
                                    video.play().catch(() => {
                                      // Handle play error silently
                                    });
                                  }
                                }}
                              >
                                <PlayCircleIcon
                                  sx={{
                                    fontSize: 60,
                                    color: "rgba(255, 255, 255, 0.95)",
                                  }}
                                />
                              </IconButton>
                            </Box>
                          )}
                        </Box>
                      ) : null}
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        loading="lazy"
                        onLoadStart={() => {
                          if (!service.video) {
                            setLoadingMedia((prev) => ({
                              ...prev,
                              [service.id]: true,
                            }));
                          }
                        }}
                        onLoad={() => {
                          setLoadingMedia((prev) => ({
                            ...prev,
                            [service.id]: false,
                          }));
                        }}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                          transition:
                            "transform 0.3s ease, opacity 0.6s ease-in-out",
                          display: service.video ? "none" : "block",
                          opacity:
                            loadingMedia[service.id] ||
                            !cameraAnimationComplete[service.id]
                              ? 0
                              : 1,
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onClick={(e) => {
                          const imageCard = e.currentTarget
                            .closest("[data-service-id]")
                            ?.querySelector("[data-image-card]");
                          if (imageCard) {
                            const rect = imageCard.getBoundingClientRect();
                            const originPosition = {
                              x: rect.left + rect.width / 2,
                              y: rect.top + rect.height / 2,
                              width: rect.width,
                              height: rect.height,
                            };
                            onServiceClick(service.id, originPosition);
                          } else {
                            onServiceClick(service.id);
                          }
                        }}
                        onError={(e) => {
                          setLoadingMedia((prev) => ({
                            ...prev,
                            [service.id]: false,
                          }));
                          e.target.style.display = "none";
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Content Side */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      order: { xs: 2, md: isEven ? 1 : 2 },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: {
                          xs: "center",
                          md: isEven ? "right" : "left",
                        },
                        transform: isVisible
                          ? "translateX(0)"
                          : isEven
                          ? "translateX(-100px)"
                          : "translateX(100px)",
                        opacity: isVisible ? 1 : 0,
                        transition:
                          "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease",
                        transitionDelay: "0.2s",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.8rem", md: "2rem" },
                          fontWeight: 600,
                          color: "text.primary",
                          mb: 2,
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                          mb: 3,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={(e) => {
                          // Get the service card image position
                          const imageCard = e.currentTarget
                            .closest("[data-service-id]")
                            ?.querySelector("[data-image-card]");
                          if (imageCard) {
                            const rect = imageCard.getBoundingClientRect();
                            const originPosition = {
                              x: rect.left + rect.width / 2,
                              y: rect.top + rect.height / 2,
                              width: rect.width,
                              height: rect.height,
                            };
                            onServiceClick(service.id, originPosition);
                          } else {
                            onServiceClick(service.id);
                          }
                        }}
                        sx={{
                          bgcolor: "primary.main",
                          background:
                            "linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)",
                          px: 4,
                          py: 1.5,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          boxShadow: "0 4px 15px rgba(231, 76, 60, 0.3)",
                          "&:hover": {
                            bgcolor: "primary.dark",
                            boxShadow: "0 6px 20px rgba(231, 76, 60, 0.4)",
                          },
                        }}
                      >
                        View Gallery
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
