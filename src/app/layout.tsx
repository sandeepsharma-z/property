import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "South City Greens | Residential Plots in Jhajjar",
  description: "Premium residential plots in Sector 36, Jhajjar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
