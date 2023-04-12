import React, { useState } from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import { Card } from "../../layouts/Card/Card";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Input from "../Input/Input";


const MyPost = () => {
    const [email, setEmail] = useState('')
    return (
        <Card>
            <View
                style={[
                    tw`p-3 flex-row mx-1 items-center`
                ]}
                testID='my-post'
            >
                <View >

                    <Avatar
                        testId='my-post-avatar'
                        showCap={false}
                        size='medium'
                        image='https://img.freepik.com/free-photo/fascinating-european-female-model-casual-checkered-shirt-posing-with-pleasure-yard-autumn_197531-6933.jpg?size=626&ext=jpg&ga=GA1.1.1081558094.1677063520&semt=ais'
                    />
                </View>
                <View

                    style={[
                        tw`ml-1`,
                    ]}
                >

                    <Input
                        size='medium'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder='Doe'
                        height={hp('5')}
                        testID="my-post-input"
                    />
                </View>
                <View
                    style={[
                        tw`p-2`
                    ]}
                >

                    <Button
                        onPress={() => console.log('actionlink clicked')}
                        icon={'AntDesign arrowright 18 white'}
                        shape='round'
                        // text='Create Account'
                        width={wp('8%')}
                        height={hp('4%')}
                        testID='my-post-button'
                    />
                </View>
            </View>

        </Card>
    )
}

export default MyPost