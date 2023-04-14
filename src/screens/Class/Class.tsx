import React, { useState } from "react";

import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Details from "../../layouts/Details/Details";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Colors from "../../../assets/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import tw from 'twrnc';
import { ClassStudents, TutorSubjects } from "../DummyData";
import Avatar from "../../components/Avatar/Avatar";
import Section from "../../layouts/Section/Section";
import Post from "../../components/Post/PostCard";
import TutorCard from "../../components/TutorCard/TutorCard";
import { Card } from "../../layouts/Card/Card";
import Button from "../../components/Button/Button";
const ClassesData = [
    'AUC',
    'Computer Science'
]

const Data = [
    {

        id: 1,
        name: 'abcd',
    },
    {

        id: 2,
        name: 'nabcd',
    },

]


const user = {
    name: 'John Doe',
    image: 'https://i.pravatar.cc/300', username: '@john johndoe',
    bio: 'Hello world This Is New Post', is_tutor: true
}

const Class: React.FC = () => {
    const [selectedCategoryIdx, setSelectedCatagoryIdx] = useState(0)

    const [islike, setisLiked] = useState(false)
    const [isDislike, setisDisLiked] = useState(false)
    const [isSaved, setisSaved] = useState(false)

    const totalStudents = ClassStudents.length

    //   const totalStudents= 0
    return (


        <Details headerTitle="CSCE 312" >
            {
                totalStudents > 0 &&
                <View className="justify-between">
                    <ScrollView>
                        <View >

                            <HorizontalList
                                contentContainerStyle={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}
                                data={ClassesData.slice(0, 4)}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => { setSelectedCatagoryIdx(index) }}
                                            style={{
                                                backgroundColor: index == selectedCategoryIdx ? Colors.orange : Colors.gray,


                                            }}
                                            className=' rounded-3xl self-center py-2 px-3  m-0.5  items-center '>
                                            <Text

                                                style={{ color: index == selectedCategoryIdx ? Colors.white : Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                                className='text-sm '>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={(item, index) => { return index.toString() }}
                            />
                        </View>
                        <View style={tw`px-5`}>
                            <Text
                                style={[tw`text-xl`, { fontFamily: "PoppinsBold" }]}
                            >Introduction to Computer Architecture</Text>
                            <Text
                                style={[tw`text-sm`, { fontFamily: "PoppinsMedium" }]}

                            >{totalStudents} Students</Text>
                            <View >

                                <HorizontalList
                                    contentContainerStyle={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}
                                    data={ClassStudents.slice(0, 5)}
                                    renderItem={({ item }) => {
                                        return (
                                            <View

                                                style={{ borderWidth: 2, borderRadius: 50, backgroundColor: 'gray', borderColor: Colors.white, marginLeft: -15, }}
                                            >

                                                <Avatar
                                                    image={item.image}
                                                    size="small"
                                                    showCap={false}
                                                />

                                            </View>
                                        )
                                    }}
                                    keyExtractor={(item, index) => { return index.toString() }}
                                />
                            </View>
                        </View>


                        <View>
                            <Section title="Posts">
                                <HorizontalList
                                    data={Data}
                                    renderItem={({ item }) => {
                                        return (
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
                                    keyExtractor={(item) => { return item.id.toString() }}
                                />

                            </Section>
                        </View>


                        <View >
                            <Section title="Tutors">
                                <HorizontalList
                                    contentContainerStyle={{ paddingVertical: hp('3.5%') }}
                                    data={Data}
                                    renderItem={({ item }) => {
                                        return (
                                            <TutorCard
                                                classes={TutorSubjects}
                                                user={{ name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe', bio: 'Hello world', is_tutor: true }}
                                                num_sessions={4}
                                                rating={2}
                                                onPress={() => { alert('Pressed') }}
                                                rate={'270 EGP'}
                                                text={'PhD student in the Industrial & Systems Engineering Department…'}
                                            />
                                        )
                                    }}
                                    keyExtractor={(item) => { return item.id.toString() }}
                                />

                            </Section>
                        </View>
                    </ScrollView>





                </View>
            }

            {totalStudents == 0 &&
                <View>
                    <View style={tw``}>

                        <HorizontalList

                            data={ClassesData.slice(0, 4)}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { setSelectedCatagoryIdx(index) }}
                                        style={{
                                            backgroundColor: index == selectedCategoryIdx ? Colors.orange : Colors.gray,


                                        }}
                                        className=' rounded-3xl self-center py-2 px-3  m-0.5  items-center '>
                                        <Text

                                            style={{ color: index == selectedCategoryIdx ? Colors.white : Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                            className='text-sm '>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item, index) => { return index.toString() }}
                        />
                    </View>
                    <View style={tw`px-5`}>
                        <Text
                            style={[tw`text-xl`, { fontFamily: "PoppinsBold" }]}
                        >Introduction to Computer Architecture</Text>
                        <Text
                            style={[tw`text-sm`, { fontFamily: "PoppinsMedium" }]}

                        >{totalStudents == 0 ? 'No Students' : `${totalStudents} Students`} </Text>


                    </View>
                    <View>
                        <Section title="Tutors">
                            <Card>
                                <View style={[tw`px-6 py-8 mx-3`]}>
                                    <Text
                                        style={[tw`px-3 py-2`, { fontFamily: 'PoppinsRegular', textAlign: 'center' }]}
                                    >No Tutors yet. Don’t Worry, if you need a tutor we’ll find you one.</Text>
                                    <Button
                                        shape="default"
                                        onPress={() => { alert('Pressed') }}
                                        text="Request A Tutor"


                                    />
                                </View>
                            </Card>

                        </Section>
                    </View>
                </View>
            }




        </Details>


    )
}

export default Class;