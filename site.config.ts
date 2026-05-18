import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "March House Farm",
    tagline: "Grass-fed, field-to-fork meat from Leicestershire",
    description: "March House Farm is a family-run farm and butchery nestled in the Leicestershire countryside, raising grass-fed beef, lamb, and pork the slow, proper way. Every cut is butchered on-site from animals they've reared themselves — so you know exactly where your meat comes from. No supermarket shortcuts, no mystery: just honest, flavourful meat that tastes the way it should.",
    email: "hello@marchhousefarm.co.uk",
    location: "Great Dalby, Leicestershire",
    foundedYear: 2000,
    logoUrl: "https://marchhousefarm.co.uk/wp-content/uploads/2020/05/March-House-Farm-Shop-Text-1000x148.png",
    socialInstagram: "https://www.instagram.com/marchhousefarm",
    socialFacebook: "https://www.facebook.com/marchhousefarm",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "Est. 2000", label: "Farming with Purpose" },
    { value: "100%", label: "Grass-Fed & Farm-Reared" },
    { value: "4.9★", label: "Customer Rating" },
    { value: "Field-to-Fork", label: "Leicestershire & Rutland" },
  ],
};

export default config;
