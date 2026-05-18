import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "March House Farm",
    tagline: "Grass-Fed. Field to Fork. Leicestershire Proud.",
    description: "March House Farm is a family-run farm in Great Dalby, Leicestershire, raising grass-fed beef, lamb, and pork with care, patience, and real respect for the land. Every cut is butchered on-site from animals that have lived well — you can taste the difference the moment it hits the pan. This is honest, sustainable meat from a farm that's been doing things properly since 2000.",
    email: "hello@marchhousefarm.co.uk",
    location: "Great Dalby, Leicestershire",
    foundedYear: 2000,
    logoUrl: "https://twochimpscoffee.com/wp-content/uploads/2018/06/TwoChimpsCoffee_March_House_Farm03.png",
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
    { value: "Est. 2000", label: "Family Farming" },
    { value: "100%", label: "Grass-Fed & Free-Range" },
    { value: "3", label: "Species: Beef, Lamb & Pork" },
    { value: "5★", label: "Customer Rated" },
  ],
};

export default config;
