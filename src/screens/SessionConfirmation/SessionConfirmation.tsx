import React, { useState } from "react";

import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native'
import Details from "../../layouts/Details/Details";
import { SessionInfo } from "../DummyData";
import Colors from "../../../assets/Colors";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Section from "../../layouts/Section/Section";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'
import { Card } from "../../layouts/Card/Card";

import tw from 'twrnc';
import Button from "../../components/Button/Button";
import ChatPreview from "../../components/ChatPreview/ChatPreview";
import Avatar from "../../components/Avatar/Avatar";
import StarRatings from "../../components/StarRatings/StarRatings";
import ClassCard from "../../components/ClassCard/ClassCard";
import { Popup } from "../../components/Popup/Popup";
type Props = {
    navigation?: any
}
const SessionConfirmation: React.FC<Props> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)


    const CancelDiaglogue: React.FC = () => {
        return (


            <Modal
                presentationStyle='overFullScreen'
                style={{ flex: 1 }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>

                    <View
                        style={styles.modalViewParent}>
                        <TouchableOpacity
                            onPress={() => { setModalVisible(!modalVisible) }}
                            className='self-end '>

                            <Entypo name="circle-with-cross" size={30} color={Colors.fadedgray} />
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <Text style={{ fontFamily: 'PoppinsBold' }}
                                className='text-center'
                            >Are you sure you want to cancel this session?</Text>
                            <Text style={{ fontFamily: 'PoppinsRegular' }}
                                className='text-center'
                            >You Can Always Book An Other Session With Youseff Haroon</Text>
                            <TouchableOpacity
                                style={{ backgroundColor: Colors.red }}
                                className='px-16 py-3 my-3 rounded-full justify-center items-center'
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold' }} className='text-white'>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


        )
    }
    return (
        <Details headerTitle="Session Confirmation">
            {/* <CancelDiaglogue/> */}
            {
                modalVisible && <Popup opened={modalVisible} closeModal={() => { setModalVisible(!modalVisible) }}>
                    <View style={styles.modalView}>
                        <Text style={[tw`text-center`, { fontFamily: 'PoppinsBold' }]}

                        >Are you sure you want to cancel this session?</Text>
                        <Text

                            style={[tw`text-center`, { fontFamily: 'PoppinsRegular' }]}

                        >You Can Always Book An Other Session With Youseff Haroon</Text>
                        <View style={[tw`px-4 py-2`]}>

                            <Button
                                shape="full"
                                text="Cancel"
                                backgroundColor={Colors.red}
                                onPress={() => setModalVisible(!modalVisible)}
                            />

                        </View>
                    </View>
                </Popup>
            }
            <View style={[tw`my-1`]}>
                <Section title="Session Info">
                    <View style={[tw`px-3`]}>

                        <HorizontalList
                            data={SessionInfo}
                            renderItem={({ item }) => {
                                return (
                                    <Card>

                                        <View style={[tw`px-4 py-6`]}>
                                            <View style={[tw`flex-row justify-between`]}>
                                                <View style={[tw`flex-row`]}>
                                                    <Text style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Timing:</Text>
                                                    <Text style={[tw`mx-1`, { fontFamily: 'PoppinsBold' }]}>{item.Timing}</Text>
                                                </View>

                                                <View>
                                                    <FontAwesome name="edit" size={20} color={Colors.orange} />
                                                </View>
                                            </View>


                                            <View style={[tw`flex-row`]}>
                                                <Text
                                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                                >Location:</Text>
                                                <Text
                                                    style={[tw`mx-1`, { fontFamily: 'PoppinsBold', color: Colors.orange }]}
                                                >{item.Location}</Text>
                                            </View>
                                            <View style={tw`flex-row`}>
                                                <Text
                                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                                >Topic:</Text>
                                                <Text
                                                    style={[tw`mx-1`, { fontFamily: 'PoppinsBold' }]}
                                                >{item.Topic}</Text>
                                            </View>

                                        </View>
                                    </Card>
                                )
                            }}

                            keyExtractor={(item, index) => { return item.id.toString() }}
                        />
                    </View>
                </Section>
            </View>
            <View style={[tw`my-1`]}>
                <Section title="Payment">
                    <View style={tw`px-6 pr-7 flex-row justify-between items-center`}>



                        <Text
                            className='text-base'
                            style={{ fontFamily: 'PoppinsMedium' }}>170 EGP</Text>
                        <Button
                            shape="default"
                            text='Pay Now'

                               onPress={()=>{navigation.navigate('PaymentStatus')}}
                            // onPress={() => { Alert.alert('Pressed') }}

                        />



                    </View>
                </Section>
            </View>

            <View style={[tw`my-1`]}>
                <Section title="Chat">
                    <ChatPreview



                        last_message={'Got It Thanks:)'}
                        last_message_date={'20-10-2022'}
                        unread_count={3}
                        user={{ name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }}


                    />
                </Section>
            </View>

            <View style={[tw`my-1`]}>
                <Section title="Tutor">
                    <Card>
                        <View style={[tw`p-2 py-4 flex-row justify-between`]}>



                            <Avatar
                                size="medium"
                                showCap={false}
                                image="https://i.pravatar.cc/300"

                            />
                            <View >

                                <Text
                                    style={{ fontFamily: 'PoppinsBold' }}
                                    className='text-base'
                                >Youseff Haroon</Text>
                                <View style={[tw`self-center  pr-7`]}>

                                    <StarRatings numStars={5} rating={4} isDisable />
                                </View>
                            </View>

                            <View style={tw`justify-center`}>

                                <Button
                                    shape="default"
                                    onPress={() => { navigation.navigate('TutorProfile') }}
                                    text='View Profile'
                                />
                            </View>

                        </View>
                    </Card>
                </Section>
            </View>
            <View style={[tw`my-1`]}>
                <Section title="Class">
                    <ClassCard
                        desc="CSCE 1520"
                        name="Introduction to Computer Science"
                    />
                </Section>
            </View>
            <View style={[tw`my-1`]}>
                <TouchableOpacity
                    onPress={() => { setModalVisible(!modalVisible) }}
                    style={tw`p-1 justify-center items-center`}

                >
                    <Text
                        style={{ color: Colors.red, fontFamily: 'PoppinsBold' }}
                    >Cancel</Text>
                </TouchableOpacity>
            </View>
        </Details>
    )
}

export default SessionConfirmation



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {

        backgroundColor: 'white',

        paddingHorizontal: 35,
        paddingVertical: 5,
        alignItems: 'center',

    },

    modalViewParent: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});