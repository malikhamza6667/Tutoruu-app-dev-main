import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Header from '../../../components/Header'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../../assets/Colors'
import Card from '../../../components/Card'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Spacer from '../../../components/Spacer'
interface Props {
    navigation: any,

}

const ApplicationStatus: React.FC<Props> = ({ navigation }) => {

    return (

<SafeAreaView className='flex-1 bg-white justify-center'>
<View className='justify-center' style={{height: hp('10%')}}>
<Header headerTitle='Application Status' />
</View>
        <View
            className=' justify-center '
            style={{height: hp('90%'),paddingBottom: hp('20%')}}
            
        >
           
            
            <View
                className='px-3  gap-y-2'
            >
                <Image
                    source={require('./../../../../assets/Vector.png')}
                    resizeMode='contain'
                    style={{ height: hp('20%'), width: wp('30%'), resizeMode: 'contain' }}
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

                <Spacer />
                <View className='px-5 py-5 rounded-[20px] flex-row justify-between'

                    style={{
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        shadowOffset: { width: 0, height: 2 },
                        elevation: 15,
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
</SafeAreaView>
    )
}
export default ApplicationStatus