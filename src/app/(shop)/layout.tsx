import type { Metadata, Viewport } from "next";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

import "../globals.css";
import Header from "../../components/app/ui/layout/main/Header";
import Footer from "../../components/app/ui/layout/main/Footer";
import { CartProvider } from "@/src/components/app/CardContext";

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
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
