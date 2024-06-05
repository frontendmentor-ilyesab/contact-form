import { myFont } from "@/app/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Contact form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="min-h-screen bg-green-light px-4 py-8 text-base text-gray-dark antialiased md:grid md:place-items-center md:[@media(max-height:850px){&}]:py-32">
        {children}
      </body>
    </html>
  );
}
