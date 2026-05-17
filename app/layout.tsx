import type { Metadata, Viewport } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { BasketProvider } from "@/contexts/BasketContext";
import config from "@/site.config";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const title = `${config.brand.name} — ${config.brand.location}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${config.brand.name}`,
  },
  description: config.brand.description,
  keywords: [
    "butcher",
    "dry-aged beef",
    config.brand.location,
    "free-range meat",
    "artisan butchery",
    "grass-fed",
  ],
  authors: [{ name: "Veltro Ltd" }],
  creator: "Veltro Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: config.brand.name,
    title,
    description: config.brand.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.brand.name,
    description: config.brand.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7e1a34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${raleway.variable}`}
    >
      <body>
        <AuthProvider>
          <BasketProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#6b1a2c",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-raleway)",
                },
                success: {
                  iconTheme: { primary: "#d09520", secondary: "#fff" },
                },
              }}
            />
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
