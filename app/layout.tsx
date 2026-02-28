import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
        url: "/logo.webp", // En un entorno ideal usaríamos una previsualización rectangular (1200x630px)
        width: 800,
        height: 600,
        alt: "Julio Nieto - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Nieto | Frontend Developer",
    description: "Desarrollador Frontend especializado en interfaces modernas e interactivas.",
    images: ["/logo.webp"],
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
  return (
    <html lang="es" suppressHydrationWarning>
      {/* Font variables injection */}
      <body
        className={`min-h-screen bg-background text-foreground antialiased ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}