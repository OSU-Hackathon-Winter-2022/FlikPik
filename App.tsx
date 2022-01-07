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



//      ###############       NEW CODE     #########################

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './navigation';
import Tabs from './navigation/tabs';
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';



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



// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn">
//         <Stack.Screen name="Sign In" component={SignInScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }