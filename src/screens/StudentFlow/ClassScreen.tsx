import React,{useState} from "react";
import {View ,Text,FlatList,Image,TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native'
import Colors from "../../../assets/Colors";
import Header from "../../components/Header";
import HeaderCatagories from "../../components/HeaderCatagories";
import { ClassStudents, TutorSubjects } from "./DummyData";
import { Feather,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { messageData } from "./FeedScreen";
import PostCard from "../../components/PostCard";
import TutorCard from "../../components/TutorCard";
import Spacer from "../../components/Spacer";

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

const headerCatagories=[{
    id:0,
    name:"AUC"
},
{
    id:1,
    name:'Computer Science'
}

]

const messageDataClasses=[
    {
        id: 1,
        sender: 'Victoria Hanson',
        email: '@vicky23hanson',
        text: 'Lorem ipsum dolor sit amit dolor connectsur?',
        senderType: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU',
        comments: 32,
        likes: '1k',
        dislikes: 7,
        share:7,
        categories:[
            {
                id: 0,
                name: 'Auc'
            },
            {
                id: 1,
                name: 'Notes'
            }
        ],
        time: '5 mins ago'
        //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
      },
    {
        id: 2,
        sender: 'Victoria Hanson',
        email: '@vicky23hanson',
        text: 'Lorem ipsum dolor sit amit dolor connectsur?',
        senderType: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU',
        comments: 32,
        likes: '1k',
        dislikes: 7,
        share:7,
        categories:[
            {
                id: 0,
                name: 'Auc'
            },
            {
                id: 1,
                name: 'Notes'
            }
        ],
        time: '5 mins ago'
        //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
      },
]
const ClassesMainScreen:React.FC=()=>{
const totalStudents = ClassStudents.length


    return(
        <SafeAreaView className="flex-1 justify-center bg-white">
<View className="justify-center " style={{height: hp('10%')}}>
<Header headerTitle="CSCE 312"/>
</View>
        <View
        className="justify-evenly  px-3  "
        style={{height: hp('90%')}}
        >
          
        
            <View className="justify-center " >

             <HeaderCatagories data={headerCatagories}/>
             <View className=" px-3">

            <Text 
            style={{fontFamily:"PoppinsBold"}}
            className="text-xl">Introduction to Computer Architecture</Text>
         <Text
                 style={{fontFamily:"PoppinsMedium"}}
                 className='text-sm'
         >{totalStudents} Students</Text>
         <FlatList
        contentContainerStyle={{paddingHorizontal:15}}
         horizontal
         data={ClassStudents.slice(0,5)}
         renderItem={({item})=>{
            return(
                <View
                className="h-10 w-10"
                style={{borderWidth:2,borderRadius:50,backgroundColor:'gray',borderColor:Colors.white,marginLeft:-15,}}
                >
                    <Image
                    
                    source={{uri:item.image}}
                    resizeMode='contain'
                    
                    className="rounded-full h-9 w-9 "
                    
                    />

                    </View>
            )
         }}
         />
             </View>
            </View>

         <View className="py-3  " >
            <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base px-2 mx-3 '>Posts</Text>
           <PostCard data={messageDataClasses}/>
         </View>
         <View className=" py-3 " >
            <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base px-2 mx-3 '>Tutor</Text>

            <TutorCard
        image='dp'
        data={TutorSubjects}
        name='Youssef Harron'
        sessions='4'
        text='PhD student in the Industrial & Systems Engineering Department…'
        key={'hamza'}
        />
         </View>
   
        </View>
        </SafeAreaView>
    )
}

export default ClassesMainScreen

