import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../assets/Colors";

interface Props {
    text: string;
    route: any;
    width: number;
    height: number;
}

const Btn: React.FC<Props> = ({ text, route, width, height }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.btnStyles, { width, height }]} onPress={() => navigation.navigate(route)} >
            <Text style={styles.btnText} >{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnStyles: {
        backgroundColor: Colors.orange,
        height: hp('4'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp('2')
    },
    btnText: {
        color: Colors.white,
        fontFamily: 'PoppinsBold',
        fontSize: hp('1.8'),
        lineHeight: 21,
    },
});
export default Btn;