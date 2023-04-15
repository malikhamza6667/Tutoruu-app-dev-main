import React, { useEffect, useRef, useState } from 'react'


import {View,Text, TouchableOpacity, ScrollView}  from 'react-native'
import Details from '../../layouts/Details/Details'
import Avatar from '../../components/Avatar/Avatar'
import HorizontalList from '../../layouts/HorizontalList/HorizontalList'
import Colors from '../../../assets/Colors'
import Button from '../../components/Button/Button'
import tw from 'twrnc';
import StarRatings from '../../components/StarRatings/StarRatings'
import { Icon } from '../../components/Icon/Icon'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Separator } from '../../components/Separator/Separator'
import Review from '../../components/Review/Review'
import Post from '../../components/Post/PostCard'
import ClassCard from '../../components/ClassCard/ClassCard'
import Section from '../../layouts/Section/Section'
const tags=[
    'AUC'
]

const classes=[
    'Calculus 1',
    'Introduction to Marketing',
    'Fundamentals of computer science',
    'Principles of Accounting'
]
const UserProfile:React.FC=()=>{
    const[selectedClassIdx,setSelectedClassIdx]=useState(0)

    const [islike, setisLiked] = useState(false)
    const [isDislike, setisDisLiked] = useState(false)
    const [isSaved, setisSaved] = useState(false)
    
    return(
        <Details headerTitle='Ragnar Lothbrok' ChatIcon>
            <View>
            <View style={[tw`flex-row justify-start px-3 py-1`]}>
                <View className=' flex-[0.3] justify-center'>

                <Avatar
                showCap={false}
                size='large'
                image='https://i.pravatar.cc/300'
                
                />
                </View>
                <View className='flex-[1]'>
                <HorizontalList
                data={tags}
                renderItem={({item,index})=>{
                    return(
                        <View
                        key={index}
                                    style={{ backgroundColor: Colors.lightorange }}
                                    className=' rounded-full self-center py-2 px-4 m-0.5 items-center '>
                                    <Text
                        
                                        style={{ color: Colors.orange, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                        className='text-sm '>{item}</Text>
                                </View>     
                    )
                }}
                keyExtractor={(item,index)=>{return index.toString()}}
                />
                 <Text style={[tw`text-xl`,{fontFamily:'PoppinsBold'}]}>Ragnar</Text>

                </View>
              
               
            </View>
            <View style={[tw`px-24 py-1`]}>
               
            </View>
            <View style={[tw`px-24 py-1`]}>
                <View style={[tw`flex-row`]}>
            
                <View style={[tw`flex-row items-center mr-1`,]}>

               <Icon
               family='MaterialCommunityIcons'
               name='check-decagram'
               size={'small'}
               color='orange'
               
               />
               <View style={tw`px-1`}>
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>360</Text>
             

               </View>

                </View>
                <View style={[tw`flex-row items-center mr-1`,]}>
                
                <Icon
               family='AntDesign'
               name='dislike2'
               size={'small'}
               color='orange'
               
               />
                <View style={tw`px-1`}>
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>350</Text>
              

               </View>

                </View>
                <View style={[tw`flex-row items-center mr-1`,]}>

               <Icon
               family='AntDesign'
               name='like2'
               size={'small'}
               color='orange'
               
               />
              
               <View style={tw`px-1`}>
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>2k</Text>
             

               </View>

                </View>
        
                </View>
            </View>
            </View>

            <View style={[tw`px-5 py-2 pb-4`]}>
                <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'uppercase'}]}>BIO</Text>
                <Text style={[tw`text-sm`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Mi velit sollicitudin bibendum semper non arcu fames viverra dicyum</Text>
            </View>
            <Separator type='line'/>
            <View className=' flex-1 justify-evenly'>

         <Section title='Classes Ragnar Is Taking'>

            <View style={[tw`py-1 px-2 `]}>

                <HorizontalList
            
            data={classes}
            renderItem={({item})=>{
return(
    <ClassCard
                                    name={'Introduction to Computer Science'}
                                    desc={'CSCE 1520'}
                                    onPress={()=>{alert('Pressed')}}
                                />
)
            }}
            keyExtractor={(item,index)=>{return index.toString()}}
            />
           
           
            </View>
         </Section>
        <Section title='Posts'>

            <View style={[tw`py-1 px-3 `]}>
              
            <HorizontalList
            
            data={classes}
            renderItem={({item})=>{
return(
    <Post text='Hello world This Is New Post' user={{
        name: 'John Doe',
        image: 'https://i.pravatar.cc/300', username: '@john johndoe',
        bio: 'Hello world This Is New Post', is_tutor: true
    }}
        date='2020-01-01' comments_count={3} likes_count={3}
        dislikes_count={3} is_liked={islike} is_disliked={isDislike} is_saved={isSaved}
        on_dislike_Pressed={() => { setisDisLiked(!isDislike) }}
        on_like_Pressed={() => { setisLiked(!islike) }}
        onSaved={() => { setisSaved(!isSaved) }}
        is_anonymous={false} tags={['tag1', 'Note']}

    />
)
            }}
            keyExtractor={(item,index)=>{return index.toString()}}
            />
            
            </View>
        </Section>
            </View>

           
           
            </Details>
    )
}

export default UserProfile