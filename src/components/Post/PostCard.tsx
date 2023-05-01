import React from 'react'

import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../assets/Colors'
import { Card } from '../../layouts/Card/Card'
import HorizontalList from '../../layouts/HorizontalList/HorizontalList'
import Avatar from '../Avatar/Avatar'

import tw from 'twrnc';
import { Icon } from '../Icon/Icon'

type User = {
    name: string
    image: string
    username: string
    bio: string
    is_tutor: boolean
}

type Props = {
    user?: User
    text: string
    date: string
    comments_count: number
    is_liked: boolean
    on_like_Pressed?: () => void
    on_dislike_Pressed?: () => void
    on_comment?: () => void
    onSaved?: () => void
    onShare?: () => void
    likes_count: number
    is_disliked: boolean
    dislikes_count: number
    is_saved: boolean
    is_anonymous: boolean
    tags: any[]
    attachement?: string


}

const Post: React.FC<Props> = ({
    user,
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
    onShare,
    attachement }) => {
    return (
        <Card>
            <View style={[tw`self-end flex-row pt-3 px-4`, { width: wp('80%'), justifyContent: 'space-between' }]}>


                <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('5') }}>
                    {
                        tags.map((item, index: number) => {
                            return (
                                <View
                                    key={index}
                                    style={[tw`rounded-lg  justify-center items-center mx-1 px-2 `, { backgroundColor: Colors.lightorange }]}
                                >
                                    <Text style={{ color: Colors.orange, fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>{item}</Text>
                                </View>
                            )
                        })
                    }

                </ScrollView>

                <Text style={{ color: Colors.neutralShadow }}>{date}</Text>
            </View>

          { is_anonymous &&
            <View >
            <Text style={[tw`p-1 text-base self-center`, { fontFamily: 'PoppinsRegular' }]}>Anonymous</Text>

        </View>
    }{!is_anonymous &&
          <View style={[tw`flex-row `, { paddingHorizontal: wp('3%') }]}>
                <View  style={[tw`items-center`, { flex:0.2}]} >

                  { user && <Avatar
                        size='medium'
                        showCap={false}
                        image={user.image}
                    />}
                </View>

                <View style={[tw` justify-center mb-3`, { flex: 0.8 }]}>
                    <View style={[tw`flex-row justify-between pr-6`, { height: hp('4%') }]}>
                        <View >
                            <Text style={[tw`p-1 text-base`, { fontFamily: 'PoppinsRegular' }]}>{user &&user.name}</Text>

                        </View>
                        <View >

                            <Text style={[tw`py-1`, { color: Colors.orange, fontFamily: 'PoppinsRegular' }]}>{user &&user.username}</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={[tw`p-1 text-base`, { fontFamily: 'PoppinsRegular' }]}>{text}</Text>
                    </View>
                </View>
            </View>
            
            }


            {
                attachement && <View >
                    <Image
                        source={{ uri: attachement }}

                        style={{ height: hp('30%') }}

                    />
                </View>
            }
            <View style={[tw`flex-row self-end justify-evenly  items-center`, { height: hp('6%'),width:wp('90%'), paddingHorizontal: hp('2%') }]}>
                {/* <Feather name="thumbs-up" size={24} color="black" /> */}
                <View style={[tw`flex-row items-center justify-center`]}>
                    <Text style={[tw`p-1`, { color: Colors.orange, fontFamily: 'PoppinsMedium' }]}>{comments_count > 0 ? comments_count : ''}</Text>
                    <TouchableOpacity
                        testID='comment-icon-view'
                        onPress={on_comment}
                    >

                        <Icon
                            onPressIcon={on_comment}
                            testId='comment-icon'
                            color={Colors.orange}
                            family='FontAwesome5'
                            name='comment-alt'
                            size={'small'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[tw`flex-row  items-center`]}>
                    <Text style={[tw`py-4 px-1`, { color: Colors.orange, fontFamily: 'PoppinsMedium' }]}>{likes_count > 0 ? likes_count : ''}</Text>
                    <View
                        testID='like-icon-view'

                    >

                        <Icon
                            onPressIcon={on_like_Pressed}
                            testId='like-icon'
                            color={is_liked ? Colors.orange : Colors.lightorange}
                            family='AntDesign'
                            name='like2'
                            size={'small'}
                        />
                    </View>
                </View>
                <View style={[tw`flex-row items-center justify-center`]}>
                    <Text style={[tw`py-3 px-1`, { color: Colors.orange, fontFamily: 'PoppinsMedium' }]}>{dislikes_count > 0 ? dislikes_count : ''}</Text>

                    <View

                        testID='dislike-icon-view'
                    >

                        <Icon
                            onPressIcon={on_dislike_Pressed}
                            color={is_disliked ? Colors.orange : Colors.lightorange}
                            testId='dislike-icon'
                            family='AntDesign'
                            name='dislike2'
                            size={'small'}
                        />
                    </View>
                </View>
                <View testID='save-icon-view' style={[tw`flex-row items-center justify-center`]} >

<Icon
    onPressIcon={onSaved}
    color={is_saved ? Colors.orange : Colors.lightorange}
    testId='save-icon'
    family='Entypo'
    name='bookmark'
    size={'medium'}
/>
</View>
                <View style={[tw`flex-row items-center justify-center`]}>

                    <View

                        testID='share-icon-view'
                    >

                        <Icon
                           
                           onPressIcon={onShare} 
                            color={Colors.lightorange}
                            testId='share-icon'
                            family='FontAwesome'
                            name='share'
                            size={'small'}
                        />
                    </View>
                </View>






              
            </View>
        </Card>
    )
}

export default Post