import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SwipeScreen from '../screens/SwipeScreen/SwipeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import GenreScreen from '../screens/GenreScreen/GenreScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen'
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen'
import RecommendationsScreen from '../screens/RecommendationsScreen/RecommendationsScreen';
import TestScreen from '../screens/TestScreen/TestScreen';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();



// Team note: more icons can be found here (select Ionicons as a filter): https://icons.expo.fyi

function SwipeTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          let iconName;
          let size;
          let color;

          if (route.name === "Settings"){
            iconName = "settings";
            size = 24;
            color= "black";
          } 
          if (route.name === "Home"){
            iconName = "home";
            size = 24;
            color= "black";
          }
          if (route.name === "Swipe"){
            iconName = "film";
            size = 24;
            color= "black";
          }
          if (route.name === "Matches"){
            iconName = "md-thumbs-up";
            size = 24;
            color= "black";
          }
          if (route.name === "Chat Rooms"){
            iconName = "chatbubbles";
            size = 24;
            color= "black";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })
      }
    >
      <Tab.Screen name="Swipe" component={SwipeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat Rooms" component={MessagesScreen} />
      
      <Tab.Screen name="Matches" component={RecommendationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn"component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SwipeMain" component={SwipeTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        
        <Stack.Screen name="SwipeSecond" component={SwipeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Genre" component={GenreScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={({route}) => ({
          title: route.params.userName,
          headerTitleAlign: "center",
        })} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Matches" component={RecommendationsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootNavigation;



