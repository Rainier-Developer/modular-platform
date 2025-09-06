import { useSupabase } from '../../../lib/hooks/useSupabase'
import { Button } from '../ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Sidebar } from './Sidebar'

export function AdminPanel() {
  const { user, loading } = useSupabase()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-primary)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--color-brand-primary)] mx-auto"></div>
          <p className="mt-4 text-[var(--color-text-secondary)]">Cargando panel...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-primary)]">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-[var(--color-status-error)]">Acceso Denegado</CardTitle>
            <CardDescription className="text-[var(--color-text-secondary)]">
              No tienes permisos para acceder a este panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = '/login'} className="w-full">
              Ir al Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="bg-[var(--color-background-secondary)] shadow-sm border-b border-[var(--color-contrast-border)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Dashboard
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Bienvenido de vuelta, {user.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-[var(--color-text-secondary)]">Última conexión</p>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {new Date(user.last_sign_in_at || '').toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Card */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl">
                  ¡Bienvenido al Panel de Administración!
                </CardTitle>
                <CardDescription>
                  Has iniciado sesión correctamente. Aquí puedes gestionar tu plataforma modular.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Usuario:</strong> {user.email}
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>Última conexión:</strong> {new Date(user.last_sign_in_at || '').toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usuarios</CardTitle>
                <CardDescription>Total de usuarios registrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">1</div>
                <p className="text-sm text-gray-600 mt-1">+0 desde ayer</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Módulos</CardTitle>
                <CardDescription>Módulos activos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">0</div>
                <p className="text-sm text-gray-600 mt-1">Pendientes de configuración</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sistema</CardTitle>
                <CardDescription>Estado del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">✓</div>
                <p className="text-sm text-gray-600 mt-1">Todo funcionando</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
                <CardDescription>
                  Accesos directos a las funciones más utilizadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">👥</span>
                    <span>Gestionar Usuarios</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">⚙️</span>
                    <span>Configurar Módulos</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">📊</span>
                    <span>Ver Estadísticas</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">🔧</span>
                    <span>Configuración</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}
