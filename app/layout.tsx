import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FramerProvider } from "@/components/providers/framer-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julioniecor.netlify.app"),
  title: "Julio Nieto | Portfolio",
  description: "Desarrollador Web Frontend. Especializado en crear experiencias digitales fluidas, optimizadas y visualmente impactantes con React, Next.js y Tailwind CSS.",
  keywords: ["Desarrollador Web", "Frontend", "React", "Next.js", "Tailwind CSS", "Portfolio", "Julio Nieto", "JavaScript", "TypeScript"],
  authors: [{ name: "Julio Nieto" }],
  creator: "Julio Nieto",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://julioniecor.netlify.app",
    title: "Julio Nieto | Frontend Developer",
    description: "Desarrollador Frontend especializado en interfaces modernas e interactivas.",
    siteName: "Julio Nieto Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julio Nieto - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Nieto | Frontend Developer",
    description: "Desarrollador Frontend especializado en interfaces modernas e interactivas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a14" },
    { media: "(prefers-color-scheme: light)", color: "#fefefe" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julio Nieto",
    url: "https://julioniecor.netlify.app",
    jobTitle: "Desarrollador Web Frontend",
    sameAs: [
      "https://github.com/JulioNiecor",
      "https://www.linkedin.com/in/julioniecor/"
    ],
  };

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      {/* Font variables injection */}
      <body
        className={`min-h-screen bg-background text-foreground antialiased ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <FramerProvider>
          {children}
        </FramerProvider>
      </body>
    </html>
  );
}