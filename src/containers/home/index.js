import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import { useAuth } from '../../context/Authentication'

export default function Home({ navigation }) {
  const { user } = useAuth()

  const onNavigateCamera = () => navigation.navigate('Camera')
  const onSignOut = () => auth().signOut()

  return (
    <View style={styles.container}>
      {user.email && <Text style={styles.emailText}>Welcome, {user.email}</Text>}

      <TouchableOpacity style={styles.buttonPrimary} onPress={onNavigateCamera}>
        <Text style={styles.buttonPrimaryLabel}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPrimary} onPress={onSignOut}>
        <Text style={styles.buttonPrimaryLabel}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    marginTop: 40,
    height: 60,
    minWidth: '60%',
    borderColor: 'rgb(10,142,236)',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryLabel: {
    fontSize: 20,
  },
  emailText: {
    fontSize: 20,
  },
})
