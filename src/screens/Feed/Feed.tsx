import React, { useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import MyPost from "../../components/MyPost/MyPost";
import Post from "../../components/Post/PostCard";
import { Separator } from "../../components/Separator/Separator";
import Base from "../../layouts/Base/Base";

import { postsData } from "../DummyData";
const Feed = () => {
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
            is_saved={item.is_saved}
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
        <Base isTutor={false} userName="Maryam">

            <Separator type="line" />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <MyPost />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={postsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </Base>
    );
};

export default Feed;
