import React,{useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Modal,Pressable,Alert,StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../../../../assets/Colors';
import Header from '../../../components/Header';
import { ChatMessage, ClassInfo, SessionInfo, TutorInfo } from '../DummyData';
import { FontAwesome } from '@expo/vector-icons';
import StarRatings from '../../../components/StarRatings';
import { Entypo } from '@expo/vector-icons';

interface Props{
    navigation : any
}

const SessionConfirmationMain: React.FC<Props> = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const CancelDiaglogue:React.FC=()=>{
        return(
           
            <Modal
          //  presentationStyle='overFullScreen'
          style={styles.centeredView}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
              
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View 
                style={styles.modalViewParent}>
                    <TouchableOpacity
                    onPress={()=>{setModalVisible(!modalVisible)}}
                    className='self-end '>

                <Entypo name="circle-with-cross" size={30} color={Colors.fadedgray} />
                    </TouchableOpacity>
                    <View style={styles.modalView}>
                  <Text style={{fontFamily:'PoppinsBold'}}
                  className='text-center'
                  >Are you sure you want to cancel this session?</Text>
                  <Text style={{fontFamily:'PoppinsRegular'}}
                  className='text-center'
                  >You Can Always Book An Other Session With Youseff Haroon</Text>
                  <Pressable
                   style={{backgroundColor:Colors.red}}
                   className='px-16 py-3 my-3 rounded-full justify-center items-center'
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{fontFamily:'PoppinsSemiBold'}} className='text-white'>Cancel</Text>
                  </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
        
        )
    }
    return (
        <View    style={{ backgroundColor: Colors.white }}
        className='flex-1 justify-evenly'>
    {
        modalVisible &&  <View className='flex-1 justify-center'>
        <CancelDiaglogue/>
        
                    </View>

    }       
    <View className='  justify-center'>
            <Header headerTitle='Confirmation' />
        </View>

        <View >

            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Session Info</Text>
            <FlatList
                data={SessionInfo}
                renderItem={({ item }) => {
                    return (
                        <View className="w-auto rounded-3xl p-5 m-1" style={{ elevation: 3, backgroundColor: Colors.white }}>
                            <View className='flex-row justify-between'>
                                <View className='flex-row'>
                                    <Text style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Timing:</Text>
                                    <Text className='mx-1' style={{ fontFamily: 'PoppinsBold' }}>{item.Timing}</Text>
                                </View>

                                <View>
                                    <FontAwesome name="edit" size={20} color={Colors.orange} />
                                </View>
                            </View>


                            <View className='flex-row'>
                                <Text
                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                >Location:</Text>
                                <Text
                                    className='mx-1'
                                    style={{ fontFamily: 'PoppinsBold', color: Colors.orange }}
                                >{item.Location}</Text>
                            </View>
                            <View className='flex-row'>
                                <Text
                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                >Topic:</Text>
                                <Text
                                    className='mx-1'
                                    style={{ fontFamily: 'PoppinsBold' }}
                                >{item.Topic}</Text>
                            </View>

                        </View>
                    )
                }}

                keyExtractor={(item, index) => { return item.id.toString() }}
            />
        </View>

        <View >
        <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Payment</Text>
            <View className='px-6 pb-5 pt-1 flex-row justify-between items-center'>
        

                  
                    <Text
                        className='text-base'
                        style={{ fontFamily: 'PoppinsMedium' }}>170 EGP</Text>
                          <TouchableOpacity
                          onPress={()=>{navigation.navigate('SessionReviewScreen')}}
                    style={{ backgroundColor: Colors.orange }}
                    className='px-8 py-1.5 rounded-full'
                >
                    <Text
                        className='text-white'
                        style={{ fontFamily: 'PoppinsBold' }}>Pay Now</Text>
                </TouchableOpacity>
                

            </View>
          
        </View>

        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Chat</Text>
            <FlatList
                data={ChatMessage}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity style={{ backgroundColor: Colors.lightorange }}
                            className='px-2 flex-row items-center justify-between'
                        >
                            <View
                                className='p-2 flex-row items-center'
                            >


                                <Image

                                    source={require('../../../../assets/dp.jpg')}
                                    className='rounded-full'
                                    resizeMode='contain'
                                />
                                <View className='px-2'>
                                    <Text style={{ fontFamily: 'PoppinsRegular' }}>{item.Name}</Text>
                                    <Text style={{ fontFamily: 'Poppins' }}>{item.Message}</Text>
                                </View>

                            </View>
                            <View className='p-1 gap-1  mx-2'>
                                <Text style={{ fontFamily: 'Poppins' }}
                                    className='text-sm'
                                >{item.Time}</Text>
                                <View
                                    className='self-end justify-center items-center px-2.5 py-0.5 rounded-full'
                                    style={{ backgroundColor: Colors.orange }}>

                                    <Text
                                        style={{ fontFamily: 'PoppinsMedium' }}
                                        className=' text-white '
                                    >{item.messageNo}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => { return item.id.toString() }}
            />
        </View>

        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Tutor</Text>
            <View className="w-auto rounded-3xl p-5 flex-row m-1 justify-between" style={{ elevation: 3, backgroundColor: Colors.white }}>
                
                    <View className='flex-row justify-between gap-1'>
                    <Image
                        source={require('./../../../../assets/dp.jpg')}
                        resizeMode='contain'
                        className='rounded-full'
                    />
                    <View>

                        <Text
                            style={{ fontFamily: 'PoppinsBold' }}
                            className='text-base'
                        >{TutorInfo.Name}</Text>
                        <StarRatings />
                    </View>
                    </View>

                
                <TouchableOpacity
                    style={{ backgroundColor: Colors.orange }}
                    className='justify-center px-8 py-2 self-end items-center rounded-full'
                >
                    <Text
                        style={{ fontFamily: 'PoppinsBold' }}
                        className='text-white'
                    >View Profile</Text>
                </TouchableOpacity>
            </View>

        </View>
        
        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Class</Text>
            <FlatList
                data={ClassInfo}
                renderItem={({ item }) => {
                    return (
                        <View className="w-auto rounded-3xl p-5 m-1" style={{ elevation: 3, backgroundColor: Colors.white }}>

                            <Text style={{ textTransform: 'uppercase', fontFamily: 'PoppinsMedium', color: Colors.orange }}>{item.Title}</Text>
                            <Text className='text-base' style={{ textTransform: 'capitalize', fontFamily: 'PoppinsRegular' }}>{item.Desc}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => { return item.id.toString() }}
            />
        </View>

        <View>
            <TouchableOpacity
            onPress={()=>{setModalVisible(!modalVisible)}}
                className='justify-center items-center'
            >
                <Text
                    style={{ color: Colors.red, fontFamily: 'PoppinsBold' }}
                >Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
   
    )
}



const styles = StyleSheet.create({
    centeredView: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      
    },
    modalView: {
   
      backgroundColor: 'white',
  
      paddingHorizontal: 35,
      paddingVertical: 5,
      alignItems: 'center',
     
    },
   
    modalViewParent:{ 
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,   
    }
  });


export default SessionConfirmationMain;

