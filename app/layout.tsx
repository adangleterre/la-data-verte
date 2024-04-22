import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "La data verte",
  description: "La mine de données sur l'AS Saint-etienne",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
