import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Containers from '../containers'
import { useAuth } from '../context/Authentication'

const Stack = createStackNavigator()

function Navigation() {
  const { user } = useAuth()

  const isSignedIn = !!user

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={Containers.Home} />
            <Stack.Screen name="Camera" component={Containers.Camera} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Containers.Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
