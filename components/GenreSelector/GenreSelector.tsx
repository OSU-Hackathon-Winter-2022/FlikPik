// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import { useState } from 'react';

// const GenreSelector = () => {
//     const [selectedLanguage, setSelectedLanguage] = React.useState();
//     const genreList = ['Mystery', 'Thriller', 'Romance', 'Sci-Fi', 'Family', 'Film-Noir', 'Biography', 'Drama', 'Crime', 'Western', 'Musical', 'History', 'War', 'Comedy', 'Fantasy', 'Action', 'Adventure', 'Animation', 'Horror', 'Music', 'Sport']  // REPLACE WITH LIST FROM IMDB API




//     return (
//         <View>
//         <Text>Hello</Text>
//         <Picker
//             style={styles.root}
//             selectedValue={selectedLanguage}
//             prompt='GENRES'
//             onValueChange={(itemValue, itemIndex) =>  // NEED TO GET THIS ITEM VALUE AND SAVE IT FOR DATABASE
//                 setSelectedLanguage(itemValue)

//         }>

//         <Picker.Item label="Select Type" value="0" />
//         <Picker.Item value='' label='Placeholder text...' />
//         <Picker.Item label={genreList[0]} value={genreList[0]} />
//         <Picker.Item label={genreList[1]} value={genreList[1]} />
//         <Picker.Item label={genreList[2]} value={genreList[2]} />
//         <Picker.Item label={genreList[3]} value={genreList[3]} />
//         <Picker.Item label={genreList[4]} value={genreList[4]} />
//         <Picker.Item label={genreList[5]} value={genreList[5]} />
//         <Picker.Item label={genreList[6]} value={genreList[6]} />
//         <Picker.Item label={genreList[7]} value={genreList[7]} />
//         <Picker.Item label={genreList[8]} value={genreList[8]} />
//         <Picker.Item label={genreList[9]} value={genreList[9]} />
//         <Picker.Item label={genreList[10]} value={genreList[10]} />
//         <Picker.Item label={genreList[11]} value={genreList[11]} />
//         <Picker.Item label={genreList[12]} value={genreList[12]} />
//         <Picker.Item label={genreList[13]} value={genreList[13]} />
//         <Picker.Item label={genreList[14]} value={genreList[14]} />
//         <Picker.Item label={genreList[15]} value={genreList[15]} />
//         <Picker.Item label={genreList[16]} value={genreList[16]} />
//         <Picker.Item label={genreList[17]} value={genreList[17]} />
//         <Picker.Item label={genreList[18]} value={genreList[18]} />
//         <Picker.Item label={genreList[19]} value={genreList[19]} />
//         <Picker.Item label={genreList[20]} value={genreList[20]} />
//         <Picker.Item label={genreList[21]} value={genreList[21]} />
//         </Picker>
//         </View>


//     );
// };

// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//         alignContent: "center",
//         textAlign: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'red',
//     }

// });


// export default GenreSelector;




import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import SmoothPicker from 'react-native-smooth-picker';

const genreList = ['Mystery', 'Thriller', 'Romance', 'Sci-Fi', 'Family', 'Film-Noir', 'Biography', 'Drama', 'Crime', 'Western', 'Musical', 'History', 'War', 'Comedy', 'Fantasy', 'Action', 'Adventure', 'Animation', 'Horror', 'Music', 'Sport'];

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? '#ABC9AF' : 'transparent',
          width: vertical ? 190 : 'auto',
        },
      ]}>
      <Text style={{ fontSize }}>{name}</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

export default function GenreSelector() {
  function handleChange(index) {
    setSelected(index);
    // console.warn(`Your selection is ${genreList[selected]}`)
  }

  const [selected, setSelected] = React.useState(4);
  const navigation = useNavigation();


  const onSelectPressed = () => {
      // console.warn("Swipe session");
      navigation.navigate('Swipe');
  };


  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={genreList}
          scrollAnimation
          onSelected={({ item, index }) => handleChange(index)}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet
          selectOnPress
        //   onTouchStart
        />
      </View>
      <View style={{height: 100}}>
        <Text>{`Your selection is ${genreList[selected]}`}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity  // NEED TO SEND OUR PICKER VALUE TO SWIPE SCREEN TO ALTER WHAT IS SHOWN
                style={styles.button}
                onPress={onSelectPressed}
            >
                <Text style={{color: "white", fontWeight: "bold", fontSize: 25}}>Start Swiping</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
  button: {
    // flex: 1,
    backgroundColor: "#880808",
    padding: 20,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 40,
    // marginTop: 180,

  },
});