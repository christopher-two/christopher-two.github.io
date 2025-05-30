
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layers3, CloudCog, Cog } from 'lucide-react';
import type React from 'react';

interface Skill {
  name: string;
  url: string;
}

interface SkillCategory {
  id: string;
  name: string; // Nombres de categoría traducidos
  skills: Skill[];
  Icon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Lenguajes',
    skills: [
      { name: 'Kotlin', url: 'https://kotlinlang.org/' },
      { name: 'Java', url: 'https://www.oracle.com/java/' },
      { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    ],
    Icon: Code2,
  },
  {
    id: 'frameworks-platforms',
    name: 'Frameworks y Plataformas',
    skills: [
      { name: 'Compose Multiplatform', url: 'https://www.jetbrains.com/compose-multiplatform/' },
      { name: 'Kotlin Multiplatform', url: 'https://kotlinlang.org/lp/multiplatform/' },
      { name: 'Jetpack Compose', url: 'https://developer.android.com/jetpack/compose' },
      { name: 'Ktor', url: 'https://ktor.io/' },
      { name: 'Android', url: 'https://developer.android.com/' },
    ],
    Icon: Layers3,
  },
  {
    id: 'cloud-db-tech',
    name: 'Nube, BD y Tecnologías',
    skills: [
      { name: 'Firebase', url: 'https://firebase.google.com/' },
      { name: 'Google Cloud', url: 'https://cloud.google.com/' },
      { name: 'Supabase', url: 'https://supabase.com/' },
      { name: 'Netlify', url: 'https://www.netlify.com/' },
      { name: 'Cloudflare', url: 'https://www.cloudflare.com/' },
    ],
    Icon: CloudCog,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          <Cog className="w-10 h-10 md:w-12 md:h-12 text-accent" />
          {/* Título de sección traducido */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground tracking-tight">Habilidades</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="flex flex-col bg-card shadow-lg hover:shadow-accent/10 transition-shadow duration-300 rounded-lg border border-border">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <category.Icon className="w-7 h-7 text-accent" />
                <CardTitle className="text-xl font-semibold text-foreground">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <a 
                      key={skill.name} 
                      href={skill.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-full"
                      aria-label={`Más información sobre ${skill.name}`}
                    >
                      <Badge variant="outline" className="border-primary/50 text-primary-foreground bg-primary/20 hover:bg-primary/30 transition-colors text-sm px-3 py-1 cursor-pointer">
                        {skill.name}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
