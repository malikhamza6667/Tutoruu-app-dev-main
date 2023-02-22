import React from "react";
import { View, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface Props {
    width: number;
    height: number;
}
const UserImage: React.FC<Props> = ({ width, height }) => {
    return (
        <View style={[styles.imageContainer,{width,height}]}>
            <Image
                source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png' }}
                style={[styles.image, { width, height }]}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: 'yellow',
        // width: '25%',
        // height: '100%',
        // justifyContent: 'center',
        // borderRadius: 40,
        // marginTop:hp('2'),
        marginRight:wp('3')
        
    },
    image: {
        // width: 80,
        // height: 80,
        borderRadius: 40,
        // marginLeft: 10,
        marginRight: wp('2'),
        // padding:3,
        backgroundColor:'red'
    },
})
export default UserImage