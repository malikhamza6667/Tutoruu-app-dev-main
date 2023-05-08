import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";
import Input from "../../components/Input/Input";
import Section from "../../layouts/Section/Section";
import Spacer from "../../components/Spacer/Spacer";
import Button from "../../components/Button/Button";
import bridge from "../../Services/BaseURL/Baseurl";
type Props = {
    navigation: any
}
const TestingScreen: React.FC<Props> = ({ navigation }) => {

    // const registerUser=()=>{
    //     const REGISTER_MUTATION = `
    //     mutation Register($input: UserRegistrationInput!) {
    //       register(input: $input) {
    //         id
    //         email
    //         name
    // university_id
    //         username
    //         mobile_number
    //       }
    //     }
    //   `;


    //   bridge.register(REGISTER_MUTATION, {
    //     email: 'john@example.com',
    //     password: 'password',
    //     password_confirmation: 'password',
    //     name: 'John Doe',
    //     username: 'johndoe',
    //     university_id: 1,
    //     mobile_number: '555-555-5555'
    //   } )
    //     .then((result) => {

    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    // }
    const registerUser = () => {

        const REGISTER_MUTATION = `
        mutation RegisterUser($input: UserRegistrationInput!) {
          register(input: $input) {
            email
            university_id
            password
            password_confirmation
            name
            username
            mobile_number
          }
        }
      `;

const input = {
    email: "Doe123@mail.com",
    university_id: 1,
    password: "1hb2345678",
    password_confirmation: "1hb2345678",
    name: "Doe",
    username: "Doe",
    mobile_number: "03123456789",
  };
  
 bridge.register(REGISTER_MUTATION,input).then((res)=>{
    console.log("Result Is  ",res)
 }).catch((err)=>{
    console.log("Error Is ",err)
 })



    }
const logUser=()=>{
    const r = `
    mutation RegisterMutation($email: String!,$password: String!) {
        login(email: $email,password:$password) {
       token
      }
    }
  `;
  
  bridge
    .login(`token`,  "tutoruutest@gail.com","P@ssw0rd" ) 
    .then((result) => {
      console.log("result is   ", result);
    }).catch((err)=>{
        console.log('error is ',err)
    })
  
}
    return (

        <Details headerTitle="TestingScreen" >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={{ paddingBottom: hp('10') }} showsVerticalScrollIndicator={false}>
                    <View
                        style={[tw` flex-0.9  self-center`, { width: wp('95%'), alignItems: 'center' }]}
                    >
                        <Text style={[tw``, { fontFamily: 'PoppinsRegular' }]}>
                            The Tutoruu Fam prioritizes YOUR wellbeing, first and foremost. Let us know how we can help at anytime, We love to chat!{"\n"}{"\n"}

                            Send us a message on Messenger by clicking the button below</Text>
                        <View style={[tw``, { marginTop: hp('20') }]} >


                            <Button
                                onPress={() => { logUser() }}
                                shape="default"
                                text="Register User"
                            />

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Details >
    )
}
export default TestingScreen