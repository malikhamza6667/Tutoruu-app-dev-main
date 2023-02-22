import React, { useContext } from "react";
import { View, StyleSheet,  ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather"
import Colors from "../../../assets/Colors";
import Box from "../../components/Box";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Spacer from "../../components/Spacer";
import TextComponent from "../../components/Text";
import User from "../../components/UserProfile";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
import UserImage from "../../components/userImage";
import Auc from "../../components/Auc";

interface Props {
    navigation: any;
    }


const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.innerContainer} >
               
                <Header headerTitle={Strings.ST30} />
                <Spacer />
                <View style={styles.userProfileContainer}>
                    <UserImage width={80} height={80} />
                    <View style={{ flexDirection: 'column', width: '50%', marginTop: 15, marginLeft: 5 }}>
                        <Auc text="AUC" height={30} width={50} />
                        <User followers={Strings.ST32} route={'Followers'} />
                    </View>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Edit')}>
                        <Feather name="edit" size={20} color={Colors.orange} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <Box text={Strings.ST25} />
                <Spacer />
                <Heading title={Strings.ST26} />
                <TextComponent text={Strings.ST29} />
                <Spacer />
                <Divider />
                <Spacer />
                <Section title={Strings.ST27} view={Strings.ST31} />
                <Spacer />
                <Divider />
                <Spacer />
                <Section title={Strings.ST28} view={Strings.ST31} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:20
    },
    innerContainer: {
        // width: '97%'
    },
    userProfileContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: '15%',
        width: '95%',
        alignSelf: 'center',
        // alignItems:'center',
        justifyContent: 'center'
    },
    iconContainer: {
        // backgroundColor: 'green',
        width: '20%',
        // height: '100%',
        marginTop: 15,
        // alignSelf:'flex-end'
    },
    icon: {
        alignSelf: 'flex-end',
        // marginRight: 10
    }
})

export default ProfileScreen