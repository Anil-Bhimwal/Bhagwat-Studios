import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
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

const ServiceDetail = ({ serviceType, open, onClose }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [loadingLightboxImage, setLoadingLightboxImage] = useState(false);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null && data) {
        if (e.key === "ArrowLeft") {
          handlePreviousImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "Escape") {
          setSelectedImageIndex(null);
        }
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      setLoadingLightboxImage(true);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, data]);

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
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.3rem", md: "2rem" },
                fontWeight: 700,
                color: "text.primary",
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
                    onClick={() => setSelectedImageIndex(index)}
                    sx={{
                      borderRadius: 2,
                      height: 300,
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s",
                      cursor: "pointer",
                      position: "relative",
                      transform:
                        hoveredImage === index ? "scale(1.05)" : "scale(1)",
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
                        <CircularProgress sx={{ color: "primary.main" }} />
                      </Box>
                    )}
                    <CardMedia
                      component="img"
                      image={img.url}
                      alt={img.alt}
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
                      <CircularProgress sx={{ color: "primary.main" }} />
                    </Box>
                  )}
                  <Box
                    component="video"
                    src={data.video}
                    controls
                    onLoadStart={() => setLoadingVideo(true)}
                    onCanPlay={() => setLoadingVideo(false)}
                    onLoadedData={() => setLoadingVideo(false)}
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
        </Container>
      </DialogContent>

      {/* Image Lightbox Modal */}
      <Dialog
        open={selectedImageIndex !== null}
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
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
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
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
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
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
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
                  <CircularProgress sx={{ color: "primary.main" }} size={60} />
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
          </>
        )}
      </Dialog>
    </Dialog>
  );
};

export default ServiceDetail;
