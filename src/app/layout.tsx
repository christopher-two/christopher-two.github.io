
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Christopher-Two | Portafolio',
  description: 'Portafolio personal de Christopher Alejandro Maldonado Chavez, mostrando proyectos y habilidades en una temática inspirada en The Last of Us.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Cambiado lang a "es" para español
    <html lang="es" className="dark">
      {/* La clase 'dark' en la etiqueta <html> fuerza el tema oscuro globalmente. */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
