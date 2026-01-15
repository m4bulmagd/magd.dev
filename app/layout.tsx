import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import Schema from "./components/global/Schema";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Muhammad Abulmagd | Machine Learning & Software Engineer",
  description:
    "Muhammad Abulmagd is a Machine Learning and Software Engineer who is passionate about building AI solutions.",
  url: "https://magd.dev",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  icons: {
    icon: [
      { url: "/icon_192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon_512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/icon_180.png" },
    ],
  },
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "magd.dev",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Abulmagd",
      },
    ],
  },
  other: {
    "google-site-verification": "HmDC4zLASorXdwlZWRulop-jt17T3WbUyljOdiYi9Ew",
  },
  alternates: {
    canonical: options.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
          <Schema />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
