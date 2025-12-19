import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

const defaultConfig = {
  background_color: "#0f0f0f",
  surface_color: "#1a1a1a",
  text_color: "#f5f5f5",
  primary_action_color: "#e74c3c",
  secondary_action_color: "#667eea",
  font_family: "Inter",
  font_size: 16,
  studio_name: "Bhagwat Digital Studios",
  tagline: "Capture Your Perfect Moment",
  hero_title: "Capture Your Perfect Moment",
  hero_subtitle: "Professional photography that tells your unique story with elegance and artistry",
  cta_button: "Book a Session",
  about_title: "About Our Studio",
  about_text: "With over 10 years of experience, we specialize in creating timeless memories through our lens. Our passion is to capture authentic emotions and stunning visuals that you'll treasure forever.",
  services_title: "Our Services",
  service_1_title: "Portrait Photography",
  service_1_desc: "Professional headshots and personal portraits that capture your unique personality and style.",
  service_2_title: "Event Photography",
  service_2_desc: "Comprehensive coverage of weddings, parties, and corporate events with stunning detail.",
  service_3_title: "Commercial Photography",
  service_3_desc: "High-quality product and brand photography for businesses and marketing campaigns.",
  contact_title: "Let's Create Together",
  contact_subtitle: "Ready to capture your special moments? Get in touch with us today to discuss your photography needs.",
  footer_text: "© 2024 Bhagwat Digital Studios. All rights reserved.",
};

function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);

  useEffect(() => {
    // Initialize Element SDK if available
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: (newConfig) => {
          setConfig({ ...defaultConfig, ...newConfig });
        },
      });
    }
  }, []);

  const handleServiceClick = (serviceType) => {
    setSelectedService(serviceType);
    setIsServiceDetailOpen(true);
  };

  const handleCloseServiceDetail = () => {
    setIsServiceDetailOpen(false);
    setSelectedService(null);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar config={config} />
      <Hero config={config} />
      <About config={config} />
      <Services config={config} onServiceClick={handleServiceClick} />
      <Contact config={config} />
      <Footer config={config} />
      <ServiceDetail
        serviceType={selectedService}
        open={isServiceDetailOpen}
        onClose={handleCloseServiceDetail}
      />
    </Box>
  );
}

export default App;

