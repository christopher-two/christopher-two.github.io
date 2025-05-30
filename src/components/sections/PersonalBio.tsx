
'use client'; 

import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonalBio = () => {
  const name = "Christopher Alejandro Maldonado Chavez";
  const description = "Un apasionado desarrollador de software con experiencia en desarrollo móvil y multiplataforma. Siempre ansioso por aprender nuevas tecnologías y construir soluciones innovadoras que resuelvan problemas del mundo real. Entusiasta por crear aplicaciones limpias, eficientes y fáciles de usar.";
  const emailAddress = "christopher@override.com.mx";

  const contacts = [
    {
      name: 'Email',
      href: `mailto:${emailAddress}`, 
      icon: Mail,
      ariaLabel: 'Enviar un correo electrónico a Christopher',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/christopher-alejandro-maldonado-chavez/', 
      icon: Linkedin,
      ariaLabel: 'Visitar el perfil de LinkedIn de Christopher',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/christopher-two', 
      icon: Github,
      ariaLabel: 'Visitar el perfil de GitHub de Christopher',
    },
  ];

  return (
    <section id="bio" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight pt-8">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex justify-center space-x-4 md:space-x-6">
          {contacts.map((contact) => (
            <Button 
              key={contact.name}
              variant="outline" 
              size="icon" 
              asChild
              className="rounded-full w-12 h-12 hover:bg-accent/20 hover:border-accent transition-all duration-300"
            >
              <a 
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
                className="text-foreground hover:text-accent"
              >
                <contact.icon className="w-6 h-6" />
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-md text-muted-foreground">
            Contacto directo: <a href={`mailto:${emailAddress}`} className="text-accent hover:underline hover:text-accent/80 transition-colors duration-300">{emailAddress}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
