import React, { useState } from "react";
import { View ,Text} from "react-native";
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../../../assets/Colors";
type Props={
    navigation?:any
    route?:any
}
const CompleteRegistration:React.FC<Props> = ({navigation,route}) => {
    const { selectedUniversity, userName, phoneNo } = route.params;
   
    const [UserName, setUserName] = useState(userName)
    const [PhoneNo, setPhoneNo] = useState(phoneNo)
    
    const [selectedUni, setSelectedUni] = useState(selectedUniversity);
    return (
        <Auth
            title='Complete setting up your account'
        >
            <View style={[tw`py-3 justify-center items-center`]}>
                <View style={tw`flex-row`}>

                    <Input
                        size='medium'
                        value={UserName}
                        onChangeText={(text) => { setUserName(text) }}
                        title='Username'
                        placeholder='Doe'
                        height={hp('6%')}
                    />
                   <View
   
   style={[tw`justify-center items-end `,{ width: wp('30%'),}]}>
   <Text
       style={[tw`text-center   text-sm  self-center py-1 pb-2`,{ fontFamily: 'PoppinsMedium' }]}
      
   >University</Text>
   <View
       style={[tw`border border-gray-300 rounded-3xl`,{ width: wp('28%'),borderWidth:1.5,borderColor:Colors.neutralShadow, justifyContent: 'center', height: hp('6%') }]}
       

   >
       <Picker
           placeholder='Select Your Uni'


           selectedValue={selectedUni}
           onValueChange={(itemValue, itemIndex) => {
               setSelectedUni(itemValue)
           }
           }>
           <Picker.Item label="Doe.." value="java" />
           <Picker.Item label="JavaScript" value="js" />
       </Picker>
   </View
   >
</View>
                </View>
                <Input
                    size='xlarge'
                    value={PhoneNo}
                    onChangeText={(text) => { setPhoneNo(text) }}
                    title='Phone'
                    placeholder='Doe'
                    height={hp('6%')}
                />

                <View style={[tw`mx-2 my-3 self-center items-center`]}>

                    <Button
                        onPress={() => { navigation.navigate('MagicLink') }}
                        icon={'AntDesign arrowright 24 white'}
                        shape='full'
                        text='Create Account'
                      
                    />
                </View>

            </View>
        </Auth>
    )
}


export default CompleteRegistration