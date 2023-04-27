import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Details from "../../layouts/Details/Details";
import Avatar from "../../components/Avatar/Avatar";
import Colors from "../../../assets/Colors";
import Box from "../../components/Box/Box";
import Section from "../../layouts/Section/Section";
import ClassCard from "../../components/ClassCard/ClassCard";
import { Separator } from "../../components/Separator/Separator";
import Spacer from "../../components/Spacer/Spacer";
import { Icon } from "../../components/Icon/Icon";
import Tag from "../../components/Tag/Tag";
import Review from "../../components/Review/Review";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Input from "../../components/Input/Input";
type Props={
    navigation?:any
}

const Profile:React.FC<Props> = ({navigation}) => {
    const [pickedImage, setPickedImage] = useState('')
    const [pickedDocUri, setPickedDocUri] = useState('')
    const [pickedDocName, setPickedDocName] = useState('Upload Your Transcript')
    const [isTutor, setIsTutor] = useState(false)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });



        if (result.canceled) {
            setPickedImage('')
        }
        else {
            setPickedImage(result.assets[0].uri);

        }
    };

    const PickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: false
        });
        if (result.type == 'success') {
            console.log(result)
            setPickedDocName(result.name)
            setPickedDocUri(result.uri)
        }
        else {
            setPickedDocName('Pick A Document')
            setPickedDocUri('')
        }

    }


    const rowStyle = tw`flex-row items-center`
    const spaceStyle = tw`pl-2`



    const reviewdata =
        [
            {
                id: 1,
                text: "Explains very well and helped me a lot",
                class_name: "Calculus 1",
                rating: 4.5,
                author_image: "",
                author_name: "namr",
                date: "2/22/2022"

            },
            {
                id: 2,
                text: "Explains very well and helped me a lot",
                class_name: "Calculus 1",
                rating: 5,
                author_image: "",
                author_name: "namr",
                date: "2/22/2022 "

            },
        ]



    const coursedata =
        [
            {
                id: 1,
                course: 'CSCE-1521'
            },
            {
                id: 2,
                course: 'CSCE-1521'
            }
        ]

    const classdata =
        [
            {
                id: 1,
                desc: "CSCE 1520",
                name: "Introduction to Computer Science"
            },
            {
                id: 2,
                desc: "CSCE 1520",
                name: "Introduction to Computer Science"

            }
        ]

    return (
        <Details headerTitle="Profile">
            {isTutor ?
                (
                    <View>
                        <ScrollView>
                            <View
                                style={[tw`flex-row mx-2`, {}]}
                            >
                                <View>
                                    {
                                        pickedImage ?
                                            <Avatar
                                                image={pickedImage}
                                                showCap={false}
                                                size="large"
                                            />
                                            :
                                            <Avatar
                                                image="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7fWIFm7j2Oz0gFHTNp1fskSWJDbi_EUD2Q&usqp=CAU"
                                                size="large"
                                                showCap={false}
                                            />
                                    }
                                </View>

                                <View style={tw`p-2 `}>
                                    <View style={[tw`flex-row`, { justifyContent: 'space-between', width: wp('70') }]}>
                                        {/* <Text>auc</Text> */}

                                        <Tag
                                            type="primary"
                                            shape="round"
                                        >
                                            AUC
                                        </Tag>
                                        <Icon
                                            family="Feather"
                                            name="edit"
                                            size="xsmall"
                                            color={Colors.orange}
                                            onPressIcon={() => {navigation.navigate('EditProfile')}}
                                        />
                                    </View>
                                    <Text style={[tw`text-xl`, { fontFamily: 'PoppinsBold' }]}>Ragnar</Text>
                                    <View style={[tw`flex-row`]}>
                                        <Tag type="neutral">Tutor</Tag>
                                        <Tag type="neutral">300 EGP</Tag>
                                    </View>
                                    <View
                                        style={[tw`flex-row`, { justifyContent: 'space-between' }]}
                                    >
                                        <View
                                            style={rowStyle}
                                        >
                                            <Icon
                                                family="AntDesign"
                                                name="checkcircle"
                                                size="small"
                                                color={Colors.orange}
                                                onPressIcon={() => {navigation.navigate('EditProfile')}}
                                            />
                                            <View style={spaceStyle}>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>360 </Text>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>approves</Text>
                                            </View>
                                        </View>
                                        <View style={rowStyle}>
                                            <Icon
                                                family="FontAwesome5"
                                                name="user"
                                                size="small"
                                                color={Colors.orange}
                                                onPressIcon={() => {navigation.navigate('FollowList')}}
                                            />

                                            <View style={spaceStyle}>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>432 </Text>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>Follower</Text>
                                            </View>
                                        </View>
                                        <View style={rowStyle}>
                                            <Icon
                                                family="AntDesign"
                                                name="like2"
                                                size="small"
                                                color={Colors.orange}
                                                onPressIcon={() => alert('Pressed')}
                                            />
                                            <View style={spaceStyle}>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>2k </Text>
                                                <Text style={{ fontFamily: 'PoppinsMedium' }}>likes</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Section title="">
                                <Box text="Some text here" />
                            </Section>
                            <Section title="Bio" >
                                <View
                                    style={[tw`self-center`, { width: wp('90') }]}
                                >
                                    <Text
                                        style={[tw``, { fontFamily: 'PoppinsRegular' }]}
                                    >
                                        Mi velit sollicitudin bibendum semper non arcu fames viverra dicyum</Text>
                                </View>
                            </Section>
                            <Spacer />
                            <Separator type="line" />
                            <Section title="Classes You are Teaching">
                                <View
                                    style={[tw``, { alignItems: 'center' }]}
                                >
                                    <Input
                                        size="xlarge"
                                        placeholder="Add Classes"
                                        icon="AntDesign plus 16 gray"
                                    />
                                    <View
                                        style={[tw`flex-row py-2`, { width: wp('90') }]}
                                    >

                                        <Tag type="neutral">CSCE-1521</Tag>
                                        <Tag type="neutral">CSCE-1521</Tag>
                                    </View>

                                    {/* <View >
                                        <HorizontalList
                                            contentContainerStyle={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}
                                            data={coursedata}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <Tag type="neutral">CSCE-1521</Tag>

                                                    </View>
                                                )
                                            }}
                                            keyExtractor={(item, index) => { return index.toString() }}
                                        />
                                    </View> */}
                                </View>
                            </Section>
                            <Section title="Reviews">
                                <View >

                                    <HorizontalList
                                        contentContainerStyle={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}
                                        data={reviewdata}
                                        renderItem={({ item }) => {
                                            return (
                                                <Review
                                                    text={item.text}
                                                    class_name={item.class_name}
                                                    rating={item.rating}
                                                    author_image={item.author_image}
                                                    author_name={item.author_name}
                                                    date={item.date}
                                                />
                                            )
                                        }}
                                        keyExtractor={(item, index) => { return index.toString() }}
                                    />
                                </View>

                            </Section>

                            <Separator type="line" />

                        </ScrollView>
                    </View>
                )
                :
                (
                    <View>
                        <ScrollView>
                            <View
                                style={[tw`flex-row mx-2`, {}]}
                            >

                                <View>
                                    {
                                        pickedImage ?
                                            <Avatar
                                                image={pickedImage}
                                                showCap={false}
                                                size="large"
                                            />
                                            :
                                            <Avatar
                                                image="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7fWIFm7j2Oz0gFHTNp1fskSWJDbi_EUD2Q&usqp=CAU"
                                                size="large"
                                                showCap={false}
                                            />
                                    }
                                </View>

                                <View style={tw`p-2 `}>
                                    <View style={[tw`flex-row`, { justifyContent: 'space-between', width: wp('70') }]}>
                                        {/* <Text>auc</Text> */}

                                        <Tag
                                            type="primary"
                                            shape="round"
                                        >
                                            AUC
                                        </Tag>

                                        <Icon
                                            family="Feather"
                                            name="edit"
                                            size="xsmall"
                                            color={Colors.orange}
                                            onPressIcon={() =>{navigation.navigate('EditProfile')}}
                                        />

                                    </View>

                                    <Text style={[tw`text-xl`, { fontFamily: 'PoppinsBold' }]}>Ragnar</Text>

                                    <TouchableOpacity
                                    onPress={()=>{navigation.navigate('FollowList')}}
                                    >
                                        <Text style={[tw``, { textTransform: 'uppercase', color: Colors.orange, fontFamily: 'PoppinsMedium' }]}>100 followers</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <Section title="">
                                <Box text="Some text here" />
                            </Section>
                            <Section title="Bio" >
                                <View
                                    style={[tw`self-center`, { width: wp('90') }]}
                                >
                                    <Text
                                        style={[tw``, { fontFamily: 'PoppinsRegular' }]}
                                    >
                                        Mi velit sollicitudin bibendum semper non arcu fames viverra dicyum</Text>
                                </View>

                            </Section>
                            <Spacer />
                            <Separator type="line" />

                            <Section title="Enrolled Classes">
                                <View >

                                    <HorizontalList
                                        contentContainerStyle={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}
                                        data={classdata}
                                        renderItem={({ item }) => {
                                            return (
                                                <ClassCard
                                                    name={item.name}
                                                    desc={item.desc}
                                                    onPress={() => alert('Pressed')}
                                                />
                                            )
                                        }}
                                        keyExtractor={(item, index) => { return index.toString() }}
                                    />
                                </View>

                            </Section>
                            <Separator type="line" />
                            <Section title="Recent Posts" button={{ shape: 'round', icon: '+', className: 'bg-secondary text-primary' }}>
                            </Section>
                        </ScrollView>

                    </View>
                )
            }

        </Details>



    )
}

export default Profile