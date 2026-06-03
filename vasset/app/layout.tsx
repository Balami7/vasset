import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAsset Global — Managing Assets. Building Solutions. Creating Opportunities.",
  description: "Africa's premier asset management and technology solutions company.",
  icons: {
    icon: "/logo.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
