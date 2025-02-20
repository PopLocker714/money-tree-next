import type { Metadata, Viewport } from "next";

import { Montserrat } from "next/font/google";
// import YandexMetrika from "@/src/components/app/YandexMetrika";
import { YandexMetrika } from "@koiztech/next-yandex-metrika";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

import "../globals.css";
import Header from "../../components/app/ui/layout/main/Header/Header";
import Footer from "../../components/app/ui/layout/main/Footer";
import { CartProvider } from "@/src/components/app/CardContext";
import { conf } from "@/src/config/conf";
import LayoutClient from "@/src/components/app/LayoutClient";

export const metadata: Metadata = {
  title: conf().title,
  description: "",
  other: {
    "yandex-verification": "c0753c5a4bac44b8",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-screen min-w-80`}
      >
        <CartProvider>
          <Header />
          <LayoutClient>{children}</LayoutClient>
          <Footer />
        </CartProvider>
        <YandexMetrika
          clickmap={true}
          trackLinks={true}
          yid={99994441}
          accurateTrackBounce={true}
          webvisor={true}
        />
      </body>
    </html>
  );
}
