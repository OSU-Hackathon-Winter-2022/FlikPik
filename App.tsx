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





import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './navigation';


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