import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bobby Wu — Front-End & QA Automation Engineer",
  description: "I build React/Next apps, automate testing at scale, and turn ideas into launchable products. Projects, experience, and writing.",
  keywords: ["Bobby Wu", "Front-End Developer", "QA Automation", "React", "Next.js", "Portfolio", "Web Development", "Testing"],
  authors: [{ name: "Bobby Wu" }],
  metadataBase: new URL("https://personal-website-five-peach-68.vercel.app"),
  openGraph: {
    title: "Bobby Wu — Front-End & QA Automation Engineer",
    description: "Selected projects, measurable impact, and accessible UI.",
    url: "https://personal-website-five-peach-68.vercel.app",
    siteName: "Bobby Wu's Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/og.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bobby Wu — Front-End & QA Automation Engineer",
    description: "Selected projects, measurable impact, and accessible UI.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('darkMode');
                const isDark = savedTheme === null ? true : savedTheme === 'true';
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
