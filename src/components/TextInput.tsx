import React from "react";
import { View, Text, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../assets/Colors";


interface Props {
    value: string
    title: string
    onChangeText: (text: string) => void
    placeholder?: string
    secureTextEntry?: boolean,
    padding?: string
    multiline?: boolean
    height?: any,
    width?: any
}


const Input: React.FC<Props> = (props) => {
    let inputStyles = '  px-5 py-2 my-1 text-sm  border border-gray-300 rounded-3xl'

    return (

        <View className="my-0.5 w-full  ">
            <Text
                style={{ fontFamily: 'PoppinsMedium' }}
                className="text-center p-0.5 px-5 text-sm text-black  self-start">
                {props.title}
            </Text>
            <TextInput
                multiline={props.multiline}
                className={inputStyles}
                style={{
                    fontFamily: 'Poppins', width: props.width ? props.width : wp('85%')

                    , height: props.height ? props.height : hp('5%'), alignItems: 'flex-start',fontSize:hp('1.5')
                }}

                value={props.value}
                secureTextEntry={props.secureTextEntry || false}
                onChangeText={props.onChangeText}
                placeholder={'Doe...'}
                placeholderTextColor={Colors.black}


            />
        </View>
    )
}
export default Input;