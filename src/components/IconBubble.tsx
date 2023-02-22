import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

interface Props {
    icon: any;
}
const Bubble: React.FC<Props> = ({ icon }) => {
    return (
        <View style={styles.bubble}>
            <View>{icon}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        width: 44,
        height: 44,
        backgroundColor: Colors.lightorange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginRight: 10
    }
})

export default Bubble