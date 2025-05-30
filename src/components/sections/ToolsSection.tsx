import { Package, Send, Figma, GitFork, PenTool, Terminal, Wrench } from 'lucide-react';
import type React from 'react';

interface Tool {
  id: string;
  name: string;
  Icon: React.ElementType;
}

const tools: Tool[] = [
  { id: 'docker', name: 'Docker', Icon: Package },
  { id: 'postman', name: 'Postman', Icon: Send },
  { id: 'figma', name: 'Figma', Icon: Figma },
  { id: 'git', name: 'Git', Icon: GitFork },
  { id: 'inkscape', name: 'Inkscape', Icon: PenTool },
  { id: 'linux', name: 'Linux', Icon: Terminal },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          <Wrench className="w-10 h-10 md:w-12 md:h-12 text-accent" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground tracking-tight">Tools Proficiency</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 text-center">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center p-6 rounded-lg bg-background hover:bg-background/70 transition-colors duration-300 shadow-md border border-border hover:border-accent/50">
              <tool.Icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-accent" />
              <span className="text-md font-medium text-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
