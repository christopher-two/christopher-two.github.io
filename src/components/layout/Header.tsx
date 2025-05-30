import Link from 'next/link';
import { Aperture, Globe } from 'lucide-react'; // Using a generic, abstract icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'pt', name: 'Português' },
  { code: 'sl', name: 'Slovenščina' },
  { code: 'la', name: 'Latina' },
];

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
          <Aperture className="h-7 w-7 text-primary" />
          <span>Christopher-Two</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Optional Navigation Links Can Go Here */}
          {/* <nav className="hidden md:flex space-x-6">
            <Link href="#bio" className="text-muted-foreground hover:text-accent transition-colors">Bio</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</Link>
            <Link href="#skills" className="text-muted-foreground hover:text-accent transition-colors">Skills</Link>
            <Link href="#tools" className="text-muted-foreground hover:text-accent transition-colors">Tools</Link>
          </nav> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => console.log(`Language selected: ${lang.name}`)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
