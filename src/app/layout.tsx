
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'El Último Hielo | Conciencia Ártica',
  description: 'Una experiencia inmersiva que documenta el impacto del calentamiento global y el deshielo en el hábitat de los osos polares.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
