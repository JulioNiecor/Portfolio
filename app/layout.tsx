import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Julio Nieto Cordón",
  icons: "https://media.discordapp.net/attachments/1335644715210768425/1452724205459345558/icono.png?ex=694ada58&is=694988d8&hm=74284ddd6feffdd3ac723f9af5e8d1d7ea5a7cf193090e121a019f22a916f9e6&=&format=webp&quality=lossless"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
