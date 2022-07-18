//import { StatusBar } from 'expo-status-bar';
import { StatusBar ,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './screens/OnBoard';
import Login from './screens/Login';
import Register from './screens/Register';
import Tabs from './navigation/Tabs';
import Profile from './screens/Profile';
import ChangePass from './screens/ChangePass';
import Feedback from './screens/Feedback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect}from 'react';

const Stack = createNativeStackNavigator();

const OnBoardScreen = () => {
  return(
    <Stack.Navigator initialRouteName="OnBoard">
        <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
          <Stack.Screen name="ChangePass" component={ChangePass} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

const LoginScreen = () => {
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
          <Stack.Screen name="ChangePass" component={ChangePass} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

const HomeScreen = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


export default function App() {

  
  // First Lauch Code // 

  const [isFirstLaunch, SetIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLauched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLauched', 'true');
        SetIsFirstLaunch(true);
      }else{
        SetIsFirstLaunch(false);
      }
    })
  },[]);


  // If First Launch Onboarding Starts//
 if(isFirstLaunch == true) 
  {
    return (
      <NavigationContainer>
          <StatusBar hidden />
          <OnBoardScreen/>
      </NavigationContainer>
    );
  } 
  else   // If not First Launch Login Starts //
  {

    return (
      <NavigationContainer>
          <StatusBar hidden />
          <LoginScreen/>
      </NavigationContainer>
  );
  }

}
