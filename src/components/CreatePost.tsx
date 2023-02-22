import React, { useState, useContext } from "react"
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Languages from '../languages'
import LanguageContext from '../languages/languageContext'
import Colors from "../../assets/Colors";
import Field from "./InputField";
import UserImage from "./userImage";
import Btn from "./Button"
import Spacer from "./Spacer"
import Auc from "./Auc"

const CreatePost: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {

        const language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
        else if (language === 'es') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    const [isOn, setIsOn] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: ('https://www.bootdey.com/img/Content/avatar/avatar1.png') }} />
            <Field width={250} borderRadius={50} />
            <TouchableOpacity style={styles.bubble} onPress={() => setModalVisible(true)} >
                <AntDesign
                    name="arrowright"
                    size={20}
                    color={Colors.white}
                />
            </TouchableOpacity>
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=>{setModalVisible(!modalVisible)}}
                >
                    <View style={styles.background}>
                        <View style={styles.modalView}>
                            {/* Modal content goes here */}
                            <View
                                style={{ backgroundColor: Colors.white, padding: hp('2%'), borderRadius: 20, }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <UserImage width={wp('10%')} height={hp('5%')} />
                                    <View>
                                        <Text style={styles.name}>Yasmine Kamel</Text>
                                        <Text style={styles.email}>@Yasmine Kamel</Text>
                                    </View>
                                </View>
                                <Spacer />
                                <TextInput
                                    placeholder="Write anything..."
                                    placeholderTextColor={Colors.fadedgray}
                                    style={[styles.input, { textAlignVertical: 'top', padding: hp('1%') }]}
                                    numberOfLines={5}
                                    multiline={true}
                                />
                                <Spacer />
                                <Text style={styles.tags}>{Strings.ST66}</Text>
                                <Spacer />
                                <View style={{ flexDirection: 'row', }} >
                                    <View style={{ marginRight: 5 }}>
                                        <Auc text="AUC" width={wp('12%')} height={hp('3.5%')} />
                                    </View>
                                    <Auc text="GENERAL" width={wp('20%')} height={hp('3.5%')} />
                                </View>
                                <Spacer />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.tags, { marginTop: hp('1%') }]}>{Strings.ST67}</Text>
                                    <TouchableOpacity
                                        onPress={() => setIsOn(!isOn)}
                                    // style={{ marginRight: wp('3%') }}
                                    >
                                        {isOn ?
                                            (<FontAwesome name="toggle-on" size={hp('4%')} color={Colors.orange} />)
                                            :
                                            (<FontAwesome name="toggle-off" size={hp('4%')} color={Colors.orange} />)
                                        }
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Btn text={Strings.ST68} width={wp('85%')} height={hp('4.5%')} route={''} />
                                </TouchableOpacity>
                                <Spacer />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('95%'),
        // height: 74,
        borderRadius: 20,
        alignSelf: 'center',
        padding: hp('1%')
    },
    avatar: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: 20,
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.fadedgray,
        width: wp('86%'),
        height: hp('10%'),
        fontWeight: '500',
        fontSize: hp('1.5%'),
        // padding: 70,
        // lineHeight: 21,
        // paddingBottom: 10
    },

    bubble: {
        backgroundColor: Colors.orange,
        width: wp('10%'),
        height: hp('5'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        // height: '50%',
        width: wp('95%'),
        // backgroundColor: 'red',
        borderRadius: 20,
        // padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },


    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21
    },
    email: {
        fontSize: hp('1.5%'),
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.orange
    },
    tags: {
        fontWeight: '400',
        fontSize: hp('1.5%'),
        lineHeight: 21
    },
    placeholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: hp('2'),
        // color: Colors.gray,
        color: 'red',
        paddingLeft: hp('1.6'),
    }
})

export default CreatePost