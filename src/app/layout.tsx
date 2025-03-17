// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

// Font setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const scriptFont = Dancing_Script({ 
  subsets: ["latin"], 
  variable: "--font-script",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Xian Gallers - Web Designer & Developer",
  description: "Portfolio website for Xian Gallers, web designer and developer based in Peru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${scriptFont.variable} bg-dark-bg text-white min-h-screen`}>
        {children}
        <div className="fixed bottom-6 right-6 text-gray-600 text-sm font-light">
          portfolio<br/>2025
        </div>
      </body>
    </html>
  );
}