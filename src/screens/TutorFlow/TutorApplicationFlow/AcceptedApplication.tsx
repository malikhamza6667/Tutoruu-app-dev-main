import React from 'react'
import {View,Text, Image,SafeAreaView} from 'react-native'
import Header from '../../../components/Header'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../../assets/Colors'
import Button from '../../../components/Buttonnn'

interface Props{
  navigation : any
}

const ApplicationConfirmationStatus:React.FC<Props>=({navigation})=>{
    return(
      <SafeAreaView className='flex-1 justify-center'>

        <View className='flex-1 justify-evenly bg-white'>
          <View className='top-5'>
            <Header headerTitle='Application Status'/>
          </View>
          <View className='px-8 gap-2 flex-1 justify-center'>
            <Image
            source={require('./../../../../assets/payment.jpg')}
            resizeMode='contain'
            style={{height:hp('20%'),width:wp('30%')}}
            className='self-center'
            />
            <Text 
    className='self-center text-xl'
    style={{fontFamily:'PoppinsBold',color:Colors.orange,textTransform:'capitalize'}}>Tutor Accepted!</Text>

<Text 
    className='self-center text-sm'
    style={{fontFamily:'PoppinsRegular',textAlign:'center'}}>
       Head to your new tutor dashboard and start teaching
    </Text>
    <View className='px-16'>
    <Button
    textSize={14}
    title='Take Me There'
    color={Colors.orange}
    onPress={()=>{navigation.navigate('TutorAppStack')}}
    
    />

    </View>
          </View>
        </View>
      </SafeAreaView>
    )
}
export default ApplicationConfirmationStatus