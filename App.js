import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Register from './src/Register'
import Otp from './src/Otp'
import StudentDetails from './src/StudentDetails'
import SchoolBoard from './src/SchoolBoard'
import AppTour from './src/AppTour'
import Home from './src/Home'
import DrawerContent from './src/Drawer/DrawerContent'
import ExamCorner from './src/Drawer/ExamCorner'
import Subscriptions from './src/Drawer/Subrscriptions'
import Analytics from './src/Drawer/Analytics'
import Downloads from './src/Drawer/Downloads'
import Notifications from './src/Drawer/Notifications'
import Referrals from './src/Drawer/Referrals'
import Shareapp from './src/Drawer/Shareapp'
import Logout from './src/Drawer/Logout'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='StudentDetails'
        component={StudentDetails}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='SchoolBoard'
        component={SchoolBoard}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='AppTour'
        component={AppTour}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Drawer'
        component={MyDrawer}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent{...props} />}>
      <Drawer.Screen
        name='ExamCorner'
        component={ExamCorner} />
      <Drawer.Screen
        name='Subscriptions'
        component={Subscriptions} />
      <Drawer.Screen
        name='Analytics'
        component={Analytics} />
      <Drawer.Screen
        name='Downloads'
        component={Downloads} />
      <Drawer.Screen
        name='Notifications'
        component={Notifications} />
      <Drawer.Screen
        name='Referrals'
        component={Referrals} />
      <Drawer.Screen
        name='Shareapp'
        component={Shareapp} />
      <Drawer.Screen
        name='Logout'
        component={Logout} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}