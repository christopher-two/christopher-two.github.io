import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PersonalBio = () => {
  const name = "Christopher Alejandro Maldonado Chavez";
  const description = "A passionate software developer with experience in mobile and multiplatform development. Always eager to learn new technologies and build innovative solutions that solve real-world problems. Enthusiastic about creating clean, efficient, and user-friendly applications.";

  return (
    <section id="bio" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Avatar className="w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 border-4 border-primary shadow-xl rounded-full">
          <AvatarImage 
            src="https://placehold.co/200x200.png" 
            alt={name} 
            data-ai-hint="professional portrait"
            className="rounded-full"
          />
          <AvatarFallback className="text-5xl bg-muted text-muted-foreground rounded-full">
            {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PersonalBio;
