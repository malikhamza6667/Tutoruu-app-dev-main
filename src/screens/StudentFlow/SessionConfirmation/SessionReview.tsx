import React,{useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Modal,Pressable,Alert,StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../../../../assets/Colors';
import Header from '../../../components/Header';
import { ChatMessage, ClassInfo, ReviewRatings, SessionInfo, TutorInfo } from '../DummyData';
import { FontAwesome } from '@expo/vector-icons';
import StarRatings from '../../../components/StarRatings';

const SessionReviewScreen: React.FC = () => {
    
    return (
        <View    style={{ backgroundColor: Colors.white }}
        className='flex-1 justify-evenly'>
       
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

        <View >
        <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Payment</Text>
            <View className='px-6 pb-5 pt-1 justify-start'>
        

                  
                    <Text
                        className='text-base'
                        style={{ fontFamily: 'PoppinsMedium' }}>170 EGP</Text>
                         
                

            </View>
          
        </View>

        <View>
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className='mx-6 my-2 text-base'
            >Rating</Text>
             <View className="w-auto rounded-3xl px-5 py-4 gap-1 m-1 justify-between" style={{ elevation: 3, backgroundColor: Colors.white }}>
                
              
               
            
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
                            <Text
                            className='text-base'
                            style={{ textTransform: 'capitalize', fontFamily: 'PoppinsRegular' }}>{item.Desc}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => { return item.id.toString() }}
            />
        </View>

        </View>
   
    )
}





export default SessionReviewScreen;

