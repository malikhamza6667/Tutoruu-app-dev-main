import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../../assets/Colors';
import Header from '../../../components/Header';
import { ChatMessage, ClassInfo, SessionInfo, TutorInfo } from '../DummyData';
import { FontAwesome } from '@expo/vector-icons';
import StarRatings from '../../../components/StarRatings';

const SessionConfirmationMain: React.FC = () => {
    return (
        <View
            style={{ backgroundColor: Colors.white }}
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
                                <Text style={{ textTransform: 'capitalize', fontFamily: 'PoppinsRegular' }}>{item.Desc}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return item.id.toString() }}
                />
            </View>


            <View>
                <TouchableOpacity
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
export default SessionConfirmationMain;