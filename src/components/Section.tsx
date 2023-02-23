import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from "react-native-vector-icons/AntDesign"
import Heading from "./Heading";
import Bubble from "./IconBubble";
import Colors from "../../assets/Colors";
import Spacer from "./Spacer";

interface MessageData {
    id: number;
    subject: string;
    title: string;
}
const messageData: MessageData[] = [
    {
        id: 1,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
    {
        id: 2,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
    {
        id: 3,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
]

interface Props {
    title: string;
    view: string;
}
const Section: React.FC<Props> = ({ title, view }) => {
    const renderItem = ({ item }: { item: MessageData }) => {
        return (

            <View style={styles.card}>
                <View style={{ width: '70%', height: '100%', alignSelf: 'flex-start' }}>
                    <Text style={styles.subject}> {item.subject} </Text>
                    <Text style={styles.cardText}> {item.title} </Text>
                </View>
                <TouchableOpacity style={{ width: '20%', height: '100%', alignSelf: 'flex-end', justifyContent: "center" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.view2} >{view}</Text>
                        <AntDesign name="arrowright" size={20} color={Colors.orange} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Heading title={title} />
                <TouchableOpacity>
                    <Bubble icon={<FontAwesome name="plus" size={25} color={Colors.orange} />} />
                </TouchableOpacity>
            </View>
            <Spacer />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={messageData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()} />
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 40,
    },
    card: {
         shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 5 },
        elevation: 2,
        height: 112,
        width: 304,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row'
    },
    cardText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.black,
        alignSelf: 'stretch'
    },
    subject: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: Colors.orange,
        alignSelf: 'flex-start',
    },
    view: {

        width: '15%',
        backgroundColor: 'green',
        height: '100%',
        alignSelf: 'flex-end'

    },
    view2: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.orange,
        marginRight: 10
    }
})

export default Section