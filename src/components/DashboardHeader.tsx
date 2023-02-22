import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const window = Dimensions.get('window');
const { width, height } = window;
import { Entypo, FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props{
    navigation:any;
}
const DashboardHeader: React.FC<Props> = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View>
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Entypo style={{ width: 20 }} name='menu' size={27} color='#FE8303' />
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center' }}>Muhammad</Text>
            <View style={styles.headerIcon}>
                <TouchableOpacity style={styles.icon}>
                    <Fontisto style={{ marginLeft: 2 }} name='bell' size={22} color='#FE8303' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome style={{ marginLeft: 2 }} name='search' size={22} color='#FE8303' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DashboardHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 30,
        alignItems: 'center',
    },
    headerIcon: {
        width: width / 3.5,
        // backgroundColor:'green',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 2,

    },
    icon: {
        // alignSelf:'center',
        padding: 7,
        backgroundColor: '#FFE0BF',
        borderRadius: 50,
        // borderWidth:1,
        marginLeft: 10,
    }
})