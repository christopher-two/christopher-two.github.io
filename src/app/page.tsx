
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PersonalBio from '@/components/sections/PersonalBio';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ToolsSection from '@/components/sections/ToolsSection';
import type { Project } from '@/components/shared/ProjectCard';
import { 
  Briefcase, Lightbulb, Globe
} from 'lucide-react'; // Icons for SectionIcon remain, project-specific icons removed

// Datos de Proyectos (en español)
const showcaseProjects: Project[] = [
  {
    id: 'quickness',
    name: 'Quickness',
    description: 'Aplicación de gestión de accesos desarrollada para Override. Responsable del frontend con Compose Multiplatform (Android/iOS), implementando arquitectura MVVM, multimodularidad, Clean Architecture y modelo de capas. Se utilizaron tecnologías como Ktor, Koin, Coil, Room, DataStore, KSP, Moko Permissions, Biometric y Firebase (Auth, Firestore, Cloud Run Functions).',
    technologies: ['Compose Multiplatform', 'Kotlin', 'Ktor', 'Firebase', 'Clean Architecture', 'MVVM'],
    Icon: 'https://override.com.mx/SRC/IMG/logo/LogoQuicknessQC.svg',
    imageUrls: [
      'https://placehold.co/800x450.png',
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'app interface',
      'mobile mockup',
    ],
  },
  {
    id: 'calabozos',
    name: 'Calabozos y compuertas',
    description: 'Libro interactivo desarrollado para Override utilizando Compose Multiplatform. Se aplicaron arquitecturas multimodular, modelo de capas, MVVM y Clean Architecture, con tecnologías como Koin, Coil y Supabase.',
    technologies: ['Compose Multiplatform', 'Kotlin', 'Supabase', 'Koin', 'Clean Architecture'],
    Icon: 'https://override.com.mx/SRC/IMG/logo/Logo%20Odin.svg',
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'book illustration',
    ],
  },
  {
    id: 'lyra',
    name: 'Lyra',
    description: 'Aplicación de nutrición en desarrollo, enfocada exclusivamente en Jetpack Compose para Android. Explora funcionalidades para el seguimiento y planificación nutricional.',
    technologies: ['Jetpack Compose', 'Kotlin', 'Android'],
    Icon: 'https://override.com.mx/SRC/IMG/logo/Logo%20Gaia%20SB.svg',
    imageUrls: [
      'https://placehold.co/800x450.png',
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'nutrition app',
      'health dashboard',
    ],
  },
];

const learningProjects: Project[] = [
  {
    id: 'squidgame',
    name: 'SquidGame',
    description: 'Proyecto inspirado en "El Juego del Calamar". Consta de una app de control para participantes (Compose Multiplatform para Wasm/Desktop) y una app para jugadores (Jetpack Compose para Android). Se exploraron tecnologías como Koin, Ktor, Firebase Realtime Database, Firebase Firestore y Coil.',
    technologies: ['Compose Multiplatform', 'Jetpack Compose', 'Kotlin', 'Firebase', 'Ktor', 'Koin'],
    Icon: 'ToyBrick', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'game screenshot',
    ],
  },
  {
    id: 'adivina_rgb',
    name: 'Adivina el color RGB',
    description: 'Mini-juego desarrollado en Compose Multiplatform para Desktop. El objetivo es adivinar un color RGB, sirviendo como práctica para el manejo de colores en el framework.',
    technologies: ['Compose Multiplatform', 'Kotlin', 'Desktop'],
    Icon: 'Palette', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'color game',
    ],
  },
  {
    id: 'dragon_matches',
    name: 'Dragon Matches',
    description: 'Aplicación inspirada en Tinder con temática de Dragon Ball, desarrollada en Jetpack Compose. Se exploraron tecnologías como Ktor, Koin y Coil, y se aplicó la arquitectura MVVM. Sirvió para practicar el consumo de APIs y animaciones de drag & drop.',
    technologies: ['Jetpack Compose', 'Kotlin', 'Ktor', 'Koin', 'MVVM', 'Android'],
    Icon: 'Flame', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'dating app',
      'profile card',
    ],
  },
];

const webProjects: Project[] = [
  {
    id: 'dany',
    name: 'Dany<3',
    description: 'Página web personal desarrollada con cariño, enfocada en un diseño moderno y una experiencia de usuario atractiva para mi novia.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    Icon: 'Heart', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'personal website',
    ],
  },
  {
    id: 'eikocolors',
    name: 'EikoColors',
    description: 'Herramienta web en desarrollo para una empresa de diseño gráfico, destinada a la exploración y gestión de paletas de colores.',
    technologies: ['React', 'Tailwind CSS', 'Next.js'],
    Icon: 'Paintbrush', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'color palette',
    ],
  },
  {
    id: 'asian_growth',
    name: 'Asian Growth Timeline',
    description: 'Proyecto escolar vendido a un estudiante: una línea de tiempo interactiva que visualiza datos históricos sobre el crecimiento económico y social en países asiáticos.',
    technologies: ['Vue.js', 'D3.js', 'Data Visualization'],
    Icon: 'TrendingUp', // Changed to string name
    imageUrls: [
      'https://placehold.co/800x450.png',
    ],
    imageHints: [
      'timeline chart',
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PersonalBio />
        <ProjectsSection title="Proyectos Destacados" projects={showcaseProjects} SectionIcon={Briefcase} bgColorClass="bg-card" />
        <ProjectsSection title="Proyectos de Aprendizaje" projects={learningProjects} SectionIcon={Lightbulb} bgColorClass="bg-background" />
        <ProjectsSection title="Proyectos Web" projects={webProjects} SectionIcon={Globe} bgColorClass="bg-card" />
        <SkillsSection /> {/* bg-background por defecto */}
        <ToolsSection /> {/* bg-card por defecto */}
      </main>
      <Footer />
    </>
  );
}
