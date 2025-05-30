
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet'; // Added SheetTitle
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#bio', label: 'Bio' },
    { href: '#proyectos-destacados', label: 'Proyectos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#tools', label: 'Herramientas' },
  ];

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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card border-border p-6">
              <SheetTitle className="sr-only">Menú Principal</SheetTitle>
              <div className="flex justify-between items-center mb-8">
                 <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-accent transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                    <img 
                      src="https://override.com.mx/SRC/IMG/logo/Overridelogo.svg" 
                      alt="Override Logo" 
                      className="h-6 w-6"
                    />
                    <span>Christopher-Two</span>
                  </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-muted-foreground" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link 
                      href={link.href} 
                      className="text-lg text-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
