import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
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
        height: 33,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    btnText: {
        color: Colors.white,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 21,
        fontStyle: 'normal'
    },
});
export default Btn;