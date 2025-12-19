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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';

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
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
  ];

  const handleWhatsAppClick = () => {
    // WhatsApp URL format: wa.me/phone_number (without + sign)
    window.open('https://wa.me/919928961229', '_blank', 'noopener,noreferrer');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.paper', minHeight: '100vh' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} sx={{ color: 'text.primary' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            onClick={() => {
              window.open('https://wa.me/919928961229', '_blank', 'noopener,noreferrer');
              setMobileOpen(false);
            }}
          >
            <ListItemText 
              primary="Chat with us" 
              sx={{ 
                color: 'white',
                bgcolor: '#25D366',
                borderRadius: 1,
                '&:hover': { bgcolor: '#20BA5A' }
              }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection('contact')}>
            <ListItemText 
              primary="Contact" 
              sx={{ 
                color: 'white',
                bgcolor: 'primary.main',
                borderRadius: 1,
                '&:hover': { bgcolor: 'primary.dark' }
              }} 
            />
          </ListItemButton>
        </ListItem>
      </List>
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
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

