import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './navigation'
import AuthenticationProvider from './context/Authentication'

export default function App() {
  return (
    <AuthenticationProvider>
      <Navigation />
    </AuthenticationProvider>
  )
}
