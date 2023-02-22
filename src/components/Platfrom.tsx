import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../assets/Colors";
import Btn from "./Button";

import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
const Platfrom: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;

    const [focused, setFocused] = useState(false);

    return (
        <View >

            <TouchableOpacity onPress={() => setFocused(!focused)} style={[styles.card, { width: 318, height: 69 }]}>

                <Text>Zoom</Text>

            </TouchableOpacity>


            <Text style={styles.text}>Or</Text>
            <TouchableOpacity>
                <View style={[styles.card, { width: 318, height: 69 }]}>
                    <Text>In Person</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: '98%' }}>
                <Btn text={Strings.ST60} width={330} height={48} route={''} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
        margin: 20,
    },
    text: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Platfrom