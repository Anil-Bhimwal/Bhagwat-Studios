import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  CardMedia,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const serviceData = {
  portrait: {
    title: "Portrait Photography",
    images: [
      { url: "/images/services/portrait2.png", alt: "Portrait photography" },
      { url: "/images/services/portrait3.png", alt: "Portrait photography" },
      { url: "/images/services/portrait4.png", alt: "Portrait photography" },
      { url: "/images/services/portrait5.png", alt: "Portrait photography" },
      { url: "/images/services/portrait6.png", alt: "Portrait photography" },
      { url: "/images/services/portrait7.png", alt: "Portrait photography" },
    ],
    videoEmoji: "🎬",
    videoThumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop",
  },
  event: {
    title: "Event Photography",
    images: [
      { url: "/images/services/event2.png", alt: "Event photography" },
      { url: "/images/services/event3.jpg", alt: "Event photography" },
      { url: "/images/services/event4.png", alt: "Event photography" },
      { url: "/images/services/event5.png", alt: "Event photography" },
      { url: "/images/services/event6.png", alt: "Event photography" },
      { url: "/images/services/event7.jpg", alt: "Event photography" },
    ],
    videoEmoji: "📹",
    videoThumbnail:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=400&fit=crop",
  },
  drone: {
    title: "Drone Photography",
    images: [
      { url: "/images/services/drone1.png", alt: "Drone photography" },
      { url: "/images/services/drone2.png", alt: "Drone photography" },
      { url: "/images/services/drone3.png", alt: "Drone photography" },
      { url: "/images/services/drone4.png", alt: "Drone photography" },
      { url: "/images/services/drone5.png", alt: "Drone photography" },
      { url: "/images/services/drone6.jpg", alt: "Drone photography" },
    ],
    video: "/images/services/cinematography.mp4",
    videoSpeed: 0.5,
    videoEmoji: "🚁",
    videoThumbnail:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
  },
  prewedding: {
    title: "Pre-Wedding Photography",
    images: [
      {
        url: "/images/services/prewedding1.JPG",
        alt: "Pre-wedding photography",
      },
      {
        url: "/images/services/prewedding2.JPG",
        alt: "Pre-wedding photography",
      },
      {
        url: "/images/services/prewedding3.JPG",
        alt: "Pre-wedding photography",
      },
      {
        url: "/images/services/prewedding4.JPG",
        alt: "Pre-wedding photography",
      },
      {
        url: "/images/services/prewedding5.JPG",
        alt: "Pre-wedding photography",
      },
      {
        url: "/images/services/prewedding6.jpg",
        alt: "Pre-wedding photography",
      },
    ],
    videoEmoji: "💕",
    videoThumbnail:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=400&fit=crop",
  },
};

