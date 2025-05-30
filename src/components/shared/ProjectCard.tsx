// src/components/shared/ProjectCard.tsx
'use client';

import type React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import NextImage from 'next/image';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react'; // Keep for iconMap typing
import { ToyBrick, Palette, Flame, Heart, Paintbrush, TrendingUp } from 'lucide-react'; // Import icons used by name

const iconMap: Record<string, LucideIcon> = {
  ToyBrick,
  Palette,
  Flame,
  Heart,
  Paintbrush,
  TrendingUp,
};

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  Icon?: string; // Can be a URL or a key from iconMap
  imageUrls?: string[];
  imageHints?: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, technologies, Icon: iconIdentifier, imageUrls, imageHints } = project;
  const hasImages = imageUrls && imageUrls.length > 0;

  const renderIcon = () => {
    if (!iconIdentifier) return null;

    // Check if it's a URL (common image formats or SVG)
    if (iconIdentifier.startsWith('https://') || iconIdentifier.startsWith('http://') || iconIdentifier.startsWith('/') || iconIdentifier.toLowerCase().endsWith('.svg')) {
      return <img src={iconIdentifier} alt={`${name} logo`} className="w-8 h-8 flex-shrink-0 mt-1 object-contain" />;
    }
    
    // It's an icon name from lucide-react
    const IconComponent = iconMap[iconIdentifier];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-accent flex-shrink-0 mt-1" />;
    }
    return null; // Or a default icon if name not found or not a URL
  };

  const cardRenderContent = (
    <Card className="flex flex-col h-full bg-card shadow-lg group-hover:shadow-accent/20 transition-shadow duration-300 rounded-lg overflow-hidden border border-border data-[state=open]:ring-2 data-[state=open]:ring-accent data-[state=open]:ring-offset-2 data-[state=open]:ring-offset-background">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {renderIcon()}
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

  if (hasImages) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button 
            type="button" 
            className="text-left w-full h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            aria-label={`Ver detalles y imágenes del proyecto ${name}`}
          >
            {cardRenderContent}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] max-h-[90vh] overflow-y-auto bg-background border-border p-6 rounded-lg">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-semibold text-foreground">{name}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Imágenes del proyecto. Haz scroll para ver más si es necesario.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 my-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-border shadow-sm aspect-[16/9] relative bg-muted/20">
                <NextImage
                  src={url}
                  alt={`Imagen ${index + 1} del proyecto ${name}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                  data-ai-hint={imageHints && imageHints[index] ? imageHints[index] : "project image"}
                />
              </div>
            ))}
          </div>
          <DialogFooter className="mt-6 sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return cardRenderContent;
};

export default ProjectCard;
