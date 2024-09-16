import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export function useAuth () {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
