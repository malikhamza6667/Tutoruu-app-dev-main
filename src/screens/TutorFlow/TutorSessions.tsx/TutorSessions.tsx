import React from 'react'

import {View,Text,SafeAreaView,FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import Colors from '../../../../assets/Colors'
import Box from '../../../components/Box'
import Header from '../../../components/Header'
import SessionCard from '../../../components/SessionCard'
import Spacer from '../../../components/Spacer'
import { completedSessions, sessions } from '../../StudentFlow/DummyData'

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props{
    navigation:any
}

const TutorSessions:React.FC <Props>=({navigation})=>{
    return(
       <SafeAreaView className='justify-center flex-1 bg-white'>

        
           
            <View className='  justify-center flex-1'>
                <View className=' py-2' style={{height:hp('20%')}}>

            <Header headerTitle='Sessions'/>
            <Box text='Connect to your google calendar to sync your sessions with your schedule. '/>
                </View>


            <View className='px-3 ' style={{height: hp('80%')}}>
            <Text style={{fontFamily: 'PoppinsBold'}} className='text-base  px-4 py-2'>Upcoming Sessions</Text>
<View  style={{height:hp('35%')}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={sessions}
            renderItem={({item})=>{
                return(
                    <View    className="w-auto rounded-2xl py-1 px-4 m-2 "
                    style={styles.listCard}>

                       <SessionCard
                        day={item.day}
                        status={item.status}
                        title={item.title}
                        time={item.time}
                        type={item.type}
                        onPress={()=>{navigation.navigate('SessionsConfirmation',{
                            item
                        })}}
                        />
                    
                    

                    
                        </View>
                )
            }}
            keyExtractor={(item)=>{return item.id.toString()}}
            />

</View>
          
            <View className=' p-2 ' style={{height:hp('40%')}}>
            <Text style={{fontFamily: 'PoppinsBold'}} className='text-base p-2'>Past Sessions</Text>

            <FlatList
            contentContainerStyle={{paddingBottom:10}}
            showsVerticalScrollIndicator={false}
            data={completedSessions}
            renderItem={({item})=>{
                return(
                    <View   className="w-auto rounded-2xl py-1 px-4 m-2 "
                    style={styles.listCard}>

                       <SessionCard
                        day={item.day}
                        status={item.status}
                        title={item.title}
                        time={item.time}
                        type={item.type}
                        
                        />
                    
                    

                    
                        </View>
                )
            }}
            keyExtractor={(item)=>{return item.id.toString()}}
            />
            </View>
</View>
            </View>
        
      

       </SafeAreaView>

    )
}
export default TutorSessions


const styles= StyleSheet.create({

    listCard:{
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 40,
        marginVertical: 10,
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
    }
})