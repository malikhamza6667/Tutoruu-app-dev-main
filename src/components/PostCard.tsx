import React ,{useState}from "react";
import {View,FlatList,TouchableOpacity,StyleSheet,Image,Text} from 'react-native'
import Colors from "../../assets/Colors";
import { Feather,AntDesign,MaterialCommunityIcons,FontAwesome,EvilIcons } from '@expo/vector-icons';
import HeaderCatagories from "./HeaderCatagories";
interface Props{
    data:any
}

const size = 20;
const color = Colors.fadedgray;

const PostCard:React.FC<Props>=({data})=>{
    const [Message, setMessage] = useState();
  const [Like, setLike] = useState();
  const [Dislike, setDislike] = useState()
  const [Save, setSave] = useState()
    return(
        <View>
 <FlatList
          showsVerticalScrollIndicator={false}
          data={data.slice(0,1)}
          
          // renderItem={RenderItem}
          renderItem={({ item }) => {

            const message = item.id === Message ? Colors.orange : Colors.fadedgray
            const like = item.id === Like ? Colors.orange : Colors.fadedgray
            const dislike = item.id === Dislike ? Colors.orange : Colors.fadedgray
            const save = item.id === Save ? Colors.orange : Colors.fadedgray

            return (
                <View 
                className=" rounded-3xl py-2 px-2 m-1 "
                style={{ shadowColor: 'gray',
                shadowOpacity: 0.2,
                shadowOffset: { width: 2, height: 5 },
                elevation: 2,
            
            backgroundColor:Colors.white}}>
                <View className="flex-row items-center justify-evenly p-1">
                    <View className=" px-5">
                <HeaderCatagories backgroundColor="yes" BorderRadius="yes" data={item.categories}/>
                        </View>
<Text style={{fontFamily:'PoppinsMedium',color: Colors.gray}} >{item.time}</Text>
                    </View>
                <View style={{ justifyContent: 'center', padding: 10 }}>
                  <View className="flex-row gap-1  items-center">
                    <Image className="rounded-full h-11 w-11 self-start " source={{ uri: item.avatar }} />
                    <View className=" p-1 ">
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{fontFamily:'PoppinsRegular'}} >{item.sender}</Text>
                        <Text style={{fontFamily:'PoppinsRegular',marginLeft:10,color:Colors.orange}}>{item.email}</Text>
                      </View>
                      <Text numberOfLines={3}  style={{fontFamily:'PoppinsRegular',textAlign:'justify'}}>{item.text}</Text>
                    </View>
                  </View>
                
                  <View className="flex-row justify-evenly px-5 py-2 ">
                    <TouchableOpacity
                    className="flex-row gap-1"
                      onPress={() => {
                        setMessage(item.id)
                      }}
                    >
                        <MaterialCommunityIcons name='comment-outline' size={size}  color={message} />
                        <Text style={{fontFamily:'PoppinsRegular',color:message?Colors.orange: Colors.gray}}>{dislike?(item.comments+1): item.comments}</Text>
                     
                    </TouchableOpacity>

                    <TouchableOpacity
                    className="flex-row gap-1"
                      onPress={() => {
                        setLike(item.id)
                      }}
                    >
                      <AntDesign
                        name='like2'
                        size={size}
                        color={like}
                      />
                       <Text style={{fontFamily:'PoppinsRegular',color:message?Colors.orange: Colors.gray}}>{dislike?(item.likes): item.likes}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    className="flex-row gap-2"
                      onPress={() => {
                        setDislike(item.id)
                      }}
                    >
                      <AntDesign
                        name='dislike2'
                        size={size}
                        color={dislike}
                      />
                      <Text style={{fontFamily:'PoppinsRegular',color:dislike?Colors.orange: Colors.gray}}>{dislike?(item.dislikes+1): item.dislikes}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    className="flex-row gap-1"
                      onPress={() => {
                        setSave(item.id)
                      }}
                    >
                      
                      <FontAwesome name="share"  size={size} color={save} />
                      <Text style={{fontFamily:'PoppinsRegular',color:message?Colors.orange: Colors.gray}}>{dislike?(item.share+1): item.share}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()} />
        </View>
    )
}

export default PostCard

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
     // marginHorizontal: '10%',
      marginTop: 10,
     width: '90%',
      alignSelf: 'flex-end'
    }
  })