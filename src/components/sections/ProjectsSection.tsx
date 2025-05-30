
import ProjectCard from '@/components/shared/ProjectCard';
import type { Project } from '@/components/shared/ProjectCard';
import type { LucideIcon } from 'lucide-react';

interface ProjectsSectionProps {
  title: string;
  projects: Project[];
  SectionIcon: LucideIcon | string; // Allow string for image URLs
  bgColorClass?: string; // Clase de fondo opcional para alternar secciones
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ title, projects, SectionIcon, bgColorClass = 'bg-card' }) => {
  
  const renderSectionIcon = () => {
    if (typeof SectionIcon === 'string') {
      return <img src={SectionIcon} alt={`${title} section icon`} className="w-10 h-10 md:w-12 md:h-12 object-contain" />;
    }
    // If it's a LucideIcon component
    const IconComponent = SectionIcon;
    return <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-accent" />;
  };

  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')} className={`py-16 md:py-24 lg:py-32 ${bgColorClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          {renderSectionIcon()}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground tracking-tight">{title}</h2>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">¡Más proyectos próximamente!</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
