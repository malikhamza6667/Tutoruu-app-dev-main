import React, { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import ClassCard from "../../components/ClassCard/ClassCard";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Post from "../../components/Post/PostCard";
import Spacer from "../../components/Spacer/Spacer";
import TutorCard from "../../components/TutorCard/TutorCard";
import Details from "../../layouts/Details/Details";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { TutorInfo, TutorSubjects, user, tutorData, ClassInfo, postsData } from "../DummyData";








const Seacrh = () => {
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
    const [email, setEmail] = useState('')
    const [islike, setisLiked] = useState(false)
    const [isDislike, setisDisLiked] = useState(false)
    const [isSaved, setisSaved] = useState(false)
    const [commented, setIsCommented] = useState(false)
    return (
        <Details headerTitle="Search">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={[
                        tw`items-center`
                    ]}
                >
                    <Input
                        size='xlarge'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder='Search Anything'
                        height={hp('5')}
                        iconPosition='right'
                        icon={'AntDesign search1 20 gray'}
                    />
                </View>
                <Spacer />
                <Heading heading="Tutors" />



                <HorizontalList
                    data={tutorData}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TutorCard
                                    classes={TutorSubjects}
                                    user={item.user}
                                    num_sessions={item.num_sessions}
                                    rating={item.rating}
                                    onPress={item.onPress}
                                    rate={item.rate}
                                    text={item.text}
                                />

                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}


                />

                <Spacer />
                <Heading heading="Classes" />

                <HorizontalList
                    data={ClassInfo}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <ClassCard
                                    name={item.Title}
                                    desc={item.Desc}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}
                />
                <Spacer />
                <Heading heading="Posts" />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={postsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </Details>
    )
}

export default Seacrh