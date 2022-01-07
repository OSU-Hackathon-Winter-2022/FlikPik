// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }






import {  NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './navigation';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SwipeScreen from './screens/SwipeScreen';
import { authentication } from './firebase/firebase-config';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <SafeAreaView style={styles.root}>
          <Navigation />
      </SafeAreaView>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="SignIn" component={SignInScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});


export default App;