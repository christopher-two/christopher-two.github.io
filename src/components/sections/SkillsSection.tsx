import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layers3, CloudCog, Cog } from 'lucide-react';
import type React from 'react';

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  Icon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Kotlin', 'Java', 'SQL'],
    Icon: Code2,
  },
  {
    id: 'frameworks-platforms',
    name: 'Frameworks & Platforms',
    skills: ['Compose Multiplatform', 'Kotlin Multiplatform', 'Jetpack Compose', 'Ktor', 'Android'],
    Icon: Layers3,
  },
  {
    id: 'cloud-db-tech',
    name: 'Cloud, DB & Technologies',
    skills: ['Firebase', 'Google Cloud'],
    Icon: CloudCog,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          <Cog className="w-10 h-10 md:w-12 md:h-12 text-accent" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground tracking-tight">Skills</h2>
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
                     <Badge key={skill} variant="outline" className="border-primary/50 text-primary-foreground bg-primary/20 hover:bg-primary/30 transition-colors text-sm px-3 py-1">
                      {skill}
                    </Badge>
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
