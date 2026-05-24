import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rajinish Pothakamuri — Backend Developer & ML Enthusiast",
    template: "%s | Rajinish Pothakamuri",
  },
  description:
    "A digital home for ideas, projects, and everything in between. Exploring the intersection of code, design, and human experience.",
  keywords: [
    "Rajinish Pothakamuri",
    "developer",
    "portfolio",
    "creative developer",
    "software engineer",
    "backend developer",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Rajinish Pothakamuri" }],
  creator: "Rajinish Pothakamuri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajinish.dev",
    siteName: "Rajinish Pothakamuri",
    title: "Rajinish Pothakamuri — Backend Developer & ML Enthusiast",
    description:
      "A digital home for ideas, projects, and everything in between.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajinish Pothakamuri — Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajinish Pothakamuri — Backend Developer & ML Enthusiast",
    description:
      "A digital home for ideas, projects, and everything in between.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06060a" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col noise">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
