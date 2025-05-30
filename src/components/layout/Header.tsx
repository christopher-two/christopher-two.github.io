
'use client';

import Link from 'next/link';
// Eliminada la importación de Aperture y Globe
// import { Aperture, Globe } from 'lucide-react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { useState } from 'react'; // Eliminado si ya no se usa

const Header = () => {
  // const [selectedLang, setSelectedLang] = useState('ES'); // Lógica de idioma eliminada

  // const handleLanguageChange = (lang: string) => {
  //   setSelectedLang(lang);
  //   console.log(`Idioma seleccionado: ${lang}`);
  //   // Aquí iría la lógica para cambiar el idioma de la web
  // };

  // const languages = [
  //   { code: 'ES', name: 'Español' },
  //   { code: 'EN', name: 'Inglés' },
  //   { code: 'DE', name: 'Alemán' },
  //   { code: 'ZH', name: 'Chino' },
  //   { code: 'JA', name: 'Japonés' },
  //   { code: 'KO', name: 'Coreano' },
  //   { code: 'PT', name: 'Portugués' },
  //   { code: 'SL', name: 'Esloveno' },
  //   { code: 'LA', name: 'Latín' },
  // ];

  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
          {/* Reemplazado Aperture con img para el SVG externo */}
          <img 
            src="https://override.com.mx/SRC/IMG/logo/Overridelogo.svg" 
            alt="Override Logo" 
            className="h-7 w-7" // text-primary no aplica directamente a img, el color viene del SVG
          />
          <span>Christopher-Two</span>
          {/* <span className="text-xs text-accent ml-1">({selectedLang})</span> */} {/* Indicador de idioma eliminado */}
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Menú desplegable de idioma eliminado */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Seleccionar idioma</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                  {lang.name} ({lang.code})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* Navegación eliminada según estado anterior */}
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
