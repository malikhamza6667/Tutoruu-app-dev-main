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
              
        
            }}
        className='justify-between px-1 mt-2 pr-2 pt-3  '
        >

            <View 
            // className=' p-1'
            >

                <TouchableOpacity
style={{width: wp('25%'),height: hp('5%')}}
className=' justify-center'
                    onPress={() => navigation.goBack()} >
                    <FontAwesome name="chevron-left" style={styles.back} />
                </TouchableOpacity>
            </View>
            <View
                className='pb-3   '
                style={{
                   // alignItems:'center',
justifyContent:'center',
                    
                    width:wp('50%')
                }}

            >

                <Text

                    style={{ fontFamily: 'PoppinsMedium' , textAlign:'center'}} > {headerTitle} </Text>
            </View>
            <View
            className='mb-2'
            style={{width: wp('25%'),height: hp('5%')}}
            >

            <View
                 className='flex-1 items-center'
             
            >
                {
                    ChatIcon &&
                    <TouchableOpacity
                        style={{ backgroundColor: Colors.lightorange }}
                        className='p-2 rounded-full'
                        onPress={() => { navigation.goBack() }}
                    >

                        <Ionicons name="chatbubbles" size={24} color={Colors.orange} />
                    </TouchableOpacity>

                }


            </View>
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