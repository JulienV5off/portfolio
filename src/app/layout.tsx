import type { Metadata } from "next";

import "./globals.css";

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

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
      <body>
        {UMAMI_WEBSITE_ID && (
          <script
            defer
            src="https://stats.saro.app/script.js"
            data-website-id={UMAMI_WEBSITE_ID}
          />
        )}

        {children}
      </body>
    </html>
  );
}
