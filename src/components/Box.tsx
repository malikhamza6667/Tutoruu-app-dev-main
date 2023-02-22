import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import Colors from "../../assets/Colors";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
    text: string;
}

const Box: React.FC<Props> = ({ text }) => {
    return (
        <View style={styles.box}>
            <View style={{ width: '20%', height: '100%', alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                <Feather name="gift" size={20} color={Colors.fadedgray} />
            </View>
            <View style={{ width: '60%', height: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <TouchableOpacity style={{ width: '20%', height: '100%', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="arrowright" size={20} color={Colors.orange} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '95%',
        height: 64,
        borderRadius: 4,
        backgroundColor: Colors.background,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 15,
        opacity: 0.5,
    }
})

export default Box