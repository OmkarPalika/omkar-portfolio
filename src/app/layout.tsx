// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

// Font setup with preload for better performance
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true
});

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script", 
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true
});

// Enhanced Metadata for Advanced SEO & Social Sharing
export const metadata: Metadata = {
  title: "Omkar Palika | Tech Enthusiast, AI/ML Developer & Software Engineer | Portfolio",
  description: "Innovative tech enthusiast and full-stack developer with deep expertise in AI/ML, Python, and modern web development. Proven track record as a research contributor and mentor on Unstop, specializing in cutting-edge technologies including deep learning, cloud computing, and system architecture. Published author combining technical acumen with creative storytelling.",
  authors: [{ name: "Omkar Palika", url: "https://your-website.com" }],
  creator: "Omkar Palika",
  keywords: [
    "Tech Enthusiast",
    "AI/ML Developer",
    "Python Developer",
    "Web Developer",
    "Application Developer", 
    "Software Developer",
    "Author",
    "Mentor",
    "Research Contributor",
    "Machine Learning",
    "Artificial Intelligence",
    "Python Programming",
    "Web Development",
    "App Development",
    "Software Engineering",
    "Technical Writing",
    "Research & Development",
    "Technology Mentorship",
    "Full Stack Development",
    "Software Architecture",
    "Deep Learning",
    "Data Science",
    "Cloud Computing",
    "DevOps",
    "System Design"
  ],
  metadataBase: new URL("https://your-website.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'hi-IN': '/hi-IN',
      'te-IN': '/te-IN'
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tech Enthusiast, AI/ML Developer & Software Engineer",
    description:
      "Tech enthusiast and developer focused on AI/ML, Python, web & application development. View my portfolio showcasing research contributions and mentorship experience.",
    type: "website",
    locale: "en_US",
    url: "https://your-website.com",
    siteName: "Tech & AI/ML Portfolio",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech & AI/ML Developer Portfolio",
        type: "image/jpeg",
        secureUrl: "https://your-website.com/og-image.png"
      },
      {
        url: "https://your-website.com/og-image-square.png",
        width: 600,
        height: 600,
        alt: "Portfolio Thumbnail",
        type: "image/jpeg",
        secureUrl: "https://your-website.com/og-image-square.jpg"
      }
    ],
    countryName: "India",
    emails: ["contact@your-website.com", "business@your-website.com"],
    phoneNumbers: ["+91-XXXXXXXXXX"],
    audio: [
      {
        url: "https://your-website.com/portfolio-intro.mp3",
        secureUrl: "https://your-website.com/portfolio-intro.mp3",
        type: "audio/mpeg"
      }
    ],
    determiner: "the"
  },
  twitter: {
    card: "summary_large_image",
    site: "@omkarpalika",
    title: "Tech Enthusiast, AI/ML Developer & Software Engineer",
    description:
      "Developing AI/ML solutions and applications with modern technologies. Expertise in Python, web development and software engineering.",
    creator: "@omkarpalika",
    images: [
      {
        url: "https://your-website.com/twitter-card.jpg",
        alt: "Tech & AI/ML Developer Portfolio",
        width: 1200,
        height: 630,
      }
    ]
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["mailto:contact@your-website.com", "https://github.com/username"],
      "pinterest-site-verification": "pinterest-verification-code",
      "norton-safeweb-site-verification": "norton-verification-code"
    }
  },
  category: "Technology",
  classification: "Tech & AI/ML Portfolio",
  referrer: "origin-when-cross-origin",
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Visakhapatnam",
    "geo.position": "17.6868;83.2185",
    "ICBM": "17.6868, 83.2185",
    "revisit-after": "7 days",
    "rating": "General",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* FontAwesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${inter.variable} ${scriptFont.variable} bg-[var(--color-dark-bg)] text-white min-h-screen antialiased`}
      >
        {children}
        {/* Footer Branding */}
        <div className="fixed bottom-6 right-6 text-gray-400 text-sm font-light">
          Omkar Palika
          <br />
          2025
        </div>
      </body>
    </html>
  );
}
