import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';

const Services = ({ config, onServiceClick }) => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const handleParallax = () => {
      const isMobile = window.innerWidth <= 768;
      const cardIntensity = isMobile ? 0.03 : 0.05;

      serviceCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementTop > -rect.height) {
          const offset = (windowHeight - elementTop) * cardIntensity;
          const stagger = index * 0.02;
          const scale = card.classList.contains('hover-active') ? 1.05 : 1;
          card.style.transform = `translateY(${-offset * (1 + stagger)}px) scale(${scale})`;
        }
      });
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

    window.addEventListener('scroll', throttledParallax);
    window.addEventListener('load', handleParallax);

    return () => {
      window.removeEventListener('scroll', throttledParallax);
      window.removeEventListener('load', handleParallax);
    };
  }, []);

  const services = [
    {
      id: 'portrait',
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      title: config?.service_1_title || 'Portrait Photography',
      description: config?.service_1_desc || 'Professional headshots and personal portraits that capture your unique personality and style.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    },
    {
      id: 'event',
      icon: <EventIcon sx={{ fontSize: 40 }} />,
      title: config?.service_2_title || 'Event Photography',
      description: config?.service_2_desc || 'Comprehensive coverage of weddings, parties, and corporate events with stunning detail.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
    },
    {
      id: 'commercial',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: config?.service_3_title || 'Commercial Photography',
      description: config?.service_3_desc || 'High-quality product and brand photography for businesses and marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            mb: 4,
          }}
        >
          {config?.services_title || 'Our Services'}
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                ref={(el) => (serviceCardsRef.current[index] = el)}
                onClick={() => onServiceClick(service.id)}
                onMouseEnter={(e) => e.currentTarget.classList.add('hover-active')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-active')}
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    opacity: 0.35,
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt=""
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    py: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation();
                      onServiceClick(service.id);
                    }}
                    sx={{
                      bgcolor: 'primary.main',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

