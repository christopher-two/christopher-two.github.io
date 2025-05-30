
const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-border bg-background">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} Christopher Alejandro Maldonado Chavez. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Con cariño &lt;3
        </p>
      </div>
    </footer>
  );
};

export default Footer;
