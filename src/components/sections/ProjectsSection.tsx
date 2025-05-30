import ProjectCard from '@/components/shared/ProjectCard';
import type { Project } from '@/components/shared/ProjectCard';
import type { LucideIcon } from 'lucide-react';

interface ProjectsSectionProps {
  title: string;
  projects: Project[];
  SectionIcon: LucideIcon;
  bgColorClass?: string; // Optional background class for alternating sections
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ title, projects, SectionIcon, bgColorClass = 'bg-card' }) => {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')} className={`py-16 md:py-24 lg:py-32 ${bgColorClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          <SectionIcon className="w-10 h-10 md:w-12 md:h-12 text-accent" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground tracking-tight">{title}</h2>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">More projects coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
