
'use client'; 

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PersonalBio = () => {
  const name = "Christopher Alejandro Maldonado Chavez";
  const description = "Un apasionado desarrollador de software con experiencia en desarrollo móvil y multiplataforma. Siempre ansioso por aprender nuevas tecnologías y construir soluciones innovadoras que resuelvan problemas del mundo real. Entusiasta por crear aplicaciones limpias, eficientes y fáciles de usar.";

  return (
    <section id="bio" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Avatar component removed */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight pt-8">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PersonalBio;

