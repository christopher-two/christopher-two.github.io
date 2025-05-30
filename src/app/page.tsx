import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PersonalBio from '@/components/sections/PersonalBio';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ToolsSection from '@/components/sections/ToolsSection';
import type { Project } from '@/components/shared/ProjectCard';
import { 
  Briefcase, Lightbulb, Globe, 
  Waves, Puzzle, ToyBrick, Palette, Flame, Heart, Paintbrush, TrendingUp 
} from 'lucide-react';

// Project Data
const showcaseProjects: Project[] = [
  {
    id: 'quickness',
    name: 'Quickness',
    description: 'A high-performance solution for fast-paced environments, focusing on efficiency and responsiveness.',
    technologies: ['Kotlin', 'Compose Multiplatform', 'Ktor', 'Coroutines'],
    Icon: Briefcase,
  },
  {
    id: 'calabozos',
    name: 'Calabozos y compuertas',
    description: 'An engaging game project exploring complex logic, procedural generation, and user interaction within a dungeon-crawler theme.',
    technologies: ['Java', 'Custom Game Engine', 'AI Algorithms'],
    Icon: Puzzle,
  },
  {
    id: 'lyra',
    name: 'Lyra',
    description: 'A creative application focusing on audio processing, synthesis, and interactive music generation.',
    technologies: ['Kotlin', 'Android SDK', 'Audio APIs', 'DSP'],
    Icon: Waves, // Changed from Waveform to Waves
  },
];

const learningProjects: Project[] = [
  {
    id: 'squidgame',
    name: 'SquidGame',
    description: 'A learning project replicating various game mechanics inspired by the popular series, built to explore state management and UI.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Realtime DB'],
    Icon: ToyBrick,
  },
  {
    id: 'adivina_rgb',
    name: 'Adivina el color RGB',
    description: 'A color guessing game developed to understand RGB color models, user input handling, and dynamic UI updates in Android.',
    technologies: ['Java', 'Android XML', 'Event Handling'],
    Icon: Palette,
  },
  {
    id: 'dragon_matches',
    name: 'Dragon Matches',
    description: 'A match-three puzzle game developed to explore game logic, 2D animations, and particle effects using a game framework.',
    technologies: ['Kotlin', 'LibGDX', '2D Graphics', 'Animation'],
    Icon: Flame,
  },
];

const webProjects: Project[] = [
  {
    id: 'dany',
    name: 'Dany<3',
    description: 'A personal web project with a focus on modern frontend design, animations, and delivering an engaging user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'GSAP'],
    Icon: Heart,
  },
  {
    id: 'eikocolors',
    name: 'EikoColors',
    description: 'A web tool for designers and developers to explore, generate, and manage color palettes with real-time previews.',
    technologies: ['React', 'Tailwind CSS', 'Chroma.js', 'Local Storage'],
    Icon: Paintbrush,
  },
  {
    id: 'asian_growth',
    name: 'Asian Growth Timeline',
    description: 'An interactive data visualization project showcasing historical economic and social growth indicators across Asian countries.',
    technologies: ['Vue.js', 'D3.js', 'Firebase Firestore', 'Responsive Design'],
    Icon: TrendingUp,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PersonalBio />
        <ProjectsSection title="Project Showcase" projects={showcaseProjects} SectionIcon={Briefcase} bgColorClass="bg-card" />
        <ProjectsSection title="Learning Projects" projects={learningProjects} SectionIcon={Lightbulb} bgColorClass="bg-background" />
        <ProjectsSection title="Web Projects" projects={webProjects} SectionIcon={Globe} bgColorClass="bg-card" />
        <SkillsSection /> {/* Defaults to bg-background */}
        <ToolsSection /> {/* Defaults to bg-card */}
      </main>
      <Footer />
    </>
  );
}
