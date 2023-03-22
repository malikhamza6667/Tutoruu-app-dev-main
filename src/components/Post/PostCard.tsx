import React from 'react'

import {View,Text, Image} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../assets/Colors'
import { Card } from '../../layouts/Card/Card'
import HorizontalList from '../../layouts/HorizontalList/HorizontalList'
import Avatar from '../Avatar/Avatar'

import tw from 'twrnc';
import { Icon } from '../Icon/Icon'

type User={
    name: string
image: string
username: string
bio: string
is_tutor: boolean
}

type Props={
user :User
text: string
date: string
comments_count: number
is_liked: boolean
on_like_Pressed?: ()=>void
on_dislike_Pressed?: ()=>void
on_comment?:()=>void
onSaved?:()=>void
likes_count: number
is_disliked: boolean
dislikes_count: number
is_saved: boolean
is_anonymous:false
tags: any[]
attachement?: string
}

const Post:React.FC<Props>=({user,
    date,
    comments_count,
    likes_count,
    dislikes_count,
    is_anonymous,
    is_saved,
    tags,
    is_liked,
    is_disliked,
    text,
    on_like_Pressed,
on_dislike_Pressed,
on_comment,
onSaved,
    attachement})=>{
    return(
        <Card>
<View style={[tw`self-center`,{width: wp('60%')}]}>

    <HorizontalList
    
    data={tags}
    renderItem={({item})=>{return(
        <View 
        
        style={[tw`rounded-lg p-0.5 justify-center items-center mx-1 px-2 py-1`,{backgroundColor:Colors.lightorange}]}
       >
            <Text style={{color:Colors.orange,fontFamily:'PoppinsMedium',textTransform:'uppercase'}}>{item}</Text>
            </View>
    )}}
    keyExtractor={(item,index)=>{return index.toString()}}
    />
</View>

<View className='flex-row ' style={{ paddingHorizontal: wp('3%')}}>
    <View className='flex-[0.2] items-center' >

<Avatar
            size='medium'
            showCap={false}
            image={user.image}
            />
    </View>

          <View className='flex-[0.8] justify-center mb-3'>
        <View className='flex-row justify-between pr-2' style={{height:hp('4%')}}>
        <View >
            <Text style={[tw`p-1 text-base`,{fontFamily:'PoppinsMedium'}]}>{user.name}</Text>
           
            </View>
            <View >

            <Text style={[tw`p-1`,{color:Colors.orange,fontFamily:'PoppinsMedium'}]}>{user.username}</Text>
            </View>
        </View>
        <View className='flex-row '>
<Text style={[tw`p-1 text-base`,{fontFamily:'PoppinsMedium'}]}>{text}</Text>
</View>
            </View>  
</View>
       

        {
            attachement && <View >
                <Image
                source={{uri: attachement}}
               
                style={{height: hp('30%')}}
                
                />
            </View>
        }
<View className='flex-row self-end justify-evenly items-center ' style={[{height:hp('6%'),width:wp('80%'),paddingHorizontal:hp('3%')}]}>
{/* <Feather name="thumbs-up" size={24} color="black" /> */}
<View style={[tw`flex-row items-center`]}>
    <Text  style={[tw`p-1`,{color:Colors.orange,fontFamily:'PoppinsMedium'}]}>{comments_count>0?comments_count:''}</Text>
<Icon
color={Colors.orange}
onPress={on_comment}
family='FontAwesome5'
name='comment-alt'
size={'small'}
/>
</View>
<View style={[tw`flex-row`]}>
    <Text style={[tw`p-1`,{color:Colors.orange,fontFamily:'PoppinsMedium'}]}>{likes_count>0?likes_count:''}</Text>
    <Icon
color={is_liked? Colors.orange:Colors.lightorange}
onPress={on_like_Pressed}
family='AntDesign'
name='like2'
size={'small'}
/>
</View>
<View style={[tw`flex-row`]}>
    <Text style={[tw`p-1`,{color:Colors.orange,fontFamily:'PoppinsMedium'}]}>{dislikes_count>0?dislikes_count:''}</Text>
    <Icon
color={ is_disliked? Colors.orange:Colors.lightorange}
onPress={on_dislike_Pressed}
family='AntDesign'
name='dislike2'
size={'small'}
/>
</View>







<Icon
color={is_saved? Colors.orange:Colors.lightorange}
onPress={onSaved}
family='Entypo'
name='bookmark'
size={'medium'}
/>
</View>
        </Card>
    )
}

export default Post