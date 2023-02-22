import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../assets/Colors";

interface Props {
    followers: string;
    route: string;
}

const User: React.FC<Props> = ({ followers, route }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.userNameContainer}>
            <Text style={styles.userName}>Rangar</Text>
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
                <Text style={styles.followers}>ragnarlothbrok@gmail.com</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    userNameContainer: {
        // backgroundColor: 'orange',
        width: wp('50%'),
        justifyContent: 'center'
    },
    userName: {
        fontSize: hp('3%'),
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.black,
        textTransform: 'capitalize'
    },
    followers: {
        // color: Colors.orange,
        fontWeight: '400',
        fontSize: hp('1.8%'),
        lineHeight: 21
    }
})
export default User