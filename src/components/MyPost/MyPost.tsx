import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import { Card } from "../../layouts/Card/Card";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import PostPopup from '../PostPopup/PostPopup'
import Switch from "../Switch/Switch";
import Tag from "../Tag/Tag";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from "../../../assets/Colors";
import { useNavigation } from "@react-navigation/native";

const MyPost = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const handleCloseModal = () => {
        setIsVisible(false);
        // onClose();
    };

    // const handleSave = () => {
    //     onSubmit({
    //         text,
    //         tags: tags.split(',').map((tag) => tag.trim()),
    //         attachment,
    //     });
    //     setIsVisible(false);
    // };
    const handlePostButtonPress = () => {
        setIsModalVisible(true);
    };




    return (
        <Card>
            <View
                style={[
                    tw`p-3 flex-row mx-1 items-center`
                ]}
                testID='my-post'
            >
                <View >

                    <Avatar
                        testId='my-post-avatar'
                        showCap={false}
                        size='medium'
                        image='https://img.freepik.com/free-photo/fascinating-european-female-model-casual-checkered-shirt-posing-with-pleasure-yard-autumn_197531-6933.jpg?size=626&ext=jpg&ga=GA1.1.1081558094.1677063520&semt=ais'
                    />
                </View>
                <View

                    style={[
                        tw`ml-1`,
                    ]}
                >

                    <Input
                        size='medium'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder='Doe'
                        height={hp('5')}
                        testID="my-post-input"
                     
                    />

                </View>
                <View
                    style={[
                        tw`p-2`
                    ]}
                >


                    <Button
                        onPress={() => { setIsModalVisible(!isModalVisible) }}
                        // onPress={() => alert('Pressed')}
                        icon={'AntDesign arrowright 18 white'}
                        shape='round'
                        // text='Create Account'
                        width={wp('8%')}
                        height={hp('4%')}
                        testID='my-post-button'
                    />
                </View>
            </View>
            <Modal
                onRequestClose={() => setIsModalVisible(false)}
                visible={isModalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
                    <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-gray-700`}>
                        <View
                            style={[
                                tw`bg-white py-5 px-2 shadow-lg`,
                                { width: wp('93%'), height: hp('47%'), borderRadius: wp('7%'), },
                            ]}
                        >
                            <View style={[tw`flex-row`]}>

                                <Avatar
                                    image="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7fWIFm7j2Oz0gFHTNp1fskSWJDbi_EUD2Q&usqp=CAU"
                                    size="small"
                                    showCap={false}
                                />

                                <View>

                                    <Text
                                        style={{ fontFamily: 'PoppinsSemiBold', fontSize: hp('1.8') }}
                                    >Yasmine Kamel</Text>
                                    <Text
                                        style={[tw`text-orange-500 mb-2`, { fontFamily: 'PoppinsRegular', fontSize: hp('1.8') }]}
                                    >@yasmine Kamel</Text>
                                </View>

                            </View>



                            <Input
                                size='Xlarge'
                                value={email}
                                onChangeText={(text) => { setEmail(text) }}
                                // title='Password'
                                placeholder='Doe'
                            />
                            <TouchableOpacity
                                style={[tw`ml-78`, { position: 'absolute', marginTop: hp('17'), }]}
                                onPress={() => alert('pressed')}
                            >

                                <Entypo
                                    name="attachment"
                                    size={hp('2')}
                                    color={Colors.orange}

                                />
                            </TouchableOpacity>
                            <Text
                                style={[tw`pt-3`, { fontFamily: 'PoppinsRegular', fontSize: hp('1.8') }]}
                            >Tags</Text>


                            <View
                                style={tw`flex-row pt-2`}
                            >

                                <TouchableOpacity style={[tw` p-2 mr-1 rounded-full items-center`, { backgroundColor: Colors.lightorange, justifyContent: 'center' }]}>
                                    <Text style={[tw`px-2`, { fontFamily: 'PoppinsMedium', color: Colors.orange, fontSize: hp('1.8'), textTransform: 'uppercase' }]}>auc</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[tw`p-2 rounded-full flex-row items-center`, { backgroundColor: Colors.lightorange }]}>
                                    <Text style={[tw`px-2`, { fontFamily: 'PoppinsMedium', color: Colors.orange, fontSize: hp('1.8'), textTransform: 'uppercase' }]}>General</Text>
                                    <MaterialIcons name="arrow-drop-down" size={hp('3')} color={Colors.orange} />
                                </TouchableOpacity>

                            </View>
                            <View
                                style={tw`flex-row justify-between items-center`}
                            >

                                <Text
                                    style={{ fontFamily: 'PoppinsRegular', fontSize: hp('1.8') }}
                                >Post anonymously</Text>
                                <Switch opened={true} >

                                </Switch>
                            </View>

                            <Button
                                onPress={() => { alert('Pressed') }}
                                shape='full'
                                text='Post!'
                            />
                            <View style={tw`flex-1`}>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


        </Card>
    )
}
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
export default MyPost