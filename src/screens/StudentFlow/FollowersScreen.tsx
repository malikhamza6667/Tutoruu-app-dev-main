import React, { useState } from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../../assets/Colors";
import Auc from "../../components/Auc";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";


const Following: React.FC = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={messageData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()} />
    )
}
const Screen2: React.FC = () => {
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
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <Text style={styles.sender}>{item.sender}</Text>
                <View style={{}}>
                    <Auc width={wp('27%')} height={hp('4%')} text="FOLLOWING" />
                </View>
            </View>
        </View>
    )
}
const Followers: React.FC = () => {
    const [selectedData, setSelectedData] = useState(Following);
    const [focused, setFocused] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle="Ragnar-Lothbrok" />
            <Spacer />
            <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
                <TouchableOpacity style={focused ? styles.InActiveButton : styles.ActiveButton
                } onPress={() => {
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
                <Spacer />
                <View style={{}}>{selectedData}</View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        // backgroundColor:'yellow'   
    },
    innerContainer: {
        // flex: 1,
        width: wp('99%'),
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
        width: wp('13%'),
        height: hp('6%'),
        borderRadius: 50,
        marginHorizontal: wp('2%')
    },
    sender: {
        fontWeight: '500',
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
        backgroundColor: Colors.background,
        shadowColor: Colors.gray,
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 5 },
        elevation: 3,
    },
})


export default Followers