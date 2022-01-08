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
    userName: 'Chat Room 1',
    userImg: require('../../assets/users/user-3.jpg'),
    messageTime: '',
    messageText:
      'THE GREEN MILE',
  },
  {
    id: '2',
    userName: 'Chat Room 2',
    userImg: require('../../assets/users/user-1.jpg'),
    messageTime: '',
    messageText:
      'LORD OF THE RINGS',
  },
  {
    id: '3',
    userName: 'Chat Room 3',
    userImg: require('../../assets/users/user-4.jpg'),
    messageTime: '',
    messageText:
      'DOWNFALL',
  },
  {
    id: '4',
    userName: 'Chat Room 4',
    userImg: require('../../assets/users/user-6.jpg'),
    messageTime: '',
    messageText:
      'LEON',
  },
  {
    id: '5',
    userName: 'Chat Room 5',
    userImg: require('../../assets/users/user-7.jpg'),
    messageTime: '',
    messageText:
      'V FOR VENDETTA',
  },
  {
    id: '6',
    userName: 'Chat Room 6',
    userImg: require('../../assets/users/user-8.jpg'),
    messageTime: '',
    messageText:
      'THE SHOP AROUND THE CORNER 1940',
  },
  {
    id: '7',
    userName: 'Chat Room 7',
    userImg: require('../../assets/users/user-9.jpg'),
    messageTime: '',
    messageText:
      'THE ELEPHANT MAN',
  },
  {
    id: '8',
    userName: 'Chat Room 8',
    userImg: require('../../assets/users/user-5.jpg'),
    messageTime: '',
    messageText:
      'ETERNAL SUNSHINE OF THE SPOTLESS MIND',
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