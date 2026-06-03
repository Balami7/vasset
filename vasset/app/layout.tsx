import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAsset Global — Managing Assets. Building Solutions. Creating Opportunities.",
  description: "Africa's premier asset management and technology solutions company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
