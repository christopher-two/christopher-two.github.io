
'use client';

import Link from 'next/link';
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
          <img 
            src="https://override.com.mx/SRC/IMG/logo/Overridelogo.svg" 
            alt="Override Logo" 
            className="h-7 w-7"
          />
          <span>Christopher-Two</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="#bio" className="text-muted-foreground hover:text-accent transition-colors">Bio</Link>
          <Link href="#proyectos-destacados" className="text-muted-foreground hover:text-accent transition-colors">Proyectos</Link>
          <Link href="#skills" className="text-muted-foreground hover:text-accent transition-colors">Habilidades</Link>
          <Link href="#tools" className="text-muted-foreground hover:text-accent transition-colors">Herramientas</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
