import type { Metadata, Viewport } from "next";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../tailwind.css'

export const metadata: Metadata = {
  title: "dashboard",
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
      <body>{children}</body>
    </html>
  );
}
