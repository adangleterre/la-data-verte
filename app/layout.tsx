import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Nunito, Roboto } from 'next/font/google'

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-nunito"
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "La data verte",
  description: "La mine de données sur l'AS Saint-etienne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${nunito.className}`}>{children}</body>
    </html>
  );
}
