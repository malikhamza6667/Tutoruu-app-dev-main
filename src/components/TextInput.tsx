import React from "react";
import { View, Text, TextInput } from 'react-native';
import Colors from "../../assets/Colors";


interface Props {
    value: string
    title: string
    onChangeText: (text: string) => void
    placeholder?: string
    secureTextEntry?: boolean,
    padding?:string
multiline?:boolean
}


const Input: React.FC<Props> = (props) => {
    let inputStyles='h-13  px-5 py-2 my-1 text-sm  border border-gray-300 rounded-3xl'
if(props.multiline){
    inputStyles='h-24   px-5  text-sm  border border-gray-300 rounded-3xl'
}
    return (
        <View className="my-0.5 w-full  ">
            <Text
            style={{fontFamily:'PoppinsMedium'}}
            className="text-center p-0.5 px-5 text-sm text-black  self-start">
                {props.title}
            </Text>
            <TextInput
            multiline={props.multiline}
            className={inputStyles}
            style={{fontFamily:'PoppinsRegular'}}
        
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