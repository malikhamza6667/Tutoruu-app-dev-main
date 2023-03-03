import React from 'react'


import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../assets/Colors'
import Spacer from './Spacer'

interface Props{
time: string,
type: string,
status: string,
title:string
day: string
onPress?: ()=>void
}

const SessionCard:React.FC<Props>=({time,type,status,title,day,onPress})=>{

    return(
        
             <View
                    // className='  p-4 '
                    >
                        {/* <Spacer/> */}
                        <View
                            className='flex-row items-center justify-between'
                            style={{
                                // borderWidth: 1
                            }}
                        >
    
                            <View
                                style={{
                                    backgroundColor: Colors.lightorange,
                                    borderRadius: 5,
                                    marginTop: hp('1')
                                }}
                            >
    
                                <Text
                                    style={{
                                        color: Colors.orange,
                                        textTransform: 'uppercase',
                                        fontFamily: 'PoppinsMedium',
                                        // borderRightColor: 'pink',
                                        // borderWidth:1
                                    }}
                                    className='p-0.5 px-2' >{status}</Text>
                            </View>
                            <View>
                            <Text
                                style={{ fontFamily: 'PoppinsMedium' }}
                                className='text-sm  text-justify  w-auto' >{time}</Text>

                               

                            </View>
                        </View>
                        <Text
                            style={{ color: Colors.orange, fontFamily: 'PoppinsRegular' }}
                            className=' text-sm text-justify '>{type}</Text>
                            <View className='flex-row justify-between'>
                                <View>
                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className='text-base  font-normal text-justify '>{day}</Text>
                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className='text-sm text-justify '>{title}</Text>



                                </View>
                                {
                                    status == 'awaiting comfirmation' && <TouchableOpacity 
                                    onPress={onPress}
                                    style={{backgroundColor:Colors.orange}}
                                    className='self-end py-2.5 px-7 rounded-full'>
                                        <Text
                                    style={{ color: Colors.white, fontFamily: 'PoppinsBold' }}         
                                        >Reply</Text>
                                    </TouchableOpacity>
                                }

                            </View>
                        <Spacer />
                    </View>

        
    )
}

export default SessionCard