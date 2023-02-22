import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


interface Props {
    headerTitle: string;
}
const Header: React.FC<Props> = ({ headerTitle }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row',alignItems:'center' }}
        className='gap-5 p-2'
        >
             
                <View>

            <TouchableOpacity 
           
            onPress={() => navigation.goBack()} >
                <FontAwesome name="chevron-left"  style={styles.back} />
            </TouchableOpacity>
                </View>
                <View className='p-5' style={{flex:0.8}}>

            <Text 
            
            style={{fontFamily:'PoppinsRegular'}} className='self-center ' > {headerTitle} </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        fontSize: 24,
        marginVertical:5,
        marginLeft: 22,
        top:12
    },
    header: {
        alignSelf: 'center',
        marginLeft: '33%'
    },
})

export default Header