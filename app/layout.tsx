import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/sidenav/sidenav";
import { spaceGrotesk } from "./lib/fonts";
import { Link, ViewTransitions } from 'next-view-transitions'

const year = new Date().getFullYear();

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
        <body className={`${spaceGrotesk.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden`}>
          <header className="w-full flex-none md:w-64">
            <SideNav />
          </header>
          <main className="flex-grow md:overflow-y-auto">
            {children}
            <footer className="flex sticky top-[100vh] h-10 items-center justify-center m-4 p-4">
              <p className="text-sm opacity-55">© {year} - <Link href="/" className="font-bold text-teal-300">CinemaBox</Link> - Hecho desde España con ♥ por Javier Picón</p>
            </footer>
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
