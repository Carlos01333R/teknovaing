
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Teknova Ing",
  description: "Soluciones tecnológicas integrales. Desarrollo, instalación y soporte tecnológico profesional.",
  openGraph: {
    title: "Teknova Ing",
    description: "Soluciones tecnológicas integrales.",
    images: [
      {
        url: "/logo.png",  // Debe estar en public/
        width: 1200,
        height: 630,
        alt: "Teknova Ing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknova Ing",
    description: "Soluciones tecnológicas integrales.",
    images: ["/teknova-og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto`}
      >
        <main className="w-full bg-[#FAF8F0]">
 {children}
        </main>
       
      </body>
    </html>
  );
}
