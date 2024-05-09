import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
