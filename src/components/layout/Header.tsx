import Link from 'next/link';
import { Aperture } from 'lucide-react'; // Using a generic, abstract icon

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
          <Aperture className="h-7 w-7 text-primary" />
          <span>Christopher-Two</span>
        </Link>
        {/* Optional Navigation Links Can Go Here */}
        {/* <nav className="hidden md:flex space-x-6">
          <Link href="#bio" className="text-muted-foreground hover:text-accent transition-colors">Bio</Link>
          <Link href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</Link>
          <Link href="#skills" className="text-muted-foreground hover:text-accent transition-colors">Skills</Link>
          <Link href="#tools" className="text-muted-foreground hover:text-accent transition-colors">Tools</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
