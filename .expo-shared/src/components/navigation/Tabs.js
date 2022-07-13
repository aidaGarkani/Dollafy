import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import Budget from '../../screens/Budget';

const Tab = createBottomTabNavigator();


export default function Tabs() {

  return (
    <Tab.Navigator {...{ screenOptions, tabBarOptions: { showLabel: false } }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
            <Image source={require('../../assets/images/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#43978D' : '#748c94',
              }}
            />
            <Text style={{ color: focused ? '#43978D' : '#748c94', fontSize: 12 }}>
              Home
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name="Budget" component={Budget} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
            <Image source={require('../../assets/images/budget.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#43978D' : '#748c94',
              }}
            />
            <Text style={{ color: focused ? '#43978D' : '#748c94', fontSize: 12 }}>
              Budget
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
            <Image source={require('../../assets/images/setting.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#43978D' : '#748c94',
              }}
            />
            <Text style={{ color: focused ? '#43978D' : '#748c94', fontSize: 12 }}>
              Settings
            </Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}

const screenOptions = {
  tabBarStyle: {
    showLabel: false,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 70,
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: .25
  }
}



