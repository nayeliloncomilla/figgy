import {
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'

const AuthContext = createContext({
  token: '',
  user: null,
  startSession: () => {},
  clearSession: () => {},
  isLoggedIn: false
})

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)

  const startSession = useCallback((session) => {
    setUser(session.user)
    setToken(session.token)
  }, [])

  const isLoggedIn = !!user

  const clearSession = useCallback(() => {
    setToken('')
    setUser(null)
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
      token,
      user,
      startSession,
      clearSession,
      isLoggedIn
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
