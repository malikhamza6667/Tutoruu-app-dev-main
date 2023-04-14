import React from 'react'


import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from '../../../assets/Colors'
import { Card } from '../../layouts/Card/Card'
import Button from '../Button/Button'

interface Props {
    class_name: string,
    time: string,
    created_date?: string
    day: string
    is_accepted: boolean
    is_completed?: boolean
    payment_fulfilled?: boolean
    payment_amount?: string
    location: string
    with?: string

    onPress?: () => void
}

const SessionCard: React.FC<Props> = ({ 
    time,
    location,
    class_name,
    day,
    is_accepted,
    is_completed,
    payment_amount,
    payment_fulfilled,
    created_date,
    onPress }) => {

    return (

        <Card>

            <View
                style={[{ paddingHorizontal: hp('3%'), paddingVertical: wp('2%') }]}
            >
                <View

                    style={tw`flex-row items-center justify-between`}
                >

                    <View
                        style={{
                            backgroundColor: Colors.lightorange,
                            borderRadius: 5,
                            marginTop: hp('1')
                        }}
                    >

                        <Text
                            testID='is_accepted'
                            style={[tw`p-0.5 px-2`, {
                                color: Colors.orange,
                                textTransform: 'uppercase',
                                fontFamily: 'PoppinsMedium',

                            }]}>{is_accepted ? 'Confirmed' : 'Awating Confirmation'}</Text>
                    </View>
                    <View>
                        <Text
                            testID='time'
                            style={[tw`text-sm  text-justify`, { fontFamily: 'PoppinsMedium' }]} >{time}</Text>



                    </View>
                </View>
                <Text
                    testID='location'
                    style={[tw`text-sm text-justify`, { color: Colors.orange, fontFamily: 'PoppinsRegular' }]}>
                    {location}
                </Text>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <Text
                            testID='day'
                            style={[tw`text-base text-justify `, { fontFamily: 'PoppinsRegular' }]}
                        >{day}</Text>
                        <Text
                            testID='class_name'
                            style={[tw`text-sm text-justify`, { fontFamily: 'PoppinsRegular' }]}
                        >{class_name}</Text>



                    </View>
                    {/* {
                                  !is_accepted && 
                                  <Button
                                  shape='default'
                                  text='Reply'
                                  backgroundColor={Colors.orange}
                                  onPress={onPress}
                                  width={wp('30%')}
                                  />
                                } */}

                </View>

            </View>
        </Card>


    )
}

export default SessionCard