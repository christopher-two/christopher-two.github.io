
'use client'; // Necesario si se usan hooks como useState/useEffect, pero ya no para traducción

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Eliminados useEffect y useState si ya no se usan para traducción
// Eliminada la importación de useLanguage y translateText

const PersonalBio = () => {
  const name = "Christopher Alejandro Maldonado Chavez";
  // Descripción traducida directamente
  const description = "Un apasionado desarrollador de software con experiencia en desarrollo móvil y multiplataforma. Siempre ansioso por aprender nuevas tecnologías y construir soluciones innovadoras que resuelvan problemas del mundo real. Entusiasta por crear aplicaciones limpias, eficientes y fáciles de usar.";

  // Eliminada la lógica de traducción con IA
  // const [displayedDescription, setDisplayedDescription] = useState(description);
  // const [isLoadingTranslation, setIsLoadingTranslation] = useState(false);
  // const { selectedLanguage, getLanguageName } = useLanguage();

  // useEffect(() => {
  //   if (selectedLanguage === 'en') { // Asumimos que 'en' es el idioma original
  //     setDisplayedDescription(description);
  //     return;
  //   }

  //   const translateBio = async () => {
  //     setIsLoadingTranslation(true);
  //     const targetLanguageName = getLanguageName(selectedLanguage);
  //     if (!targetLanguageName) {
  //       console.warn(`No se encontró nombre de idioma para el código: ${selectedLanguage}`);
  //       setDisplayedDescription(description); //Fallback al original
  //       setIsLoadingTranslation(false);
  //       return;
  //     }
      
  //     try {
  //       // const translated = await translateText({ textToTranslate: description, targetLanguage: targetLanguageName });
  //       // setDisplayedDescription(translated.translatedText);
  //       // Lo anterior sería la llamada al flujo de IA, ahora es estático
  //       setDisplayedDescription(description); // Mostrar la descripción estática en español
  //     } catch (error) {
  //       console.error("Error traduciendo la biografía:", error);
  //       setDisplayedDescription(description); // Fallback al original en caso de error
  //     }
  //     setIsLoadingTranslation(false);
  //   };

  //   translateBio();
  // }, [selectedLanguage, description, getLanguageName]);

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
        {/* {isLoadingTranslation ? (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Traduciendo biografía...
          </p>
        ) : ( */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description} {/* Mostrar descripción directamente */}
          </p>
        {/* )} */}
      </div>
    </section>
  );
};

export default PersonalBio;
