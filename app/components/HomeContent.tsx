import { Link } from "react-router"
import { Button } from "./ui/Button"
import { useSupabase } from "../../lib/hooks/useSupabase"

export function HomeContent() {
  const { user, loading } = useSupabase()

  if (loading) {
    return <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          Hola, {user.email}
        </span>
        <Link to="/panel">
          <Button>Ir al Panel</Button>
        </Link>
      </div>
    )
  }

  return (
    <Link to="/login">
      <Button>Iniciar Sesión</Button>
    </Link>
  )
}
