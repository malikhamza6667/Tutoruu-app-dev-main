import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

// import { useTailwind } from 'tailwind-rn/dist'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
import ToggleButtons from '../../components/ToggleButtons'
import Username from '../../components/UserName'
import Spacer from '../../components/Spacer'
import Colors from '../../../assets/Colors'
import CreatePost from '../../components/CreatePost'
import Header from '../../components/CreatePost'
import { ScrollView } from 'react-native-virtualized-view'
const size = 20;
const color = Colors.fadedgray;

export const messageData = [
  {
    id: 1,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: 'Lorem ipsum dolor sit amit dolor connectsur?',
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
  },
  {
    id: 2,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'other',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
  },
  {
    id: 3,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    image: 'https://www.bootdey.com/image/580x580/008000/000000',
  },
]

interface Props {
  navigation: any;
  focused: any;
}
const FeedScreen: React.FC<Props> = ({ navigation }) => {

  const [count, setCount] = useState(0);
  const contextState = useContext(LanguageContext);
  
  let Strings: any = {}
  if (contextState != null) {

    const  language = contextState.language
      if (language === 'en') {
          Strings = Languages[0].texts

      }
     else if (language === 'es'){
          Strings = Languages[1].texts  
      }
      else{
          //default language if not any language provided
          Strings = Languages[0].texts
      }
  }

  const [Message, setMessage] = useState();
  const [Like, setLike] = useState();
  const [Dislike, setDislike] = useState()
  const [Save, setSave] = useState()

  return (

    <View style={styles.container}>

      <Username />
      <ToggleButtons />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Spacer />
        <CreatePost />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messageData}
          // renderItem={RenderItem}
          renderItem={({ item }) => {

            const message = item.id === Message ? Colors.orange : Colors.fadedgray
            const like = item.id === Like ? Colors.orange : Colors.fadedgray
            const dislike = item.id === Dislike ? Colors.orange : Colors.fadedgray
            const save = item.id === Save ? Colors.orange : Colors.fadedgray

            return (
              <View key={item.id} style={styles.card}>
                <View style={{ justifyContent: 'center', padding: 10 }}>
                  <View style={styles.cardHeader}>
                    <Image style={styles.avatar} source={{ uri: item.avatar }} />
                    <View style={{ width: '70%' }} >
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sender}>{item.sender}</Text>
                        <Text style={[styles.sender, { color: Colors.orange, marginLeft: 10 }]}>{item.email}</Text>
                      </View>
                      <Text style={styles.sender}>{item.text}</Text>
                    </View>
                  </View>
                  <View style={styles.cardBody}>
                    {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
                  </View>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setMessage(item.id)
                      }}
                    >
                      <MaterialCommunityIcons
                        name='message-outline'
                        size={size}
                        color={message}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setLike(item.id)
                      }}
                    >
                      <AntDesign
                        name='like2'
                        size={size}
                        color={like}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setDislike(item.id)
                      }}
                    >
                      <AntDesign
                        name='dislike2'
                        size={size}
                        color={dislike}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setSave(item.id)
                      }}
                    >
                      <Feather
                        name='bookmark'
                        size={size}
                        color={save}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red',
    alignItems: 'center'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignSelf:'center',
    // width:'90%'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    backgroundColor: 'red'
  },
  btn: {
    padding: 12,
    margin: 10,
    borderRadius: 99
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: 10,
    width: '70%',
    alignSelf: 'flex-end'
  }
})
export default FeedScreen;