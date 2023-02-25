import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome";


interface Props {
    headerTitle: string;
}
const Header: React.FC<Props> = ({ headerTitle }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}
            className='gap-4 p-1'
        >

            <View>

                <TouchableOpacity

                    onPress={() => navigation.goBack()} >
                    <FontAwesome name="chevron-left" style={styles.back} />
                </TouchableOpacity>
            </View>
            <View
                className='p-3'
                style={{ flex: 0.8 }}
            >

                <Text

                    style={{ fontFamily: 'PoppinsMedium' }} className='self-center ' > {headerTitle} </Text>
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