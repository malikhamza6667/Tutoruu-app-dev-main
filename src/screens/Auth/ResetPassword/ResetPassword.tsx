import React, { useState } from "react";
import { View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth";
import tw from 'twrnc';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

// const ResetPassword = () => {
//     const [email, setEmail] = useState('')
//     return (
//         <Auth
//             title='Forgot your password?'
//             onPressSubtitle={() => { alert('Pressed') }}
//             onPressfooterTitle={() => { alert('Pressed') }}
//             caption='Leave your email and we’ll send you  a link to update your password and log into your account'
//         >
//             <View className='py-3 justify-center items-center'>



//                 <View className='my-2 self-center items-center'>
//                     <Input
//                         size='large'
//                         value={email}
//                         onChangeText={(text) => { setEmail(text) }}
//                         title='Email'
//                         placeholder='Doe'
//                         height={hp('5%')}
//                         testID="email-input" 
//                     />
//                     <Button
//                         onPress={() => { alert('Pressed') }}
//                         icon={'AntDesign arrowright 24 white'}
//                         shape='default'
//                         text='Send password reset link'
//                         width={wp('80%')}
//                         height={hp('5%')}
//                         testID="send-button"

//                     />

//                 </View>

//             </View>
//         </Auth>
//     )
// }

// export default ResetPassword






const ResetPassword = ({navigation}) => {
    const [email, setEmail] = useState('')
    return (
      <Auth
        title='Forgot your password?'
        onPressSubtitle={() => { alert('Pressed') }}
        onPressfooterTitle={() => { alert('Pressed') }}
        caption='Leave your email and we’ll send you  a link to update your password and log into your account'
      >
        <View className='py-3 justify-center items-center'>
          <View className='my-2 self-center items-center'>
            <Input
              size='large'
              value={email}
              onChangeText={(text) => { setEmail(text) }}
              title='Email'
              placeholder='Doe'
              height={hp('5%')}
            />
            <View
            style={[tw` mt-4 w-74`]}
            >

            <Button
              onPress={()=>navigation.navigate(('UpdatePassword'))} // Pass onPress prop to Button component
              icon={'AntDesign arrowright 24 white'}
              shape='medium'
              text='Send password reset link'
              iconPosition="right"
              height={hp('4%')}
              />
              </View>
          </View>
        </View>
      </Auth>
    )
  }
  export default ResetPassword