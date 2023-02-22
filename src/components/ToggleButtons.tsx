import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from "../../assets/Colors";


const size = 20;
const color = Colors.orange
const AUC: React.FC = () => {
    return (
        <Text>Category 1 </Text>
    )
}
const Category1: React.FC = () => {
    return (
        <Text>Category 2 </Text>
    )
}
const Category2: React.FC = () => {
    return (
        <Text>Category 3</Text>
    )
}
const Category3: React.FC = () => {
    return (
        <Text>Category 4 </Text>
    )
}
const ToggleButtons: React.FC = () => {
    const [selectedData, setSelectedData] = useState(AUC);
    const [isScrolledRight, setIsScrolledRight] = useState(false);
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    const [focused5, setFocused5] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    // const scrollViewRef = useRef(null);

    const handleRightChevronPress = () => {
        if (scrollPosition >= wp('60%')) {
            scrollViewRef.current?.scrollTo({ x: 0, animated: true });
            setScrollPosition(0);
        } else {
            scrollViewRef.current?.scrollTo({ x: wp('60%'), animated: true });
            setScrollPosition(wp('60%'));
        }
    };

    const handleLeftChevronPress = () => {
        if (scrollPosition <= 0) {
            scrollViewRef.current?.scrollTo({ x: wp('60%'), animated: true });
            setScrollPosition(wp('60%'));
        } else {
            scrollViewRef.current?.scrollTo({ x: 0, animated: true });
            setScrollPosition(0);
        }
    };

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    // backgroundColor: 'pink',
                    backgroundColor: Colors.white,
                    width: wp('100%'),
                    padding: hp('1')
                }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    onScroll={(event) =>
                        setScrollPosition(event.nativeEvent.contentOffset.x)
                    }
                >
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused1 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(AUC);
                        setFocused1(true);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(false);
                    }}>
                        <Text style={[styles.text, { color: focused1 ? Colors.orange : Colors.black }]} >AUC </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused2 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category1);
                        setFocused1(false);
                        setFocused2(true);
                        setFocused3(false);
                        setFocused4(false);
                    }}>
                        <Text style={[styles.text, { color: focused2 ? Colors.orange : Colors.black }]}>General </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused3 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category2);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(true);
                        setFocused4(false);
                    }}>
                        <Text style={[styles.text, { color: focused3 ? Colors.orange : Colors.black }]}>Questions </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused4 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category3);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(true);
                        setFocused5(false);
                    }}>
                        <Text style={[styles.text, { color: focused4 ? Colors.orange : Colors.black }]}>Tips & Tricks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: focused5 ? Colors.lightorange : Colors.background }]} onPress={() => {
                        setSelectedData(Category3);
                        setFocused1(false);
                        setFocused2(false);
                        setFocused3(false);
                        setFocused4(false);
                        setFocused5(true);
                    }}>
                        <Text style={[styles.text, { color: focused5 ? Colors.orange : Colors.black }]}>Tips & Tricks</Text>
                    </TouchableOpacity>



                </ScrollView>
                <TouchableOpacity style={styles.left} onPress={handleLeftChevronPress}>
                    {scrollPosition <= 0 ? (
                        <FontAwesome name="chevron-right" size={size} color={color} />
                    ) : (
                        <FontAwesome name="chevron-left" size={size} color={color} />
                    )}
                </TouchableOpacity>
            </View>
            {/* <Text>{selectedData}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        padding: hp('0.7'),
        margin: hp('0.5'),
        borderRadius: hp('1.5'),
        // height:30,
        // width:69
    },
    right: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        marginLeft: wp('87%'),
        position: 'absolute',
        alignSelf: 'center'
    },
    Right: {
        marginRight: wp('5%')
    },
    left: {
        // marginLeft: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        marginLeft: wp('87%'),
        position: 'absolute',
        alignSelf: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18
    }
})
export default ToggleButtons