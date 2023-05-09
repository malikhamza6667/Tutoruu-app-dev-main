import React, { useState } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import MyPost from "../../components/MyPost/MyPost";
import Post from "../../components/Post/PostCard";
import { Separator } from "../../components/Separator/Separator";
import Base from "../../layouts/Base/Base";

import { postsData } from "../DummyData";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Colors from "../../../assets/Colors";
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
const categoryTags=[
    {
        id:0,
        tag: 'Auc'
    },
    {
        id: 1,
        tag: 'General'
    },
    {
        id:2,
        tag:'Notes'
    },
    {
        id:3,
        tag: 'Q&A'
    },
    {
        id:4,
        tag: 'Tips&Tricks'
    },

]
const Feed = () => {
    const [islike, setisLiked] = useState(false);
    const [isDislike, setisDisLiked] = useState(false);
    const [isSaved, setisSaved] = useState(false);
    const [commented, setIsCommented] = useState(false);
    const[selectedFilter,setSelectedFilter]=useState(0)
    const[Posts,setPosts]=useState(postsData)
    const[selectedFilterName,setSelectedFilterName]=useState('All')
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

    const filterArray=(tag:string)=>{
        
        const filteredArray = postsData.filter((item) =>
        item.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    
      setPosts(filteredArray);
    }
    return (
        <Base isTutor={false} userName="Maryam">

            <Separator type="line" />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                  <View style={[tw`px-5 py-2`]}>
                    <HorizontalList
                    data={categoryTags}
                    renderItem={({item,index})=>{
                        return(
<TouchableOpacity
onPress={()=>{
    setSelectedFilter(index)
    filterArray(item.tag)
setSelectedFilterName(item.tag)
}}
style={[tw`rounded-full flex-row items-center px-3 m-1 py-2`,{backgroundColor:selectedFilter==index?Colors.lightorange: Colors.gray}]}
>
    <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium',textTransform:'uppercase',color:selectedFilter==index?Colors.orange: Colors.black}]}>{item.tag}</Text>
{
 selectedFilter==index&&   <View style={[tw`ml-1 mb-0.5`]}>

        <AntDesign name="caretdown" size={14} color={Colors.orange}/>  
    </View>
}


</TouchableOpacity>
                        )                    }}
                    
                    />
                </View>

                <MyPost />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </Base>
    );
};

export default Feed;
