//import { StatusBar } from 'expo-status-bar';
import { StatusBar ,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './screens/OnBoard';
import Login from './screens/Login';
import Register from './screens/Register';
import Tabs from './navigation/Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect}from 'react';


const Stack = createNativeStackNavigator();


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

    var userid=""
    var username=""

    return (
      <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName="OnBoard">
        <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
  else   // If not First Launch Login Starts //
  {
    var userid=""
    var username=""

    return (
      <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
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
