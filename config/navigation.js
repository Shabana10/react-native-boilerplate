import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login.js';
import Signup from '../screens/signup.js';
import Mainscreen from '../screens/mainscreen.js';
import Loading from '../screens/loading.js'
import MyCard from '../screens/MyCard.js';
import { Icon } from 'react-native-elements';
import MyInput from '../screens/MyInput.js';
import MyBtn from '../screens/MyBtn.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
// const BottomTab = () => {
//   return <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Main') {
//           iconName = focused
//             ? "home"
//             : "home"
//         } else if (route.name === 'Input') {
//           iconName = focused
//             ? 'person'
//             : 'person-outline';
//         } else if (route.name === 'Cards') {
//           iconName = focused
//             ? 'person-add'
//             : 'person-add'
//         } else if (route.name === 'Button') {
//           iconName = focused
//             ? 'menu'
//             : 'menu'
//         }

//         // You can return any component that you like here!
//         return <Icon name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray',
//     })}
//   >
//     <Tab.Screen options={{ headerShown: false }} name="Main" component={Mainscreen} />
//     <Tab.Screen options={{ headerShown: false }} name="Login" component={Login} />
//     <Tab.Screen options={{ headerShown: false }} name="Input" component={MyInput} />
//     <Tab.Screen options={{ headerShown: false }} name="Cards" component={MyCard} />
//     <Tab.Screen options={{ headerShown: false }} name="Button" component={MyBtn} />
//   </Tab.Navigator>
// }

export default function AppNavigation() {
  const [isloggedin, setLogged] = useState('')
  useEffect(() => {
    const token = AsyncStorage.getItem('token')

    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {
          isloggedin == null ?
            (<Stack.Screen options={{ headerShown: false }} name='Loading' component={Loading} />)
            : isloggedin ?
              (<>
                <Stack.Screen options={{ headerShown: false }} name='Home' component={Mainscreen}></Stack.Screen>
                <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
              </>)
              :
              (<>
                <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
              </>)
        }
        {/* <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} /> */}
        <Stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
        {/* <Stack.Screen options={{ headerShown: false }} name='Loading' component={Loading} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Mainscreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}