
//      ###############       NEW CODE     #########################

import { LogBox, StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './navigation';

LogBox.ignoreAllLogs();

const App = () => {
  return (
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});


export default App;
