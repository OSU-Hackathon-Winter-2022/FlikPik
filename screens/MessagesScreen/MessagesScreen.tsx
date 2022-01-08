import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../../styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'The Homie',
    userImg: require('../../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Graphs can be used to model a plethora of natural objects, such as connections in ...',
  },
  {
    id: '2',
    userName: 'Tommy',
    userImg: require('../../assets/users/user-1.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Did you see Spider-Man yet???',
  },
  {
    id: '3',
    userName: 'Kimberly Hart',
    userImg: require('../../assets/users/user-4.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey, Zordon wants us to be early for the pizza party',
  },
  {
    id: '4',
    userName: 'T-Kwan',
    userImg: require('../../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Yo, dont tell Zordon I broke the new ice-cream machine, thanks fam',
  },
  {
    id: '5',
    userName: 'Boss',
    userImg: require('../../assets/users/user-7.jpg'),
    messageTime: '1 day ago',
    messageText:
      'WHO BROKE THE ICE CREAM MACHINE???',
  },
  {
    id: '6',
    userName: 'Jason Lee Scott',
    userImg: require('../../assets/users/user-8.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Just saw the new Spider-Man with Tommy, IT WAS SIIIIIIICK',
  },
  {
    id: '7',
    userName: 'Lord Zedd',
    userImg: require('../../assets/users/user-9.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Meet me at the arcade in 15',
  },
  {
    id: '8',
    userName: 'Zach',
    userImg: require('../../assets/users/user-5.jpg'),
    messageTime: '2 days ago',
    messageText:
      'See you at the party!',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});