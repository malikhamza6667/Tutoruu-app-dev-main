import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";
import Colors from "../../../assets/Colors";
import Avatar from "../../components/Avatar/Avatar";

const Following = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={messageData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}
const Screen2 = () => {
    return (
        <Text>screen 2 </Text>
    )
}
const messageData = [
    {
        id: 1,
        sender: 'Ragnar Lothbrok',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
        image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
    },
    {
        id: 2,
        sender: 'Ragnar Lothbrok',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
    },
    {
        id: 3,
        sender: 'Ragnar Lothbrok',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        image: 'https://www.bootdey.com/image/580x580/008000/000000',
    },
]
const renderItem = ({ item }) => {
    return (
        <View>
            <View style={styles.cardHeader}>
                {/* <Image style={styles.avatar} source={{ uri: item.avatar }} /> */}
                <Avatar
                    showCap={false}
                    image={item.avatar}
                    size="medium"
                />
                <View
                    style={{
                        marginLeft: hp('1')
                    }}
                >
                    <Text style={styles.sender}>{item.sender}</Text>
                    <Text style={styles.Auc}>AUC</Text>
                </View>
                {/* <View style={{}}> */}
                {/* <Auc width={wp('26%')} height={hp('3.2%')} text="FOLLOWING" /> */}
                {/* </View> */}
            </View>
        </View>
    )
}
const FollowList = () => {
    const [selectedData, setSelectedData] = useState(Following);
    const [focused, setFocused] = useState(false);
    return (
        <Details headerTitle="Rangnar">
            <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
                <TouchableOpacity style={focused ? styles.InActiveButton : styles.ActiveButton}
                    onPress={() => {
                        setSelectedData(Following);
                        setFocused(false);
                    }}>
                    <Text style={{ color: focused ? Colors.black : Colors.orange }} >110 Following </Text>
                </TouchableOpacity>
                <TouchableOpacity style={!focused ? styles.InActiveButton : styles.ActiveButton} onPress={() => {
                    setSelectedData(Screen2);
                    setFocused(true);
                }}>
                    <Text style={{ color: !focused ? Colors.black : Colors.orange }}>110 Followers </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>

                <View style={{}}>{selectedData}</View>
            </View>
        </Details>
    )
}
export default FollowList
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        // backgroundColor:'yellow'   
    },
    innerContainer: {
        // flex: 1,
        width: wp('90%'),
        alignSelf: 'center',
        // backgroundColor:'red',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('1%'),
        // backgroundColor:'red',
        height: hp('7%')
        // justifyContent:'space-between'
    },
    avatar: {
        width: wp('11%'),
        height: hp('5%'),
        resizeMode: 'contain',
        borderRadius: 50,
        marginHorizontal: wp('2%')
    },
    sender: {
        fontFamily: 'PoppinsMedium',
        fontSize: hp('1.5%'),
        lineHeight: 18,
        // backgroundColor: 'pink',
        // height:hp('90%'),
        width: wp('50%')
    },
    ActiveButton: {
        padding: hp('1.5'),
        // margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('50%'),
        backgroundColor: Colors.lightorange,
    },
    InActiveButton: {
        padding: hp('1.5'),
        // margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('50%'),
        backgroundColor: Colors.white,
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    Auc: {
        color: Colors.orange,
        fontFamily: 'PoppinsRegular'
    }
})