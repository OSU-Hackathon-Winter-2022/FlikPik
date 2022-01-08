// /**
//  * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
//  * https://reactnavigation.org/docs/getting-started
//  *
//  */
// import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as React from 'react';
// import { ColorSchemeName, Pressable } from 'react-native';

// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
// import ModalScreen from '../screens/ModalScreen';
// import NotFoundScreen from '../screens/NotFoundScreen';
// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
// import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
// import LinkingConfiguration from './LinkingConfiguration';

// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// /**
//  * A root stack navigator is often used for displaying modals on top of all other content.
//  * https://reactnavigation.org/docs/modal
//  */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

// /**
//  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
//  * https://reactnavigation.org/docs/bottom-tab-navigator
//  */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }


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
import RecommendationsScreen from '../screens/RecommendationsScreen/RecommendationsScreen';
// import Tabs from './tabs'
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
          if (route.name === "Test Screen"){
            iconName = "checkmark-circle";
            size = 24;
            color= "black";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }

      })

      }
    >
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test Screen" component={TestScreen} />
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