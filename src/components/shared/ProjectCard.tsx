import type React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  Icon?: LucideIcon;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, technologies, Icon } = project;
  return (
    <Card className="flex flex-col h-full bg-card shadow-lg hover:shadow-accent/10 transition-shadow duration-300 rounded-lg overflow-hidden border border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {Icon && <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />}
          <CardTitle className="text-2xl font-semibold text-foreground">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/20 text-accent hover:bg-primary/30 transition-colors text-xs px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
