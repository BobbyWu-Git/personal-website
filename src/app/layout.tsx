import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bobby Wu | Software Developer & AI Enthusiast",
  description: "Personal portfolio of Bobby Wu, showcasing projects and experience in software development and AI.",
  keywords: ["Bobby Wu", "Software Developer", "AI Enthusiast", "Portfolio", "Web Development"],
  authors: [{ name: "Bobby Wu" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
  openGraph: {
    title: "Bobby Wu | Software Developer & AI Enthusiast",
    description: "Personal portfolio of Bobby Wu, showcasing projects and experience in software development and AI.",
    url: "https://yourwebsite.com",
    siteName: "Bobby Wu's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bobby Wu | Software Developer & AI Enthusiast",
    description: "Personal portfolio of Bobby Wu, showcasing projects and experience in software development and AI.",
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
