import { Link, useLocation } from 'react-router'
import { Button } from '../ui/Button'
import { useSupabase } from '../../../lib/hooks/useSupabase'

interface SidebarItem {
  id: string
  label: string
  icon: string
  href: string
  badge?: string
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    href: '/panel'
  },
  {
    id: 'users',
    label: 'Usuarios',
    icon: '👥',
    href: '/panel/usuarios'
  },
  {
    id: 'modules',
    label: 'Módulos',
    icon: '⚙️',
    href: '/panel/modulos'
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: '🔧',
    href: '/panel/configuracion'
  },
  {
    id: 'analytics',
    label: 'Analíticas',
    icon: '📈',
    href: '/panel/analiticas'
  },
  {
    id: 'projects',
    label: 'Proyectos',
    icon: '📁',
    href: '/panel/proyectos',
    badge: 'NUEVO'
  }
]

export function Sidebar() {
  const location = useLocation()
  const { user, signOut } = useSupabase()

  return (
    <div className="w-64 bg-[var(--color-background-secondary)] border-r border-[var(--color-contrast-border)] h-screen flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="p-6 border-b border-[var(--color-contrast-border)]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PM</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
              Plataforma Modular
            </h1>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Panel de Administración
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
            Navegación
          </h3>
          
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.id}
                to={item.href}
                className={`
                  flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${isActive 
                    ? 'bg-[var(--color-brand-primary)] text-white shadow-md' 
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-tertiary)] hover:text-[var(--color-text-primary)]'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs bg-[var(--color-brand-accent)] text-white px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-1">
          <h3 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
            Acciones Rápidas
          </h3>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-background-tertiary)] hover:text-[var(--color-text-primary)] transition-all duration-200 group">
            <span className="text-lg">➕</span>
            <span>Nuevo Proyecto</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-background-tertiary)] hover:text-[var(--color-text-primary)] transition-all duration-200 group">
            <span className="text-lg">🔍</span>
            <span>Buscar</span>
          </button>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-[var(--color-contrast-border)]">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-[var(--color-brand-secondary)] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
              {user?.email}
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Administrador
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          onClick={signOut}
          className="w-full text-sm"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )
}
