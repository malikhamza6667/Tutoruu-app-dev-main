import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Header from '../../../components/Header'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../../assets/Colors'
import Card from '../../../components/Card'
import AntDesign from 'react-native-vector-icons/AntDesign'
interface Props {
    navigation: any,

}

const ApplicationStatus: React.FC<Props> = ({ navigation }) => {

    return (


        <View 
        className='flex-1 justify-evenly  bg-white'
        >
             {/* <SafeAreaView
                 style={{
                     flex: 1
                 }}
             > */}
                <View className='top-3'>
                    <Header headerTitle='Application Status' />
                </View>
                <View className='px-3  gap-y-2 flex-1 justify-center'>
                    <Image
                        source={require('./../../../../assets/Vector.png')}
                        resizeMode='contain'
                        style={{ height: hp('20%'), width: wp('30%') }}
                        className='self-center'
                    />
                    <Text
                        className='self-center text-xl'
                        style={{ fontFamily: 'PoppinsBold', color: Colors.orange, textTransform: 'capitalize' }}>Under Review</Text>
                    <Text
                        className='self-center text-sm'
                        style={{ fontFamily: 'PoppinsRegular', textAlign: 'center' }}>
                        Your applicatioin is undergoing evaluation. Once we get a chance to look through it we will email you next steps.
                    </Text>


                    <View className='px-5 py-5 rounded-3xl flex-row justify-between'

                        style={{
                            shadowColor: 'gray',
                            shadowOpacity: 1,
                            shadowOffset: { width: 0, height: 5 },
                            elevation: 5,
                            backgroundColor: Colors.white,
                        }}
                    >
                        <View>
                            <Text className='text-xl' style={{ fontFamily: 'PoppinsBold' }}>Ragnar Lothbrok</Text>
                            <Text className='text-xs' style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Started 11/12</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ApplicationConfirmationStatus') }}
                            style={{ backgroundColor: Colors.orange, height: hp('5%'), width: wp('30%') }}
                            className='flex-row justify-center gap-x-5 self-end rounded-full items-center'>

                            <Text className='self-center text-sm'
                                style={{ fontFamily: 'PoppinsBold', color: Colors.white, textTransform: 'capitalize' }} >View</Text>
                            <AntDesign name="arrowright" size={24} color={Colors.white} />
                        </TouchableOpacity>
                    </View>

                </View>
       {/* </SafeAreaView> */}
        </View>
    )
}
export default ApplicationStatus