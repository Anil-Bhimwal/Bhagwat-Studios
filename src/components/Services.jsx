import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid, Button, CardMedia, CircularProgress } from '@mui/material';

const Services = ({ config, onServiceClick }) => {
  const serviceRefs = useRef([]);
  const videoRefs = useRef([]);
  const backgroundRef = useRef(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
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
        const backgroundOffset = (windowHeight - elementTop) * backgroundIntensity;
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
      id: 'portrait',
      title: config?.service_1_title || 'Portrait Photography',
      description: config?.service_1_desc || 'Professional headshots and personal portraits that capture your unique personality and style.',
      image: '/images/services/portrait1.JPG',
    },
    {
      id: 'event',
      title: config?.service_2_title || 'Event Photography',
      description: config?.service_2_desc || 'Comprehensive coverage of weddings, parties, and corporate events with stunning detail.',
      image: '/images/services/wedding_ceremony.jpg',
    },
    {
      id: 'drone',
      title: config?.service_4_title || 'Drone Photography',
      description: config?.service_4_desc || 'Aerial photography and videography services capturing stunning bird\'s-eye views for real estate, events, and landscapes.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=800&fit=crop',
      video: '/images/services/cinematography.MP4',
    },
    {
      id: 'prewedding',
      title: config?.service_5_title || 'Pre-Wedding Photography',
      description: config?.service_5_desc || 'Romantic pre-wedding shoots capturing your love story in beautiful locations with creative poses and stunning visuals.',
      image: '/images/services/cinemetography-1.jpg',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        bgcolor: 'background.default',
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
          background: "linear-gradient(to bottom, rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.75))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {config?.services_title || 'Our Services'}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
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
                  transition: 'opacity 0.6s ease',
                }}
              >
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
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
                      sx={{
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                        height: { xs: 300, md: 400 },
                        transform: isVisible
                          ? 'translateX(0)'
                          : isEven
                          ? 'translateX(100px)'
                          : 'translateX(-100px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease',
                      }}
                    >
                      {loadingMedia[service.id] && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 2,
                          }}
                        >
                          <CircularProgress sx={{ color: 'primary.main' }} />
                        </Box>
                      )}
                      {service.video ? (
                        <Box
                          component="video"
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={service.video}
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          onLoadStart={() => {
                            setLoadingMedia((prev) => ({ ...prev, [service.id]: true }));
                          }}
                          onCanPlay={() => {
                            setLoadingMedia((prev) => ({ ...prev, [service.id]: false }));
                          }}
                          onLoadedData={() => {
                            setLoadingMedia((prev) => ({ ...prev, [service.id]: false }));
                          }}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, opacity 0.3s',
                            opacity: loadingMedia[service.id] ? 0 : 1,
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                          onClick={() => onServiceClick(service.id)}
                          onMouseEnter={(e) => {
                            const video = e.target;
                            video.play().catch(() => {
                              // Handle play error silently
                            });
                          }}
                          onMouseLeave={(e) => {
                            const video = e.target;
                            video.pause();
                            video.currentTime = 0; // Reset to start
                          }}
                          onError={(e) => {
                            setLoadingMedia((prev) => ({ ...prev, [service.id]: false }));
                            // Fallback to image if video fails
                            e.target.style.display = 'none';
                            const img = e.target.nextElementSibling;
                            if (img) img.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        onLoadStart={() => {
                          if (!service.video) {
                            setLoadingMedia((prev) => ({ ...prev, [service.id]: true }));
                          }
                        }}
                        onLoad={() => {
                          setLoadingMedia((prev) => ({ ...prev, [service.id]: false }));
                        }}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease, opacity 0.3s',
                          display: service.video ? 'none' : 'block',
                          opacity: loadingMedia[service.id] ? 0 : 1,
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                        onClick={() => onServiceClick(service.id)}
                        onError={(e) => {
                          setLoadingMedia((prev) => ({ ...prev, [service.id]: false }));
                          e.target.style.display = 'none';
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
                        textAlign: { xs: 'center', md: isEven ? 'right' : 'left' },
                        transform: isVisible
                          ? 'translateX(0)'
                          : isEven
                          ? 'translateX(-100px)'
                          : 'translateX(100px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease',
                        transitionDelay: '0.2s',
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.8rem', md: '2rem' },
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          mb: 3,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => onServiceClick(service.id)}
                        sx={{
                          bgcolor: 'primary.main',
                          background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
                          px: 4,
                          py: 1.5,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                            boxShadow: '0 6px 20px rgba(231, 76, 60, 0.4)',
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

