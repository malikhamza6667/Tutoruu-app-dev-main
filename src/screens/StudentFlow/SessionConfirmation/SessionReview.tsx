import React,{useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Modal,Pressable,Alert,StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../../../../assets/Colors';
import Header from '../../../components/Header';
import { ChatMessage, ClassInfo, ReviewRatings, SessionInfo, TutorInfo } from '../DummyData';
import { FontAwesome } from '@expo/vector-icons';
import StarRatings from '../../../components/StarRatings';
import { Entypo } from '@expo/vector-icons';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Button from '../../../components/Buttonnn';
import { ScrollView } from 'react-native-virtualized-view';
const SessionReviewScreen: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const CancelDiaglogue:React.FC=()=>{
        return(
           

            <Modal
            presentationStyle='overFullScreen'
        style={{flex:1}}
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
        <SafeAreaView  className=' justify-center bg-white flex-1'>
<View className='justify-center' style={{height:hp('10%')}}>
<Header headerTitle='Confirmation' />
</View>

        <View    style={{ backgroundColor: Colors.white,height:hp('90%') }} >
<CancelDiaglogue/>
            <ScrollView>
        <View >

            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-4 my-1 text-base'
            >Session Info</Text>
            <FlatList
                data={SessionInfo}
                renderItem={({ item }) => {
                    return (
                        <View className="w-fit gap-1 rounded-3xl p-5 m-1 justify-evenly" style={{ elevation: 3, backgroundColor: Colors.white }}>
                           <View className='px-5 py-2 my-2 self-start rounded-full' style={{backgroundColor:Colors.lightorange}}>
                            <Text 
                            style={{fontFamily:'PoppinsMedium',textTransform:'uppercase',color:Colors.orange}}>{item.Status}</Text>
                           </View>
                            <View className='flex-row justify-between'>
                                <View className='flex-row'>
                                    <Text style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Timing:</Text>
                                    <Text className='mx-1' style={{ fontFamily: 'PoppinsBold' }}>{item.Timing}</Text>
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

        <View className='my-2' >
        <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-4 my-1 text-base'
            >Payment</Text>
            <View className='px-4  justify-start'>
        

                  
                    <Text
                        className='text-base'
                        style={{ fontFamily: 'PoppinsMedium' }}>170 EGP</Text>
                         
                

            </View>
          
        </View>

        <View className='mt-5'>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-4 text-base'
            >Rating</Text>
             <View className="w-auto rounded-[20px] px-5 py-4 gap-1 m-1 justify-between" style={{ elevation: 3, backgroundColor: Colors.white }}>
                
              
               
            
                <StarRatings />
                <View>

                </View>
                    <Text
                    numberOfLines={2}
                        style={{ fontFamily: 'PoppinsRegular', }}
                        className='text-sm w-fit self-start '
                    >{ReviewRatings.Review}</Text>
                    <Text
                        style={{ fontFamily: 'Poppins' }}
                        className='text-sm'
                    >{ReviewRatings.date}</Text>
                    
                
              

            
           
        </View>
        </View>

        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-4 mt-3 text-base'
            >Tutor</Text>
            <View className=" rounded-[20px] items-center px-3 py-5 flex-row m-1 justify-between" style={{ elevation: 3, backgroundColor: Colors.white }}>
                
                    <View className='flex-row  justify-between gap-1'>
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

                    <Button
                            textSize={14}
                            title='View Profile'
                            color={Colors.orange}
                            width={wp('35%')}
                            height={hp('5%')}
                            onPress={() => { alert('pressed') }}
                        />
             
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
                            <Text
                            className='text-base'
                            style={{ textTransform: 'capitalize', fontFamily: 'PoppinsRegular' }}>{item.Desc}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => { return item.id.toString() }}
            />
        </View>

        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-4 my-1 text-base'
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


        <View className='justify-center' style={{height: hp('10%')}}>
            <TouchableOpacity
            onPress={()=>{setModalVisible(!modalVisible)}}
                className='justify-center items-center'
            >
                <Text
                    style={{ color: Colors.red, fontFamily: 'PoppinsBold' }}
                >Cancel</Text>
            </TouchableOpacity>
        </View>
</ScrollView>
        </View>
        </SafeAreaView>
   
    )
}





export default SessionReviewScreen;

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