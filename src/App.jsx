import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import ServiceDetail from "./components/ServiceDetail";
import Services from "./components/Services";

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
  hero_subtitle:
    "Professional photography that tells your unique story with elegance and artistry",
  cta_button: "Book a Session",
  about_title: "About Our Studio",
  about_text:
    "With over 25 years of experience, we specialize in creating timeless memories through our lens. Our passion is to capture authentic emotions and stunning visuals that you'll treasure forever.",
  services_title: "Our Services",
  service_1_title: "Portrait Photography",
  service_1_desc:
    "Professional headshots and personal portraits that capture your unique personality and style.",
  service_2_title: "Event Photography",
  service_2_desc:
    "Comprehensive coverage of weddings, parties, and corporate events with stunning detail.",
  service_4_title: "Drone Photography",
  service_4_desc:
    "Aerial photography and videography services capturing stunning bird's-eye views for real estate, events, and landscapes.",
  service_5_title: "Pre-Wedding Photography",
  service_5_desc:
    "Romantic pre-wedding shoots capturing your love story in beautiful locations with creative poses and stunning visuals.",
  contact_title: "Let's Create Together",
  contact_subtitle:
    "Ready to capture your special moments? Get in touch with us today to discuss your photography needs.",
  footer_text: "© 2025 Bhagwat Digital Studios. All rights reserved.",
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

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config?.studio_name || "Bhagwat Digital Studios",
    image: [
      "https://bhagwatstudios.com/images/about/about.png",
      "https://bhagwatstudios.com/images/hero/background.jpg",
    ],
    description:
      "Professional photography services in Bandikui, Rajasthan. Specializing in portrait, event, drone, and pre-wedding photography. Over 25 years of experience capturing timeless memories.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Baswa Rd, Jagir Bandikui",
      addressLocality: "Bandikui",
      addressRegion: "Rajasthan",
      postalCode: "303313",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.0585231",
      longitude: "76.572043",
    },
    url: "https://bhagwatstudios.com",
    telephone: "+919928961229",
    email: "bhagwatnarendra247@gmail.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://youtube.com/@bhagwatstudiobandikuipro-n4138",
      "https://www.instagram.com/narendra.bhagwat.501",
      "https://www.facebook.com/share/17pzBsMBMh/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portrait Photography",
            description:
              "Professional headshots and personal portraits that capture your unique personality and style.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Photography",
            description:
              "Comprehensive coverage of weddings, parties, and corporate events with stunning detail.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drone Photography",
            description:
              "Aerial photography and videography services capturing stunning bird's-eye views for real estate, events, and landscapes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Wedding Photography",
            description:
              "Romantic pre-wedding shoots capturing your love story in beautiful locations with creative poses and stunning visuals.",
          },
        },
      ],
    },
  };

  useEffect(() => {
    // Add structured data to page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      {/* SEO Component */}
      <SEO
        title={`${
          config?.studio_name || "Bhagwat Digital Studios"
        } - Professional Photography Services in Bandikui, Rajasthan`}
        description={
          config?.about_text ||
          "Professional photography services in Bandikui, Rajasthan. Specializing in portrait, event, drone, and pre-wedding photography. Over 25 years of experience capturing timeless memories."
        }
        keywords="photography studio, wedding photography, event photography, portrait photography, drone photography, pre-wedding photography, Bandikui, Rajasthan, professional photographer, Narender Bhagwat"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Box
        component="main"
        sx={{ bgcolor: "background.default", minHeight: "100vh" }}
      >
        <Navbar config={config} />
        <Hero config={config} />
        <About config={config} />
        <Services config={config} onServiceClick={handleServiceClick} />
        <Footer config={config} />
        <ServiceDetail
          serviceType={selectedService}
          open={isServiceDetailOpen}
          onClose={handleCloseServiceDetail}
        />
      </Box>
    </>
  );
}

export default App;
