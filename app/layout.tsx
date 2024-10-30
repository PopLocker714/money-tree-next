import type { Metadata, Viewport } from "next";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

import "./globals.css";
import Nav from "./ui/layout/main/Nav";
import Footer from "./ui/layout/main/Footer";

export const metadata: Metadata = {
  title: "Денежное дерево",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
