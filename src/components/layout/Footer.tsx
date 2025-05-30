const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-border bg-background">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} Christopher Alejandro Maldonado Chavez. All rights reserved.</p>
        <p className="text-xs mt-2">
          Inspired by minimalist design and a touch of The Last of Us atmosphere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
