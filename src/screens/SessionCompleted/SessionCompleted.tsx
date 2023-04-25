import React, { useState } from "react";

import {View,Text,TouchableOpacity,Modal,StyleSheet, ScrollView} from 'react-native'
import Details from "../../layouts/Details/Details";
import { SessionInfo } from "../DummyData";
import Colors from "../../../assets/Colors";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import Section from "../../layouts/Section/Section";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'
import { Card } from "../../layouts/Card/Card";

import tw from 'twrnc';
import Button from "../../components/Button/Button";
import ChatPreview from "../../components/ChatPreview/ChatPreview";
import Avatar from "../../components/Avatar/Avatar";
import StarRatings from "../../components/StarRatings/StarRatings";
import ClassCard from "../../components/ClassCard/ClassCard";
import Review from "../../components/Review/Review";
import { Popup } from "../../components/Popup/Popup";

const SessionCompleted:React.FC=()=>{
    const[modalVisible,setModalVisible]=useState(false)
    return(
       <Details headerTitle="Session Confirmation">
           {
            modalVisible && <Popup opened={modalVisible} closeModal={()=>{setModalVisible(!modalVisible)}}>
  <View style={styles.modalView}>
                  <Text style={{fontFamily:'PoppinsBold'}}
                  className='text-center'
                  >Are you sure you want to cancel this session?</Text>
                  <Text style={{fontFamily:'PoppinsRegular'}}
                  className='text-center'
                  >You Can Always Book An Other Session With Youseff Haroon</Text>
                  <View style={[tw`px-4 py-2`]}>

                  <Button
                  shape="full"
                  text="Cancel"
                  backgroundColor={Colors.red}
                  onPress={() => setModalVisible(!modalVisible)}
                  />
               
                  </View>
                  </View>
            </Popup>
        }
        <View style={[tw`my-1 bg-red-400`]}>
            <Section title="Session Info">
                <View style={[tw`px-3`]}>

            <HorizontalList
                data={SessionInfo}
                renderItem={({ item }) => {
                    return (
                        <Card>

                        <View style={[tw`px-4 py-6`]}>
                        <View
                        style={{
                            backgroundColor: Colors.lightorange,
                            borderRadius: 5,
                            marginTop: hp('1'),
                            alignSelf:'flex-start'
                        }}
                    >

                        <Text
                           
                            style={[tw`p-0.5 px-2`, {
                                color: Colors.orange,
                                textTransform: 'uppercase',
                                fontFamily: 'PoppinsMedium',

                            }]}>Completed</Text>
                    </View>
                            <View className='flex-row justify-between'>
                           
                                <View className='flex-row'>
                          
                                    <Text style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Timing:</Text>
                                    <Text className='mx-1' style={{ fontFamily: 'PoppinsBold' }}>{item.Timing}</Text>
                                </View>

                               
                            </View>


                            <View className='flex-row'>
                                <Text
                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                >Location:</Text>
                                <Text
                                    className='mx-1'
                                    style={{ fontFamily: 'PoppinsBold', color: Colors.orange }}
                                >{item.Location}</Text>
                            </View>
                            <View className='flex-row'>
                                <Text
                                    style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}
                                >Topic:</Text>
                                <Text
                                    className='mx-1'
                                    style={{ fontFamily: 'PoppinsBold' }}
                                >{item.Topic}</Text>
                            </View>

                        </View>
                        </Card>
                    )
                }}

                keyExtractor={(item, index) => { return item.id.toString() }}
            />
                </View>
            </Section>
        </View>
        <View style={[tw`my-1`]}>
            <Section title="Payment">
            <View className='px-6 pr-7 flex-row justify-between items-center'>
        

                  
        <Text
            className='text-base'
            style={{ fontFamily: 'PoppinsMedium' }}>170 EGP</Text>
           
      
    

</View>
            </Section>
        </View>
<ScrollView>

        <View style={[tw`my-1`]}>
            <Section title="Rating">
            <Review text='Explains very well and helped me a lot' 
      author_name='John Doe'
      author_image='https://i.pravatar.cc/300'
        class_name='Calculas 1' date='01/01/2023' rating={5} /> 
            </Section>
        </View>

        <View style={[tw`my-1`]}>
            <Section title="Tutor">
<Card>
<View style={[tw`p-2 py-4 flex-row justify-between`]}>
                
                   
                    
                    <Avatar
                    size="medium"
                    showCap={false}
                    image="https://i.pravatar.cc/300"
                    
                    />
                    <View >

                        <Text
                            style={{ fontFamily: 'PoppinsBold' }}
                            className='text-base'
                        >Youseff Haroon</Text>
                        <View style={[tw`self-center  pr-7`]}>

                        <StarRatings numStars={5} rating={4} isDisable/>
                        </View>
                    </View>
                   
<View style={tw`justify-center`}>

              <Button
              shape="default"
              onPress={()=>{alert('Pressed')}}
              text='View Profile'
              />
</View>
                
            </View>
</Card>
            </Section>
        </View>
        <View style={[tw`my-1`]}>
            <Section title="Class">
<ClassCard
desc="CSCE 1520"
name="Introduction to Computer Science"
/>
            </Section>
        </View>
        <View style={[tw`my-1`]}>
            <Section title="Chat">
<ChatPreview



            last_message={'Got It Thanks:)'}
            last_message_date={'20-10-2022'}
            unread_count={3}
            user={ { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }}
            
            
/>
            </Section>
        </View>
        <View style={[tw`my-1`]}>
        <TouchableOpacity
            onPress={()=>{setModalVisible(!modalVisible)}}
                className='p-1 justify-center items-center'
            >
                <Text
                    style={{ color: Colors.red, fontFamily: 'PoppinsBold' }}
                >Cancel</Text>
            </TouchableOpacity>
        </View>
</ScrollView>
       </Details>
    )
}

export default SessionCompleted



const styles = StyleSheet.create({
    centeredView: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      
    },
    modalView: {
   
      backgroundColor: 'white',
  
      paddingHorizontal: 35,
      paddingVertical: 5,
      alignItems: 'center',
     
    },
   
    modalViewParent:{ 
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,   
    }
  });