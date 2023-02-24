import React,{useState} from 'react'
import {View,Text,Image, TouchableOpacity} from 'react-native'
import Colors from '../../../assets/Colors'
import Divider from '../../components/Divider'
import Header from '../../components/Header'
import Spacer from '../../components/Spacer'
import Input from '../../components/TextInput'

const TutorRegister:React.FC=()=>{
    const[bio,setBio]=useState('')

    return(
        <View className='flex-1 justify-center'>
            <Header headerTitle='Tutor Application'/>
           <View className='px-5 py-3 border-b-2 border-gray-300'>
            <View className='flex-row gap-3 items-center'>
            <View className='items-center justify-center gap-2 '>
            <Image
            source={require('./../../../assets/dp.jpg')}
            className='h-20 w-20 rounded-full'
            resizeMode='contain'
            />
<TouchableOpacity>
    <Text style={{fontFamily:'PoppinsBold',color:Colors.orange}} className='text-sm'>Update</Text>
</TouchableOpacity>
            </View>
            <View>
                <Text style={{fontFamily:'PoppinsBold'}} className='text-xl'>Ragnar</Text>
                <Text style={{fontFamily:'PoppinsRegular'}} className='text-sm'>ragnarlothbrok@gmail.com</Text>
            </View>

            </View>
            </View>
            <View>
                <Input
                value={bio}
                onChangeText={(text)=>{setBio(text)}}
                title='Bio'
multiline
                />
           </View>
        </View>
    )
}
export default TutorRegister;