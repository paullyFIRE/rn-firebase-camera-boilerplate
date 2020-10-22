import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import auth from '@react-native-firebase/auth'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthenticationProvider({ children }) {
  const [isInitializing, setIsInitializing] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const subscription = auth().onAuthStateChanged((user) => {
      setUser(user)
      if (isInitializing) setIsInitializing(false)
    })

    return subscription //unsubscribe on unmount
  }, [])

  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  )

  // move this to wherever it makes sense to wait while firebase connects
  if (isInitializing) return null

  return <AuthContext.Provider {...{ value }}>{children}</AuthContext.Provider>
}
