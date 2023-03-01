import React,{useState} from 'react'
import {View,Text,Image, TouchableOpacity,ScrollView, FlatList,TextInput, Platform,KeyboardAvoidingView, SafeAreaView} from 'react-native'

import Colors from '../../../../assets/Colors'
import Divider from '../../../components/Divider'
import Header from '../../../components/Header'
import Spacer from '../../../components/Spacer'
import Input from '../../../components/TextInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { Classes } from '../../StudentFlow/DummyData'
import Button from '../../../components/Buttonnn'
import Card from '../../../components/Card'
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Entypo } from '@expo/vector-icons';

interface Props{
    navigation: any
}

const TutorRegister:React.FC<Props>=({navigation})=>{
    const[bio,setBio]=useState('')
    const[PhoneNo,setPhoneNo]=useState('')
    const[ClassOf,setClassOf]=useState('')
    const [newClass, setNewClass] = useState('')
    const[major,setMajor]=useState('')
    const[gpa,setGpa]=useState('')
    const[hourlyRate,setHourlyRate]=useState('')
    const[isOn,setIsOn]=useState(true)
    const[pickedImage,setPickedImage]=useState('')
    const[pickedDocUri,setPickedDocUri]=useState('')
    const[pickedDocName,setPickedDocName]=useState('Upload Your Transcript')


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
       
    
        if (result.canceled) {
            setPickedImage('')
        }
        else{
            setPickedImage(result.assets[0].uri);
          
        }
      };

      const PickDocument= async()=>{
        let result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: false
        });
        if(result.type=='success'){
       console.log(result)    
       setPickedDocName(result.name) 
       setPickedDocUri(result.uri)
        }
        else{
            setPickedDocName('Pick A Document') 
            setPickedDocUri('')  
        }
 
      }

   
    return(
        <SafeAreaView className='flex-1 bg-white justify-center'>

        <View className='flex-1 justify-evenly'>
       
        

           <View className='top-5  mb-2'>

            <Header headerTitle='Tutor Application'/>
           </View>
           <View className='flex-1 my-1  justify-center'>

           <View className='px-5 py-3 border-b-2 border-gray-300'>
            <View className='flex-row gap-3 items-center'>
            <View className='items-center  p-1 justify-center gap-2 '>
           {pickedImage ? <Image
            source={{uri:pickedImage}}
            className='h-20 w-20 rounded-full'
            resizeMode='contain'
            />:
            <Image
            source={require('./../../../../assets/dp.jpg')}
            className='h-20 w-20 rounded-full'
            resizeMode='contain'
            />
            }
<TouchableOpacity
onPress={()=>{pickImage()}}
>
    <Text style={{fontFamily:'PoppinsBold',color:Colors.orange}} className='text-sm'>Update</Text>
</TouchableOpacity>
            </View>
            <View>
                <Text style={{fontFamily:'PoppinsBold'}} className='text-xl'>Ragnar</Text>
                <Text style={{fontFamily:'PoppinsRegular'}} className='text-sm'>ragnarlothbrok@gmail.com</Text>
            </View>

            </View>
            </View>
          
            
    
<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{padding:5}}>
            <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    
   
    
    >

            <View className='gap-3 px-5 py-5 justify-center '>
              <View className=''>
                <Input
                value={bio}
                onChangeText={(text)=>{setBio(text)}}
                title='Bio'
                 multiline
                 height={hp('15%')}
                />

              </View>
                <View className='flex-row   justify-between   '>
<View 
style={{width:wp('50%')}}
className=' m-1'

>

                <Input
                width={wp('40%')} 
                value={PhoneNo}
                onChangeText={(text)=>{setPhoneNo(text)}}
                title='Phone No'
                
                />
</View>
<View className=' m-1  '
style={{width:wp('30%')}}
>
                <Input
                 width={wp('30%')} 
                value={ClassOf}
                onChangeText={(text)=>{setClassOf(text)}}
                title='Class Of'
           
                />

</View>
                </View>
                <View >

                <View className='flex-row justify-between self-center items-center gap-x-4  m-1 my-1  p-2 rounded-full border border-gray-300'>

<TextInput
    style={{ fontFamily: 'PoppinsMedium' }}
    className=' flex-1'
    placeholder='Add Classes'
    placeholderTextColor={Colors.gray}
    value={newClass}
    onChangeText={(text) => { setNewClass(text) }}
/>
<TouchableOpacity
    onPress={() => { Classes.push({
        id: Math.random(),
        name: newClass
    })
    setNewClass('')
    }}
>

    <FontAwesome name="plus" size={hp('2.5')} color={Colors.gray}
        style={{
            marginRight: wp('2')
        }}
    />
</TouchableOpacity>



</View>
<View
                    className='m-1 '
                >
                    <FlatList
                        data={Classes}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                   
                                    style={{ backgroundColor: Colors.gray , marginVertical: hp('1') }}
                                    className=' rounded-full py-2 px-3 mx-1 items-center   '>
                                    <Text
                                        style={{
                                            fontFamily: 'PoppinsMedium',
                                            color:  Colors.black,
                                            fontWeight: '500',
                                            fontSize: hp('1.3')
                                        }}
                                    // className='text-sm'
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item: { id: { toString: () => any } }) => { return item.id.toString() }}
                    />

                </View>
                </View>
                <View className='flex-row   justify-between   '>
<View 

className=' m-1'
style={{width:wp('50%')}}
>

                <Input
                
                value={major}
                onChangeText={(text)=>{setMajor(text)}}
                title='Major'
                
                />
</View>
<View className=' m-1  '
style={{width:wp('30%')}}
>
                <Input
                value={gpa}
                onChangeText={(text)=>{setGpa(text)}}
                title='GPA'
           
                />

</View>
                </View>
<View className='px-2 gap-y-1'>
    <Text style={{fontFamily:'PoppinsMedium'}} className='text-base px-3'>Tutoring Information</Text>
   <View className='flex-row justify-evenly self-center gap-x-3 px-3 py-4'
   style={{
    backgroundColor: Colors.white,
    borderRadius: 10,
   
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 15,
   }}
   
   >
    
    <View className='gap-y-2' style={{width:wp('60%')}}>
    <Text style={{fontFamily:'PoppinsMedium'}} >Transcript</Text>
    <Text>{pickedDocName}</Text>
    </View>
    <View 
    style={{backgroundColor:Colors.lightorange,width:wp('15%'),height:hp('7%')}}
    className='rounded-full justify-center items-center'>

    <TouchableOpacity
    onPress={()=>{PickDocument()}}
    style={{backgroundColor:Colors.lightorange,width:wp('15%'),height:hp('7%')}}
    className='rounded-full justify-center items-center'>
       <Entypo name="attachment" size={24} color={Colors.orange} />
    </TouchableOpacity>
    </View>
    
   </View>
   <Input
   title='Hourly Rate'
   width={wp('30%')}
   onChangeText={(text)=>{setHourlyRate(text)}}
   value={hourlyRate}
   />
</View>



<View>
<Button
    color={Colors.orange}
    title='Save'
    onPress={()=>{navigation.navigate('TutorApplicationConfirmation',{
        userName: 'Ragnar'
    })}}
    />
</View>
           </View>
    </KeyboardAvoidingView>
</ScrollView>
           </View>
       
         
           

        
         
        </View>
        </SafeAreaView>
    )
}
export default TutorRegister;