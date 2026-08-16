import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Sarrau - Portfolio",
  description:
    "Portfolio of Julien Sarrau, web developer: skills, languages and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
