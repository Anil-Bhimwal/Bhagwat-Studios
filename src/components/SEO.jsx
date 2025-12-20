import { useEffect } from "react";

// Note: If react-helmet-async is not installed, we'll use document manipulation instead
const SEO = ({
  title = "Bhagwat Digital Studios - Professional Photography Services",
  description = "Professional photography services in Bandikui, Rajasthan. Specializing in portrait, event, drone, and pre-wedding photography. Over 25 years of experience.",
  keywords = "photography studio, wedding photography, event photography, portrait photography, drone photography, pre-wedding photography, Bandikui, Rajasthan",
  image = "https://bhagwatstudios.com/images/about/about.png",
  url = "https://bhagwatstudios.com",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);

    // Twitter Card tags
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEO;
