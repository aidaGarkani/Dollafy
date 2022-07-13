//import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './.expo-shared/src/screens/OnBoard';
import Login from './.expo-shared/src/screens/Login';
import Register from './.expo-shared/src/screens/Register';
import Tabs from './.expo-shared/src/components/navigation/Tabs';
import Profile from './.expo-shared/src/screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Stack = createNativeStackNavigator();


export default function App() {


  // First Lauch Code // 

  const [isFirstLaunch, SetIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLauched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLauched', 'true');
        SetIsFirstLaunch(true);
      } else {
        SetIsFirstLaunch(false);
      }
    })
  }, []);


  // If First Launch Onboarding Starts//
  if (isFirstLaunch == true) {

    var userid = ""
    var username = ""

    return (
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar hidden />
          <Stack.Navigator initialRouteName="OnBoard">
            <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>

    );
  }
  else   // If not First Launch Login Starts //
  {
    var userid = ""
    var username = ""

    return (
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar hidden />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
    );
  }

  //Code to show Onboarding

  //  return (
  //   <NavigationContainer>
  //   <StatusBar hidden />
  //     <Stack.Navigator initialRouteName="OnBoard">
  //       <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
  //       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  //       <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
  //       <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

}
