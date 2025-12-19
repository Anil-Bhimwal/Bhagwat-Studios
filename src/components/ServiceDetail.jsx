import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Grid,
  CardMedia,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const serviceData = {
  portrait: {
    title: 'Portrait Photography',
    images: [
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', alt: 'Professional headshot' },
      { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop', alt: 'Studio portrait' },
      { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop', alt: 'Business portrait' },
      { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop', alt: 'Creative portrait' },
      { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop', alt: 'Fashion portrait' },
      { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=600&fit=crop', alt: 'Outdoor portrait' },
    ],
    videoEmoji: '🎬',
    videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop',
  },
  event: {
    title: 'Event Photography',
    images: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop', alt: 'Wedding ceremony' },
      { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop', alt: 'Party celebration' },
      { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop', alt: 'Wedding reception' },
      { url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=600&fit=crop', alt: 'Corporate event' },
      { url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop', alt: 'Birthday party' },
      { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=600&fit=crop', alt: 'Special event' },
    ],
    videoEmoji: '📹',
    videoThumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=400&fit=crop',
  },
  commercial: {
    title: 'Commercial Photography',
    images: [
      { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop', alt: 'Product display' },
      { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', alt: 'Watch photography' },
      { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop', alt: 'Headphone product' },
      { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', alt: 'Shoe photography' },
      { url: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop', alt: 'Food photography' },
      { url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop', alt: 'Tech product' },
    ],
    videoEmoji: '🎥',
    videoThumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
  },
};

const ServiceDetail = ({ serviceType, open, onClose }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const data = serviceData[serviceType];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!data) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.default',
          maxHeight: '100vh',
          m: 0,
          height: '100vh',
        },
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          zIndex: 10,
          p: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.3rem', md: '2rem' },
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              {data.title}
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                bgcolor: 'primary.main',
                background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <DialogContent sx={{ p: 0, overflow: 'auto' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Gallery
            </Typography>
            <Grid container spacing={2}>
              {data.images.map((img, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                    sx={{
                      borderRadius: 2,
                      height: 300,
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s',
                      cursor: 'pointer',
                      transform: hoveredImage === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img.url}
                      alt={img.alt}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.style.cssText = `
                          width: 100%;
                          height: 100%;
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 3rem;
                        `;
                        fallback.textContent = '📷';
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Behind the Scenes
            </Typography>
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: { xs: 2, md: 4 },
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  height: { xs: 250, md: 400 },
                  position: 'relative',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  mb: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={data.videoThumbnail}
                  alt="Video thumbnail"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'rgba(255,255,255,0.95)',
                      color: 'secondary.main',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      '&:hover': {
                        bgcolor: 'white',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Experience our professional {data.title.toLowerCase()} services. Watch how we capture every perfect moment with precision and artistry.
              </Typography>
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetail;

