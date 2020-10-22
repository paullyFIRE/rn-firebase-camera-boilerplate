import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import auth from '@react-native-firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const onLogin = () => {
    Keyboard.dismiss()

    if (email === '' || password === '') {
      setErrorMessage('Email/Password required')
      return
    }

    setIsFetching(true)
    setErrorMessage('')

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code) setErrorMessage(error.code)
      })
      .finally(() => setIsFetching(false))
  }

  const onRegister = () => {
    Keyboard.dismiss()

    if (email === '' || password === '') {
      setErrorMessage('Email/Password required')
      return
    }

    setIsFetching(true)
    setErrorMessage('')

    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code) setErrorMessage(error.code)
      })
      .finally(() => setIsFetching(false))
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity disabled={isFetching} style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonLabel}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={isFetching} onPress={onRegister}>
          <Text style={styles.registerLabel}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 24,
    paddingVertical: 8,
  },
  input: {
    marginLeft: 16,
    paddingLeft: 8,
    minWidth: '75%',
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    fontSize: 16,
  },
  loginButton: {
    marginTop: 40,
    width: '80%',
    height: 50,
    borderColor: 'rgb(10,142,236)',
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonLabel: {
    fontSize: 20,
  },
  registerLabel: {
    marginTop: 20,
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 24,
    color: 'red',
    marginTop: 8,
    fontStyle: 'italic',
  },
})
