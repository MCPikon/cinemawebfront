import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/sidenav";
import { spaceGrotesk } from "./lib/fonts";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CinemaBox",
  description: "A web about movies, series and it's reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
          <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
