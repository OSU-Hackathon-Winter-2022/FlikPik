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
import RecommendationsScreen from '../screens/RecommendationsScreen/RecommendationsScreen'
import TestScreen from '../screens/TestScreen/TestScreen'

const Stack = createNativeStackNavigator();

function SwipeTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
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
        <Stack.Screen name="Sign In"component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SwipeMain" component={SwipeTab} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootNavigation;







// const RootNavigation = () => {
//   return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="SignIn" component={SignInScreen} />
//                 <Stack.Screen name="SignUp" component={SignUpScreen} />
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Swipe" component={SwipeScreen} />
//                 <Stack.Screen name="Settings" component={SettingsScreen} />
//                 <Stack.Screen name="Genre" component={GenreScreen} />
//                 <Stack.Screen name="Chat" component={ChatScreen} />
//                 <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
//                 <Stack.Screen name="Test" component={TestScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//   );
// };
// export default RootNavigation;



// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Genre" component={GenreScreen} />
//             <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
//             <Tab.Screen name="Chat" component={ChatScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     );
// };

// export default Tabs;