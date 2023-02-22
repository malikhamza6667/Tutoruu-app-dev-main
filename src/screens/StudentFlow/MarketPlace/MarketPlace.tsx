import React,{useState,useContext} from 'react'
import { SafeAreaView, TextInput, TouchableOpacity,Text, View,FlatList, KeyboardAvoidingView } from 'react-native'



import { Classes, TutorSubjects } from '../DummyData';


import { FontAwesome } from '@expo/vector-icons';
import LanguageContext from '../../../languages/languageContext';
import Languages from '../../../languages';
import Colors from '../../../../assets/Colors';
import Username from '../../../components/UserName';
import Spacer from '../../../components/Spacer';
import TutorCard from '../../../components/TutorCard';

const sessions=[
    {
        id:0,
        type: 'online',
        status:'awaiting comfirmation',
        time: "2.30 P.M",
        day: 'Monday',
        title: 'Macro Economics 135'
    }
]
interface Props{
    navigation: any
}
const MarketPlace:React.FC<Props>=({navigation})=>{
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
 const[classes,setClasses]=useState(Classes)
 const[backgroundEnabled,setBackgroundEnabled]=useState(0)
    const[newClass,setNewClass]=useState('')
    return(



    <View  className='flex-1 justify-center bg-white '>
    <KeyboardAvoidingView behavior='height'>
        <SafeAreaView/>
    <Username />
    <View style={{borderBottomWidth:2,margin:5,borderColor: Colors.gray}}></View>
    <Spacer/>

    <View className='flex-row w-fit justify-between items-center gap-x-4 h-12 m-4 my-1  p-3 rounded-full border border-gray-300'>

    <TextInput
    placeholder='Add Classes'
    value={newClass}
    onChangeText={(text)=>{setNewClass(text)}}
    />
    <TouchableOpacity
    onPress={()=>{alert(newClass)}}
    >
    
    <FontAwesome name="plus" size={24}  color={Colors.gray}  />
    </TouchableOpacity>
    </View>
   
    <View>
        <FlatList
        data={classes}
        horizontal
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                onPress={()=>{setBackgroundEnabled(index)}}
                style={{backgroundColor: backgroundEnabled == index? Colors.lightorange: Colors.gray}}
                className='w-auto rounded-full py-2 px-4 m-3  items-center '>
                    <Text className='text-sm'>{item.name}</Text>
                </TouchableOpacity>
            )
        }}
        keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
        />
        
    </View>
    <View className='mx-3 ' >
        <Text className='text-xl font-medium text-center m-3 self-start'>{Strings.ST80}</Text>
        <FlatList
         style={{elevation:20,borderRadius:20, shadowRadius:10, backgroundColor:Colors.white}}
        data={sessions}
        renderItem={({item})=>{
            return(
              
                <View
               
                className='  h-fit p-4 '>
<View className='flex-row items-center h-fit justify-between'>
                    <Text
                    style={{color:Colors.orange,backgroundColor:Colors.lightorange,textTransform:'uppercase'}}
                    className='text-sm font-bold text-justify p-2 w-auto rounded-xl' >{item.status}</Text>
                    <Text
                    className='text-sm  text-justify font-medium w-auto' >{item.time}</Text>
    </View>
                    <Text
                    style={{color:Colors.orange,fontSize:14}}
                    className=' font-bold text-sm text-justify '>{item.type}</Text>
                    <Text
                    style={{fontSize:16}}
                    className='text-lg  font-normal text-justify '>{item.day}</Text>
                    <Text
                     
                    className='text-sm text-justify '>{item.title}</Text>
                </View>
                  
            )
        }}
        keyExtractor={item=>{return item.id.toString()}}
        
        />
        <TouchableOpacity className='self-center items-center m-3'>
        <Text 
        style={{color: Colors.orange}}
        className='text-sm font-bold'>{Strings.ST81}</Text>
        </TouchableOpacity>
    </View>
    <View className='mx-3  mb-10  justify-center' >
    <Text  className='text-xl font-medium text-center mx-3 self-start'>{Strings.ST83}</Text>
        <TutorCard
        image='dp'
        data={TutorSubjects}
        name='Youssef Harron'
        sessions='4'
        text='PhD student in the Industrial & Systems Engineering Department…'
        key={'hamza'}
        />
    </View>
    </KeyboardAvoidingView>
    </View>

    )

}
export default MarketPlace;