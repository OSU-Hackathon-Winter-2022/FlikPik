import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../../navigation';
import Tabs from '../../navigation/tabs';

const Swipe = () => {
    return (

        // <NavigationContainer independent={true}>
        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>swipe this</Text>
        </View>

        // {/* </NavigationContainer> */}


    );
};

export default Swipe



// const App = () => {

//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }