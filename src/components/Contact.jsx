import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({ config }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      const contactIntensity = isMobile ? 0.02 : 0.03;

      if (elementTop < windowHeight && elementTop > -rect.height) {
        const offset = (windowHeight - elementTop) * contactIntensity;

        if (contactRef.current) {
          contactRef.current.style.transform = `translateY(${-offset}px)`;
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

    window.addEventListener('scroll', throttledParallax);
    window.addEventListener('load', handleParallax);

    return () => {
      window.removeEventListener('scroll', throttledParallax);
      window.removeEventListener('load', handleParallax);
    };
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box ref={contactRef} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 1,
            }}
          >
            {config?.contact_title || "Let's Create Together"}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            {config?.contact_subtitle || "Ready to capture your special moments? Get in touch with us today to discuss your photography needs."}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: 'background.default',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <PersonIcon sx={{ color: 'text.secondary' }} />
              </Box>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Narender Bhagwat
              </Typography>
            </Box>

            <Box
              component="a"
              href="tel:+919928961229"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                textDecoration: 'none',
                transition: 'transform 0.3s',
                flexWrap: 'wrap',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: 'background.default',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <PhoneIcon sx={{ color: 'text.secondary' }} />
              </Box>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                +91 9928961229
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: 'background.default',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Box>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'center',
                  maxWidth: 400,
                  px: 2,
                }}
              >
                Baswa Rd, Jagir Bandikui, Bandikui, Barh Bishanpura, Rajasthan 303313
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

