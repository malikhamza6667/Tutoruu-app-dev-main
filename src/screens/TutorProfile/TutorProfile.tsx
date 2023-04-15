import React, { useEffect, useRef, useState } from 'react'


import {View,Text, TouchableOpacity, ScrollView}  from 'react-native'
import Details from '../../layouts/Details/Details'
import Avatar from '../../components/Avatar/Avatar'
import HorizontalList from '../../layouts/HorizontalList/HorizontalList'
import Colors from '../../../assets/Colors'
import Button from '../../components/Button/Button'
import tw from 'twrnc';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import StarRatings from '../../components/StarRatings/StarRatings'
import { Icon } from '../../components/Icon/Icon'
import { Separator } from '../../components/Separator/Separator'
import Review from '../../components/Review/Review'
import Post from '../../components/Post/PostCard'
const tags=[
    'AUC'
]

const classes=[
    'Calculus 1',
    'Introduction to Marketing',
    'Fundamentals of computer science',
    'Principles of Accounting'
]
const TutorProfile:React.FC=()=>{
    const[selectedClassIdx,setSelectedClassIdx]=useState(0)

    const [islike, setisLiked] = useState(false)
    const [isDislike, setisDisLiked] = useState(false)
    const [isSaved, setisSaved] = useState(false)
    
    return(
        <Details headerTitle='Tutor' ChatIcon>
            <View>
            <View style={[tw`flex-row justify-evenly px-3 py-1`]}>
                <View className=' flex-[0.4]'>

                <Avatar
                showCap
                size='large'
                image='https://i.pravatar.cc/300'
                
                />
                </View>
                <View className='flex-[0.8]'>
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
                <View className=' flex-[0.5]'>

                <Button
                shape='default'
                onPress={()=>{alert('Preesed!')}}
                text='Follwing'
                />
                </View>
               
            </View>
            <View style={[tw`px-24 py-1`]}>
                <View style={[tw`flex-row`]}>
                <View
                        
                                    style={{ backgroundColor: Colors.gray }}
                                    className=' rounded-[5px] self-center py-1 px-2 m-0.5 items-center '>
                                    <Text
                        
                                        style={{ color: Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                        className='text-sm '>Tutor</Text>
                                </View>  
                <View
                        
                                    style={{ backgroundColor: Colors.gray }}
                                    className=' rounded-[5px] self-center py-1 px-2 m-0.5 items-center '>
                                    <Text
                        
                                        style={{ color: Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                        className='text-sm '>300 EGP</Text>
                                </View> 
                                <View className='px-10 self-center'>
                                    <StarRatings numStars={5} rating={4} isDisable/>
                                    </View> 
                </View>
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
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>Approves</Text>

               </View>

                </View>
                <View style={[tw`flex-row items-center mr-1`,]}>
                
               <Icon
               family='FontAwesome'
               name='user'
               size={'small'}
               color='orange'
               
               />
                <View style={tw`px-1`}>
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>350</Text>
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>Followers</Text>

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
               <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium'}]}>Likes</Text>

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
            <ScrollView>
            <View style={[tw`py-1 px-5`]}>
                <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Classes Ragnar Tutors In</Text>
         <View className='flex-row px-1 '>

           <HorizontalList
         
           
           data={classes}
           renderItem={({item,index})=>{

    return (
        <TouchableOpacity
            onPress={() => { setSelectedClassIdx(index) }}
            style={{
                backgroundColor: index == selectedClassIdx ? Colors.orange : Colors.gray,


            }}
           
            className=' rounded-3xl  py-2 px-3  my-1 mx-1  items-center '>
            <Text

                style={{ color: index == selectedClassIdx ? Colors.white : Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                className='text-sm '>{item}</Text>
        </TouchableOpacity>
    )   

           }}
           keyExtractor={(item,index)=>{return index.toString()}}
           />
         </View>
           
           
            </View>
            <View style={[tw`py-1 px-5`]}>
                <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Reviews</Text>
            <HorizontalList
            
            data={classes}
            renderItem={({item})=>{
return(
      <Review text='Explains very well and helped me a lot' 
      author_name='John Doe'
      author_image='https://i.pravatar.cc/300'
        class_name='Calculas 1' date='01/01/2023' rating={5} /> 
)
            }}
            keyExtractor={(item,index)=>{return index.toString()}}
            />
            
            </View>
            <View style={[tw`py-1 px-5`]}>
                <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Posts</Text>
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

            </ScrollView>
            <View style={tw`pb-5 px-3`}>
                <Button
                shape='full'
                onPress={()=>{alert('Pressed')}}
                text='Request a Session'
                
                />
            </View>
            </Details>
    )
}

export default TutorProfile