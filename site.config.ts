import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "The Grange Butchery",
    tagline: "Heritage breeds, dry-aged on the farm, delivered to your door",
    description:
      "Fourth-generation family butchers in the Derbyshire Peak District. We rear our own Longhorn cattle and Saddleback pigs on traditional pasture, dry-age our beef for a minimum of 28 days, and butcher every carcass ourselves.",
    email: "hello@thegrangebutchery.co.uk",
    location: "Ashbourne, Derbyshire",
    foundedYear: 1961,
    socialInstagram: "https://instagram.com/thegrangebutchery",
    socialFacebook: "https://facebook.com/thegrangebutchery",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "28+", label: "Days Dry-Aged" },
    { value: "4th Gen", label: "Family Farm" },
    { value: "4.9★", label: "Average Rating" },
    { value: "Est. 1961", label: "Derbyshire" },
  ],
};

export default config;
