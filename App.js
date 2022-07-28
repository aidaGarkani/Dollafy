//import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './.expo-shared/src/screens/OnBoard';
import Login from './.expo-shared/src/screens/Login';
import Register from './.expo-shared/src/screens/Register';
import Tabs from './.expo-shared/src/components/navigation/Tabs';
import Profile from './.expo-shared/src/screens/Profile';
import ForgetPass from './.expo-shared/src/screens/ForgetPass';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import Feedback from './.expo-shared/src/screens/Feedback';
import ChangePass from './.expo-shared/src/screens/ChangePass';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import ExpenseContextProvider from './.expo-shared/src/Context/ExpensesContext';

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

    return (
      <ExpenseContextProvider>
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <StatusBar hidden />
            <Stack.Navigator initialRouteName="OnBoard">
              <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false }} />
              <Stack.Screen name="ChangePass" component={ChangePass} options={{ headerShown: false }} />
              <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
            </Stack.Navigator>
          </ApplicationProvider>
        </NavigationContainer>
      </ExpenseContextProvider>
    );
  }
  else   // If not First Launch Login Starts //
  {
    return (
      <ExpenseContextProvider>
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <StatusBar hidden />
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
              <Stack.Screen name="ChangePass" component={ChangePass} options={{ headerShown: true }} />
              <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: true }} />
            </Stack.Navigator>
          </ApplicationProvider>
        </NavigationContainer>
      </ExpenseContextProvider>
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
