import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

import Colors from '../../assets/Colors';


interface Props {
    text: string;
    icon: any;
}
const SettingsComponent: React.FC<Props> = ({ text, icon }) => {
    return (
        <TouchableOpacity style={styles.bg}>
            <View>{icon}</View>
            <Text> {text} </Text>
            <Entypo name="chevron-right" style={styles.chevron} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chevron: {
        fontSize: 20,
        marginLeft: '90%',
        position: 'absolute',
    },
    icon: {
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20
    },
    bg: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.background,
        width: 375,
        height: 64,
        marginTop: 5
    },
})

export default SettingsComponent