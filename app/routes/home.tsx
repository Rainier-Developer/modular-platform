import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Plataforma Modular" },
    { name: "description", content: "Bienvenido a tu plataforma modular con React Router y Supabase" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* Header */}
      <header className="bg-[var(--color-background-secondary)] border-b border-[var(--color-contrast-border)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                Plataforma Modular
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="cursor-pointer">
                <Button>Iniciar Sesión</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
            Bienvenido a tu
            <span className="text-[var(--color-brand-primary)]"> Plataforma Modular</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-[var(--color-text-secondary)] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Una plataforma moderna construida con React Router, Supabase y TypeScript.
            Gestiona tu aplicación de manera eficiente y escalable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                React Router v7
              </CardTitle>
              <CardDescription>
                Framework moderno con renderizado del lado del servidor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-[var(--color-text-tertiary)] space-y-1">
                <li>• SSR habilitado</li>
                <li>• Hot Module Replacement</li>
                <li>• TypeScript integrado</li>
                <li>• Optimización automática</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">🗄️</span>
                Supabase
              </CardTitle>
              <CardDescription>
                Base de datos en tiempo real con autenticación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-[var(--color-text-tertiary)] space-y-1">
                <li>• Autenticación integrada</li>
                <li>• Base de datos PostgreSQL</li>
                <li>• APIs automáticas</li>
                <li>• Tiempo real</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Vite + Tailwind
              </CardTitle>
              <CardDescription>
                Herramientas de desarrollo modernas y rápidas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-[var(--color-text-tertiary)] space-y-1">
                <li>• Compilación ultra rápida</li>
                <li>• CSS utility-first</li>
                <li>• Componentes reutilizables</li>
                <li>• Diseño responsivo</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>¿Listo para comenzar?</CardTitle>
              <CardDescription>
                Inicia sesión para acceder a todas las funcionalidades de tu plataforma modular.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/login" className="cursor-pointer">
                <Button size="lg" className="w-full sm:w-auto">
                  Iniciar Sesión
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
