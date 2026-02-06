// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJ BUGATI | Perth's Premier DJ",
  description: "Professional DJ services for weddings, events, and nightlife experiences in Perth.",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}