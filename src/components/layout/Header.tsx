
'use client'; // Mantenido como Client Component si se necesitan otras interacciones a futuro

import Link from 'next/link';
import { Aperture } from 'lucide-react'; // Eliminado Globe si no se usa más
// Eliminadas las importaciones de DropdownMenu si ya no se usa el selector de idioma
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
          <Aperture className="h-7 w-7 text-primary" />
          <span>Christopher-Two</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Ya no hay selector de idioma */}
          {/* <nav className="hidden md:flex space-x-6">
            <Link href="#bio" className="text-muted-foreground hover:text-accent transition-colors">Bio</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Proyectos</Link>
            <Link href="#skills" className="text-muted-foreground hover:text-accent transition-colors">Habilidades</Link>
            <Link href="#tools" className="text-muted-foreground hover:text-accent transition-colors">Herramientas</Link>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
