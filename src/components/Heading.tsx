import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
    title: string;
}
const Heading: React.FC<Props> = ({ title }) => {
    return (
        <Text style={styles.title}> {title}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        marginLeft: 10
    }
})

export default Heading