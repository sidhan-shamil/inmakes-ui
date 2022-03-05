import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Register from './src/Register'
import Otp from './src/Otp'
import StudentDetails from './src/StudentDetails'
import SchoolBoard from './src/SchoolBoard'
import AppTour from './src/AppTour'
import Home from './src/Home'
// import DrawerContent from './src/Drawer/DrawerContent'
// import ExamCorner from './src/Drawer/ExamCorner'
// import Subscriptions from './src/Drawer/Subrscriptions'
// import Analytics from './src/Drawer/Analytics'
// import Downloads from './src/Drawer/Downloads'
// import Notifications from './src/Drawer/Notifications'
// import Referrals from './src/Drawer/Referrals'
// import Shareapp from './src/Drawer/Shareapp'
// import Logout from './src/Drawer/Logout'
import Biology from './src/Biology'
import Profile from './src/Tab/Profile'
import Recent from './src/Tab/Recent'
import Exams from './src/Tab/Exams'
import Contact from './src/Tab/Contact'

const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();

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
        name='Tab'
        component={MyTabs}
        options={{ headerShown: false }} />
      {/* <Stack.Screen
        name='Drawer'
        component={MyDrawer}
        options={{ headerShown: false }} /> */}
      <Stack.Screen
        name='Biology'
        component={Biology}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent{...props} />}>
//       <Drawer.Screen
//         name='ExamCorner'
//         component={ExamCorner} />
//       <Drawer.Screen
//         name='Subscriptions'
//         component={Subscriptions} />
//       <Drawer.Screen
//         name='Analytics'
//         component={Analytics} />
//       <Drawer.Screen
//         name='Downloads'
//         component={Downloads} />
//       <Drawer.Screen
//         name='Notifications'
//         component={Notifications} />
//       <Drawer.Screen
//         name='Referrals'
//         component={Referrals} />
//       <Drawer.Screen
//         name='Shareapp'
//         component={Shareapp} />
//       <Drawer.Screen
//         name='Logout'
//         component={Logout} />
//     </Drawer.Navigator>
//   )
// }

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: '#C2C2C2',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='home' size={24} color={'#00C458'} /> : <Icon name='home' size={24} color={'#C2C2C2'} />
        }} />
      <Tab.Screen
        name='Recent'
        component={Recent}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: '#C2C2C2',
          tabBarIndicatorStyle: {
            backgroundColor: '#00C458'
          },
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='play-arrow' size={24} color={'#00C458'} /> : <Icon name='play-arrow' size={24} color={'#C2C2C2'} />
        }} />
      <Tab.Screen
        name='Exams'
        component={Exams}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: '#C2C2C2',
          tabBarIndicatorStyle: {
            backgroundColor: '#00C458'
          },
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='article' size={24} color={'#00C458'} /> : <Icon name='article' size={24} color={'#C2C2C2'} />
        }} />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: '#C2C2C2',
          tabBarIndicatorStyle: {
            backgroundColor: '#00C458'
          },
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='account-circle' size={24} color={'#00C458'} /> : <Icon name='account-circle' size={24} color={'#C2C2C2'} />
        }} />
      <Tab.Screen
        name='Contact'
        component={Contact}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: '#C2C2C2',
          tabBarIndicatorStyle: {
            backgroundColor: '#00C458'
          },
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='email' size={24} color={'#00C458'} /> : <Icon name='email' size={24} color={'#C2C2C2'} />
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}