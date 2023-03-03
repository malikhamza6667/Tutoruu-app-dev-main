import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/Colors';
interface Props {
    headerTitle: string;
    ChatIcon?: boolean
}
const Header: React.FC<Props> = ({ headerTitle, ChatIcon }) => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: wp('100%'),
                // backgroundColor:'pink'
            }}
        // className='justify-between px-2 py-1'
        >

            <View 
            // className=' p-1'
            >

                <TouchableOpacity

                    onPress={() => navigation.goBack()} >
                    <FontAwesome name="chevron-left" style={styles.back} />
                </TouchableOpacity>
            </View>
            <View
                className='p-3 '
                style={{
                    alignItems:'center',
                    // backgroundColor:'red',
                    width:wp('80%')
                }}

            >

                <Text

                    style={{ fontFamily: 'PoppinsMedium' , textAlign:'center'}} > {headerTitle} </Text>
            </View>
            <View
                // className='p-3 '
            >
                {
                    ChatIcon &&
                    <TouchableOpacity
                        style={{ backgroundColor: Colors.lightorange }}
                        className='p-3 mb-5 rounded-full'
                        onPress={() => { navigation.goBack() }}
                    >

                        <Ionicons name="chatbubbles" size={24} color={Colors.orange} />
                    </TouchableOpacity>

                }


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        fontSize: 24,
        // marginVertical: hp('2'),
        marginLeft: hp('3'),
        top: hp('0.2')
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
})

export default Header