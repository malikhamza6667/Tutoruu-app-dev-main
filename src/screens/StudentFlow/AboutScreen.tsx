import React, { useContext } from "react";
import {
    View,
   
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../../assets/Colors';
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const { width, height } = Dimensions.get('window');

interface Props {
    navigation: any;
}

const AboutScreen: React.FC<Props> = ({ navigation }) => {

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
            <Header headerTitle={Strings.ST11} />
            <View style={{ marginTop: '70%' }}>
                <Image source={require('../../../assets/logo.jpg')} style={styles.image} />
                <Paragraph paragraphText={Strings.ST10} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    paragraph: {
        color: Colors.black,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
        fontStyle: 'normal'
    },
    image: {
        height: 51,
        width: 135,
        alignSelf: 'center',
        marginBottom: 20,
    },
});
export default AboutScreen