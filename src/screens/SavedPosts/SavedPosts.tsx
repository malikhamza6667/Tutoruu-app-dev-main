import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Details from "../../layouts/Details/Details";
import Avatar from "../../components/Avatar/Avatar";
import Colors from "../../../assets/Colors";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Post from "../../components/Post/PostCard";
import { postsData } from "../DummyData";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


const SavedPosts:React.FC = () => {
    const [islike, setisLiked] = useState(false);
    const [isDislike, setisDisLiked] = useState(false);
    const [isSaved, setisSaved] = useState(false);
    const [commented, setIsCommented] = useState(false);
    const renderItem = ({ item }) => (
        <Post
            text={item.text}
            user={item.user}
            date={item.date}
            comments_count={item.comments_count}
            likes_count={item.likes_count}
            dislikes_count={item.dislikes_count}
            is_liked={item.is_liked}
            is_disliked={item.is_disliked}
            is_saved={true}
            on_dislike_Pressed={() => {
                setisDisLiked(!isDislike);
            }}
            on_like_Pressed={() => {
                setisLiked(!islike);
            }}
            onSaved={() => {
                setisSaved(!isSaved);
            }}
            is_anonymous={item.is_anonymous}
            tags={item.tags}
            attachement={item.attachement}
            key={item.id}

        />
    );
    return (
        <Details headerTitle="SavedPosts">
            <View>
            <HorizontalList
            horizontal={false}
            contentContainerStyle={{paddingBottom:hp('10%')}}
                    showsVerticalScrollIndicator={false}
                    data={postsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </Details>
    )
}

export default SavedPosts