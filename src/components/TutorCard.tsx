import React, { useContext,useState } from "react";
import { View, Text, StyleSheet ,TouchableOpacity,FlatList,Image} from 'react-native';
import Colors from "../../assets/Colors";
import Btn from "./Button";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import { Classes } from "../screens/StudentFlow/DummyData";
import UserImage from "./userImage";
import StarRatings from "./StarRatings";

interface Props {
    text: string;
    name: string;
    sessions: string
    data: any
    image: string
}
interface ListData{
name: string
id: number
}

const TutorCard: React.FC<Props> = ({ text, name ,data,image,sessions}) => {
const [listData,setListData]=useState(data)
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'en'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }

    const size= data.length -2;
    const label='+'+ size.toString()
   

    const[fullList,setFullList]=useState(false)
    const[moreLabel,setMoreLabel]=useState(label)
    let imgUri= require('../../assets/dp.jpg')
    if(image==='dp'){
imgUri= require('../../assets/dp.jpg')
    }
    
const showFullListData=()=>{
    setFullList(!fullList) 
                    if(fullList===true){

                        setMoreLabel('+'+size.toString())
                    }
                    else{
                        setMoreLabel('-'+size.toString())
                    }
}

    return (
        <View 
        className="w-auto rounded-2xl py-2 px-4 m-2 "
        style={{elevation:5,shadowRadius:5, backgroundColor:Colors.white}}>
           
            <View className="flex-row justify-between">
<View 

className="flex-row flex-grow-0 w-fit">
{fullList ? 

(<View style={{width:175}}>

<FlatList
showsHorizontalScrollIndicator={false}
data={listData}
horizontal
renderItem={({item}:{item:ListData})=>{
    return(
        <TouchableOpacity
        
        style={{backgroundColor: Colors.lightorange}}
        className=' rounded-full self-center py-2 px-2    m-0.5  items-center '>
            <Text
            
            style={{color: Colors.orange,textTransform: "uppercase",fontFamily:'PoppinsMedium'}}
            className='text-sm '>{item.name}</Text>
        </TouchableOpacity>
    )
}}
keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
/>
</View>
)
:
 (
<FlatList

data={listData.slice(0,2)}
horizontal
renderItem={({item}:{item: ListData})=>{
    return(
        <TouchableOpacity
        
        style={{backgroundColor: Colors.lightorange}}
        className=' rounded-full self-center py-2 px-2    m-0.5  items-center '>
            <Text
             style={{color: Colors.orange,textTransform: "uppercase",fontFamily:'PoppinsMedium'}}
            className='text-sm '>{item.name}</Text>
        </TouchableOpacity>
    )
}}
keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
/>
 ) 
        }
        <TouchableOpacity
                onPress={()=>{showFullListData()}}
                style={{backgroundColor: Colors.lightorange,}}
                className=' rounded-full self-center py-2 px-4    m-0.5  items-center '>
                    <Text
                    style={{color: Colors.orange,textTransform: "capitalize",fontFamily:'PoppinsMedium'}}
                    className='text-sm self-center '>{moreLabel}</Text>
                </TouchableOpacity>

</View>
<View style={{width:80,height:80,justifyContent:'center', bottom:60,borderRadius:50,shadowRadius:10,shadowColor:Colors.white,elevation:10,alignItems:'flex-end',alignSelf:'flex-end',backgroundColor:Colors.lightorange}}>
    <Text className="self-center text-sm font-bold">270EGP</Text>
{/* <Image
            source={require('../../assets/tutorCardPic.png')}
            style={{width:100,height:50,bottom:30,alignItems:'flex-end',alignSelf:'flex-end'}}
            resizeMode='contain'
            /> */}
</View>

            </View>
        <View className="justify-between flex-row">
        <View className="flex-row">
            <Image
            source={imgUri}
            className='rounded-full h-10 w-10 self-start '
            />
            <View className="justify-center">
            <Text className="text-base  mx-2 "
            style={{fontFamily:'PoppinsBold'}}
            >{name}</Text>
            <Text 
            style={{fontFamily:'Poppins'}}
            className="text-xs  mx-2">from {sessions} sessions</Text>
            </View>

        </View>
        <View className="self-center">

        <StarRatings/>
        </View>
        </View>
            <View className="justify-center">
            <Text 
            style={{fontFamily:'PoppinsMedium'}}
            className="text-sm  ">Bio</Text>
            <Text
             style={{fontFamily:'PoppinsRegular'}}
            className="text-xs  ">{text}</Text>
            </View>
            
          <TouchableOpacity
          style={{backgroundColor: Colors.orange}}
          className="h-12 w-auto px-10 rounded-full m-2 self-center justify-center"
          >
            <Text 
            style={{fontFamily:'PoppinsMedium'}}
            className="text-white text-sm font-bold">View Profile</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      
        elevation: 10,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        // alignItems: 'center',
        justifyContent: 'center',
        
        padding: 15,
        // paddingTop:20
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        // backgroundColor:'red'
    },
    heading: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        // backgroundColor:'red'
    }
})

export default TutorCard