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
          if (route.name === "Recommendations"){
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
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat Rooms" component={MessagesScreen} options={{ headerTitleAlign: "center"}} />
      <Tab.Screen name="Swipe" component={SwipeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn"component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SwipeMain" component={SwipeTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="SwipeSecond" component={SwipeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={({route}) => ({
          title: route.params.userName,
          headerTitleAlign: "center"
        })} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootNavigation;



