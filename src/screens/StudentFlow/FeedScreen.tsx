import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { useTailwind } from 'tailwind-rn/dist'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
import ToggleButtons from '../../components/ToggleButtons'
import Username from '../../components/UserName'
import Spacer from '../../components/Spacer'
import Colors from '../../../assets/Colors'
import CreatePost from '../../components/CreatePost'
import Header from '../../components/CreatePost'
import { ScrollView } from 'react-native-virtualized-view'
import Divider from '../../components/Divider';
import Auc from '../../components/Auc';
const size = hp('2');
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
    time: '5 mins ago '
  },
  {
    id: 2,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'other',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    image: 'https://img.freepik.com/premium-photo/think-outside-box-school-green-blackboard_36051-447.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph',
    time: '5 mins ago '
  },
  {
    id: 3,
    sender: 'Victoria Hanson',
    email: '@vicky23hanson',
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: 'user',
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    image: 'https://img.freepik.com/free-photo/paper-education-information-university-text_1150-1616.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph',
    time: '5 mins ago '
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

    const language = contextState.language
    if (language === 'en') {
      Strings = Languages[0].texts

    }
    else if (language === 'es') {
      Strings = Languages[1].texts
    }
    else {
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
      {/* <Spacer/> */}
      <Username />
      {/* <Spacer /> */}
      <Divider />
      <ToggleButtons />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* <Spacer /> */}
        <CreatePost />
        {/* <Spacer/> */}
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
              <View key={item.id} style={[styles.card]}>
                <View
                  style={{ padding: hp('2') }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      // backgroundColor: 'pink',
                      width: wp('72%'),
                      alignSelf: 'flex-end',
                      marginBottom: hp('0.4'),

                    }}
                  >
                    <View style={styles.aucContainer}>
                      <Text style={styles.auc}>AUC</Text>
                    </View>
                    <View style={[styles.aucContainer, { marginLeft: hp('1') }]}>
                      <Text style={styles.auc}>NOTES</Text>
                    </View>
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginLeft: hp('11'),
                        color: Colors.fadedgray,
                        fontFamily: 'PoppinsRegular',
                        // backgroundColor:'pink',
                        fontSize: hp('1.2')

                      }}
                    >{item.time}</Text>


                  </View>
                  <View style={[styles.cardHeader]}>
                    <Image style={styles.avatar} source={{ uri: item.avatar }} />
                    <View style={{ width: wp('70%') }} >
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.sender}>{item.sender}</Text>
                        <Text
                          style={[
                            styles.sender,
                            {
                              color: Colors.orange,
                              marginLeft: hp('2')
                            }]}>
                          {item.email}
                        </Text>
                      </View>
                      <Text style={styles.sender}>{item.text}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardBody]}>
                  {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setMessage(item.id)
                    }}
                    style={styles.count}
                  >
                    <MaterialCommunityIcons
                      name='message-outline'
                      size={size}
                      color={message}
                    />
                    <Text style={{ color: message, fontSize: hp('1.4') }}>32</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setLike(item.id)
                    }}
                    style={styles.count}
                  >
                    <AntDesign
                      name='like2'
                      size={size}
                      color={like}
                    />
                    <Text style={{ color: like, fontSize: hp('1.4') }}>1k</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setDislike(item.id)
                    }}
                    style={styles.count}
                  >
                    <AntDesign
                      name='dislike2'
                      size={size}
                      color={dislike}
                    />
                    <Text style={{ color: dislike, fontSize: hp('1.4') }}>7</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setSave(item.id)
                    }}
                    style={styles.count}
                  >
                    <MaterialCommunityIcons
                      name='share-outline'
                      size={hp('2.5')}
                      color={save}
                      style={{
                        // backgroundColor:'pink',
                      }}
                    />
                    <Text style={{ color: save, fontSize: hp('1.4') }}>7</Text>
                  </TouchableOpacity>
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
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent:'center',
    backgroundColor: Colors.white
  },
  cardHeader: {
    flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: hp('1'),
    // width:'100%',
    // backgroundColor: 'yellow',
    // padding:hp('2')
  },
  card: {
    borderRadius: 20,
    margin: hp('1'),
    // marginTop:hp('1'),
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignSelf:'center',
    width: wp('95%'),
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 15,
    shadowRadius: 5,
  },
  avatar: {
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 20,
    marginBottom: hp('2.3')
  },
  cardBody: {
    // flex: 1,
    width: '100%'
  },
  sender: {
    fontSize: hp('1.5'),
    fontFamily: 'PoppinsRegular',
    lineHeight: 21,
    marginHorizontal: hp('2')
  },
  cardImage: {
    width: '100%',
    height: hp('25'),
    // backgroundColor:'orange'
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: hp('15%'),
    // marginTop: hp('2'),
    marginLeft: hp('7'),
    width: wp('55%'),
    // alignSelf: 'flex-end',
    // alignSelf:'center'
    // backgroundColor:'pink',
    padding: hp('1')
  },
  aucContainer: {
    backgroundColor: Colors.lightorange,
    padding: hp('0.2'),
    borderRadius: hp('0.5'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  auc: {
    color: Colors.orange,
    fontSize: 10,
    lineHeight: 15,
    fontFamily: 'PoppinsMedium',
    paddingHorizontal: hp('0.6')
  },
  count: {
    flexDirection: 'row',

  },
  countColor: {
    color: Colors.fadedgray,
    fontFamily: 'Poppins'
  }
})
export default FeedScreen;