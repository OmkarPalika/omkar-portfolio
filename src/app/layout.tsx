import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: "--font-script",
  weight: ["400", "500", "600", "700"]
});

// Safe URL handling for metadata
const url = process.env.NEXT_PUBLIC_SITE_URL || 
           process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
           'https://omkarpalika.vercel.app';

// Build metadata object safely
const buildMetadata = (): Metadata => {
  const metadata: Metadata = {
    title: "Omkar Palika | Tech Enthusiast, AI/ML Developer & Software Engineer | Portfolio",
    description: "Innovative tech enthusiast and full-stack developer with deep expertise in AI/ML, Python, and modern web development.",
    authors: [{ name: "Omkar Palika", url: "https://omkarpalika.vercel.app" }],
    creator: "Omkar Palika",
    keywords: [
      "Tech Enthusiast", "AI/ML Developer", "Python Developer", "Web Developer",
      "Software Engineer", "Machine Learning", "Deep Learning", "Cloud Computing"
    ],
    metadataBase: new URL(url),
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: "Tech Enthusiast, AI/ML Developer & Software Engineer",
      description: "Tech enthusiast and developer focused on AI/ML, Python, web & application development.",
      type: "website",
      locale: "en_US",
      url: "https://omkarpalika.vercel.app",
      siteName: "Tech & AI/ML Portfolio",
      images: [{
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech & AI/ML Developer Portfolio"
      }]
    },
    twitter: {
      card: "summary_large_image",
      site: "@omkarpalika",
      creator: "@omkarpalika",
      title: "Tech Enthusiast, AI/ML Developer & Software Engineer",
      description: "Developing AI/ML solutions and applications with modern technologies."
    },
  };
  
  // Only add verification if the environment variable exists
  if (process.env.GOOGLE_VERIFICATION_CODE) {
    metadata.verification = {
      google: process.env.GOOGLE_VERIFICATION_CODE
    };
  }
  
  return metadata;
};

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${inter} ${scriptFont.variable} bg-[var(--color-dark-bg)] text-white min-h-screen antialiased`}>
        {children}
        <div className="fixed bottom-6 right-6 text-gray-400 text-sm font-light">
          Omkar Palika<br />2025
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}