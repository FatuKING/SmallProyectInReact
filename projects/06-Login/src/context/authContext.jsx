import { createContext, useState } from 'react'
import { registerUser, loginUser } from '../logic/auth'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorCheckPassword, setErrorCheckPassword] = useState('')

  const logout = () => {
    setToken(null)
    setUser(null)
  }

  const validateEmail = (e) => {
    const query = e.target.value

    setEmail(query)

    if (query.match(/^$/)) {
      setErrorEmail(null)
      return
    }

    if (!query.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setErrorEmail('Dirrecion de correo no valida')
      return
    }

    if (query.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setErrorEmail(null)
    }
  }

  const validatePassword = (e) => {
    const query = e.target.value

    setPassword(query)

    if (query.match(/^$/)) {
      setErrorPassword(null)
      return
    }

    if (query.length < 6) {
      setErrorPassword('Contraseña muy corta')
      return
    }

    if (!query.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)) {
      setErrorPassword('Tiene que contener al menos una mayuscula y un simbolo')
      return
    }

    if (query.length > 6) {
      setErrorPassword(null)
      return
    }

    if (query.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)) {
      setErrorPassword(null)
    }
  }

  const validateCheckPassword = (e) => {
    const query = e.target.value

    setCheckPassword(query)

    if (query.match(/^$/)) {
      setErrorCheckPassword(null)
      return
    }

    if (query.length < 6) {
      setErrorCheckPassword('Contraseña muy corta')
      return
    }

    if (!query.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)) {
      setErrorCheckPassword('Tiene que contener al menos una mayuscula y un simbolo')
      return
    }

    if (query !== password) {
      setErrorCheckPassword('Contraseña no coinciden')
      return
    }

    if (query === password) {
      setErrorCheckPassword(null)
      return
    }

    if (query.length > 6) {
      setErrorCheckPassword(null)
    }

    if (query.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)) {
      setErrorCheckPassword(null)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    const form = new window.FormData(e.target)

    const userData = {
      email: form.get('Email'),
      password: form.get('Password')
    }

    await registerUser(userData)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const form = new window.FormData(e.target)

    const userData = {
      email: form.get('Email'),
      password: form.get('Password')
    }

    const data = await loginUser(userData)
    setToken(data.token)
    setUser(data.email)
  }

  return (
    <AuthContext.Provider value={{
      token,
      user,
      email,
      password,
      checkPassword,
      errorEmail,
      errorPassword,
      errorCheckPassword,
      validateEmail,
      validatePassword,
      validateCheckPassword,
      handleRegister,
      handleLogin,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
