import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

const Logo = () => (
  <svg width="50" height="50" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#e74c3c', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="35" width="60" height="45" rx="6" fill="url(#logoGrad)" />
    <circle cx="50" cy="57.5" r="18" fill="#ffffff" />
    <circle cx="50" cy="57.5" r="12" fill="url(#logoGrad)" />
    <circle cx="50" cy="57.5" r="6" fill="#0f0f0f" />
    <rect x="70" y="40" width="8" height="8" rx="2" fill="#ffffff" />
    <rect x="25" y="25" width="15" height="8" rx="2" fill="#ffffff" opacity="0.9" />
    <text x="50" y="95" fontFamily="'Playfair Display', serif" fontSize="24" fontWeight="700" fill="#ffffff" textAnchor="middle">
      B
    </text>
  </svg>
);

const Navbar = ({ config }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  const studioName = config?.studio_name || 'Bhagwat Digital Studios';
  const nameParts = studioName.split(' ');
  const mainName = nameParts.slice(0, -1).join(' ') || studioName;

  const navItems = [
    { label: 'Services', id: 'services', icon: <PhotoCameraIcon /> },
    { label: 'About', id: 'about', icon: <InfoIcon /> },
  ];

  const handleWhatsAppClick = () => {
    // WhatsApp URL format: wa.me/phone_number (without + sign)
    window.open('https://wa.me/919928961229', '_blank', 'noopener,noreferrer');
  };

  const drawer = (
    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Logo />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: 'text.primary',
                fontSize: '1rem',
                lineHeight: 1.2,
              }}
            >
              {mainName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.7rem',
                color: 'text.secondary',
                lineHeight: 1,
              }}
            >
              STUDIOS
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'text.primary',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ px: 2, pt: 2, flex: 1 }}>
        {/* Home/Scroll to Top */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileOpen(false);
            }}
            sx={{
              borderRadius: 2,
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <HomeIcon sx={{ color: 'text.secondary', mr: 2, fontSize: 24 }} />
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                sx: {
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '1rem',
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Main Navigation Items */}
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <Box sx={{ color: 'text.secondary', mr: 2, display: 'flex', alignItems: 'center' }}>
                {item.icon}
              </Box>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: '1rem',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Action Buttons */}
        <ListItem disablePadding sx={{ mb: 1.5 }}>
          <ListItemButton
            onClick={() => {
              window.open('https://wa.me/919928961229', '_blank', 'noopener,noreferrer');
              setMobileOpen(false);
            }}
            sx={{
              borderRadius: 2,
              py: 1.5,
              bgcolor: '#25D366',
              color: 'white',
              '&:hover': {
                bgcolor: '#20BA5A',
              },
            }}
          >
            <ChatIcon sx={{ mr: 2, fontSize: 24 }} />
            <ListItemText
              primary="Chat with us"
              primaryTypographyProps={{
                sx: {
                  fontWeight: 600,
                  fontSize: '1rem',
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => scrollToSection('contact')}
            sx={{
              borderRadius: 2,
              py: 1.5,
              background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #e55a2b 0%, #c0392b 100%)',
              },
            }}
          >
            <ContactMailIcon sx={{ mr: 2, fontSize: 24 }} />
            <ListItemText
              primary="Contact"
              primaryTypographyProps={{
                sx: {
                  fontWeight: 600,
                  fontSize: '1rem',
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'text.secondary',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {config?.tagline || 'Capture Your Perfect Moment'}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'background.paper',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          zIndex: 50,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', py: 1, minHeight: { xs: 56, sm: 64 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <Logo />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: 'text.primary',
                  lineHeight: 1.2,
                  fontSize: { xs: '1rem', sm: '1.3rem' },
                }}
              >
                {mainName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  fontWeight: 400,
                  color: 'text.secondary',
                  lineHeight: 1,
                  letterSpacing: '0.1em',
                }}
              >
                STUDIOS
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  size="small"
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    color: 'text.secondary', 
                    fontWeight: 500,
                    py: 0.5,
                    px: 1.5,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                size="small"
                startIcon={<ChatIcon sx={{ fontSize: 18 }} />}
                onClick={handleWhatsAppClick}
                sx={{
                  bgcolor: '#25D366',
                  py: 0.5,
                  px: 1.5,
                  fontSize: '0.875rem',
                  '&:hover': {
                    bgcolor: '#20BA5A',
                  },
                }}
              >
                Chat with us
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => scrollToSection('contact')}
                sx={{
                  bgcolor: 'primary.main',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #e74c3c 100%)',
                  py: 0.5,
                  px: 1.5,
                  fontSize: '0.875rem',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ 
          keepMounted: true,
          BackdropProps: {
            sx: {
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
            },
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