// Compact Camera Loader Component (40x40)
const CameraLoaderSmall = () => (
  <Box
    sx={{
      position: "relative",
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Camera Body */}
    <Box
      sx={{
        position: "relative",
        width: 33,
        height: 27,
        borderRadius: 1.5,
        bgcolor: "rgba(255, 255, 255, 0.1)",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Camera Lens */}
      <Box
        sx={{
          width: 17,
          height: 17,
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.4)",
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
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
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
          top: 3,
          right: 4,
          width: 4,
          height: 4,
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
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
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
        top: -3,
        left: "50%",
        transform: "translateX(-50%)",
        width: 20,
        height: 4,
        borderRadius: "4px 4px 0 0",
        bgcolor: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderBottom: "none",
      }}
    />
  </Box>
);

// Custom Zoom transition component that emerges from origin position
const ZoomFromOrigin = React.forwardRef(function ZoomFromOrigin(
  { children, originPosition, in: inProp, ...props },
  ref
) {
  const getTransformOrigin = () => {
    if (!originPosition || typeof window === "undefined") {
      return "center center";
    }

    const { x, y } = originPosition;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const originX = (x / viewportWidth) * 100;
    const originY = (y / viewportHeight) * 100;

    return `${Math.max(0, Math.min(100, originX))}% ${Math.max(
      0,
      Math.min(100, originY)
    )}%`;
  };

  return (
    <Zoom
      ref={ref}
      {...props}
      in={inProp}
      style={{
        transformOrigin: getTransformOrigin(),
      }}
      timeout={600}
    >
      {children}
    </Zoom>
  );
});

const ServiceDetail = ({ serviceType, open, onClose, originPosition }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [loadingLightboxImage, setLoadingLightboxImage] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const data = serviceData[serviceType];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setSelectedImageIndex(null);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close lightbox when switching to mobile
  useEffect(() => {
    if (!isDesktop && selectedImageIndex !== null) {
      setSelectedImageIndex(null);
    }
  }, [isDesktop, selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null && data && isDesktop) {
        if (e.key === "ArrowLeft") {
          handlePreviousImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "Escape") {
          setSelectedImageIndex(null);
        }
      }
    };

    if (selectedImageIndex !== null && isDesktop) {
      document.addEventListener("keydown", handleKeyDown);
      setLoadingLightboxImage(true);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, data, isDesktop]);

  const handleNextImage = () => {
    if (data && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev < data.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePreviousImage = () => {
    if (data && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev > 0 ? prev - 1 : data.images.length - 1
      );
    }
  };

  if (!data) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      TransitionComponent={originPosition ? ZoomFromOrigin : undefined}
      TransitionProps={originPosition ? { originPosition } : undefined}
      PaperProps={{
        sx: {
          bgcolor: "background.default",
          maxHeight: "100vh",
          m: 0,
          height: "100vh",
        },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "background.paper",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          zIndex: 10,
          p: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "nowrap",
              minWidth: 0,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "clamp(1rem, 4vw, 1.5rem)",
                  md: "clamp(1.2rem, 3vw, 2rem)",
                  lg: "2rem",
                },
                fontWeight: 700,
                color: "text.primary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
                minWidth: 0,
              }}
            >
              {data.title}
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                bgcolor: "primary.main",
                background: "linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)",
                color: "white",
                flexShrink: 0,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <DialogContent sx={{ p: 0, overflow: "auto" }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              {data.images.map((img, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                    onClick={() => {
                      // Only open lightbox on desktop
                      if (isDesktop) {
                        setSelectedImageIndex(index);
                      }
                    }}
                    sx={{
                      borderRadius: 2,
                      height: 300,
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s",
                      cursor: isDesktop ? "pointer" : "default",
                      position: "relative",
                      transform:
                        hoveredImage === index && isDesktop
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    {loadingImages[index] && (
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
                        <CameraLoaderSmall />
                      </Box>
                    )}
                    <CardMedia
                      component="img"
                      image={img.url}
                      alt={img.alt}
                      loading="lazy"
                      onLoad={() => {
                        setLoadingImages((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                      onLoadStart={() => {
                        setLoadingImages((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s",
                        opacity: loadingImages[index] ? 0 : 1,
                        transform:
                          hoveredImage === index ? "scale(1.1)" : "scale(1)",
                      }}
                      onError={(e) => {
                        setLoadingImages((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                        e.target.style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.style.cssText = `
                          width: 100%;
                          height: 100%;
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 3rem;
                        `;
                        fallback.textContent = "📷";
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {data.video && (
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Behind the Scenes
              </Typography>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  p: { xs: 2, md: 4 },
                  textAlign: "center",
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    height: { xs: 250, md: 400 },
                    position: "relative",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  {loadingVideo && (
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
                      <CameraLoaderSmall />
                    </Box>
                  )}
                  <Box
                    component="video"
                    src={data.video}
                    controls
                    ref={(video) => {
                      // Set playback speed when video element is ready
                      if (video && data.videoSpeed !== undefined) {
                        video.playbackRate = data.videoSpeed;
                      }
                    }}
                    onLoadStart={() => setLoadingVideo(true)}
                    onCanPlay={(e) => {
                      const video = e.target;
                      // Set playback speed when video can play
                      if (data.videoSpeed !== undefined) {
                        video.playbackRate = data.videoSpeed;
                      }
                      setLoadingVideo(false);
                    }}
                    onLoadedData={(e) => {
                      const video = e.target;
                      // Set playback speed when video data is loaded
                      if (data.videoSpeed !== undefined) {
                        video.playbackRate = data.videoSpeed;
                      }
                      setLoadingVideo(false);
                    }}
                    onError={() => {
                      setLoadingVideo(false);
                    }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: loadingVideo ? 0 : 1,
                      transition: "opacity 0.3s",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Experience our professional {data.title.toLowerCase()}{" "}
                  services. Watch how we capture every perfect moment with
                  precision and artistry.
                </Typography>
              </Box>
            </Box>
          )}

          {/* Social Media Links Section */}
          <Box
            sx={{
              mt: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                fontWeight: 600,
                color: "text.primary",
                mb: 1,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Follow Our Journey
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.95rem",
                mb: 3,
                fontStyle: "italic",
              }}
            >
              See more stunning moments and behind-the-scenes magic
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="https://www.instagram.com/narendra.bhagwat.501?utm_source=qr&igsh=MXNtOTYwcWk2aDk0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "text.primary",
                  textDecoration: "none",
                  bgcolor: "background.paper",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(225, 48, 108, 0.1)",
                    color: "#E1306C",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(225, 48, 108, 0.2)",
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: 24 }} />
                <Typography component="span" sx={{ fontSize: "0.95rem" }}>
                  View on Instagram
                </Typography>
              </Link>

              <Link
                href="https://www.facebook.com/share/17pzBsMBMh/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "text.primary",
                  textDecoration: "none",
                  bgcolor: "background.paper",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(24, 119, 242, 0.1)",
                    color: "#1877F2",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(24, 119, 242, 0.2)",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 24 }} />
                <Typography component="span" sx={{ fontSize: "0.95rem" }}>
                  Connect on Facebook
                </Typography>
              </Link>

              <Link
                href="https://youtube.com/@bhagwatstudiobandikuipro-n4138?si=3hyvrnmdJAmDu-mh"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "text.primary",
                  textDecoration: "none",
                  bgcolor: "background.paper",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 0, 0, 0.1)",
                    color: "#FF0000",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(255, 0, 0, 0.2)",
                  },
                }}
              >
                <YouTubeIcon sx={{ fontSize: 24 }} />
                <Typography component="span" sx={{ fontSize: "0.95rem" }}>
                  Watch on YouTube
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </DialogContent>

      {/* Image Lightbox Modal - Desktop Only */}
      <Dialog
        open={selectedImageIndex !== null && isDesktop}
        onClose={() => setSelectedImageIndex(null)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0, 0, 0, 0.95)",
            maxWidth: "95vw",
            maxHeight: "95vh",
            m: 2,
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedImageIndex(null)}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1301,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedImageIndex !== null && data && (
          <>
            <IconButton
              onClick={handlePreviousImage}
              sx={{
                position: "fixed",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1301,
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "fixed",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1301,
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                maxWidth: "90vw",
                maxHeight: "90vh",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {loadingLightboxImage && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                  }}
                >
                  <CameraLoaderSmall />
                </Box>
              )}
              <Box
                sx={{
                  maxWidth: "100%",
                  maxHeight: "calc(90vh + 100px)",
                  overflow: "hidden",
                  clipPath: "inset(0 0 100px 0)",
                  opacity: loadingLightboxImage ? 0 : 1,
                  transition: "opacity 0.3s",
                }}
              >
                <CardMedia
                  component="img"
                  image={data.images[selectedImageIndex]?.url}
                  alt={data.images[selectedImageIndex]?.alt}
                  onLoad={() => setLoadingLightboxImage(false)}
                  onLoadStart={() => setLoadingLightboxImage(true)}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "calc(90vh + 100px)",
                    objectFit: "contain",
                    objectPosition: "top",
                  }}
                  onError={(e) => {
                    setLoadingLightboxImage(false);
                    e.target.style.display = "none";
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.875rem",
                }}
              >
                {selectedImageIndex + 1} / {data.images.length}
              </Box>
            </Box>
          </>
        )}
      </Dialog>
    </Dialog>
  );
};

export default ServiceDetail;
