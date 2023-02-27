import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
DashboardHeader
import { Entypo, FontAwesome,AntDesign,Fontisto,SimpleLineIcons,FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import DashboardHeader from '../../../components/DashboardHeader';
import Username from '../../../components/UserName';
import Box from '../../../components/Box';
import { SubjectsOffered } from '../../StudentFlow/DummyData';

import { Chip } from 'react-native-elements';
const window = Dimensions.get('window');
const { width, height } = window;



const TutorDashboard = () => {
  return (
 <SafeAreaView className='flex-1 justify-center bg-white'>
<View className='justify-evenly flex-1'>
    <View>
   <Username userType='Tutor'/>
   <View className='border border-gray-400'></View>
    </View>
    
    <View>
    <Box text='Connect to your google calendar to sync your sessions with your schedule. '/>
    </View>


    <View className='bg-red-400 flex-row' >
{
    SubjectsOffered.map((item)=>{
        return(
            <Chip
            title="Right Icon Chip"
            icon={{
              name: 'close',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconRight
            containerStyle={{ marginVertical: 15 }}
          />
        )
    })
}
    </View>
</View>
 </SafeAreaView>
  )
}

export default TutorDashboard

const styles = StyleSheet.create({
  dash_header: {
    width: width / 1.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // backgroundColor: 'pink',
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',

  },
  dash_headerView: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F2F4F5'
  },
  heading: {
    width: width / 2,
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 2,


  },
  dot: { width: 12, height: 12, backgroundColor: '#F2F4F5', borderRadius: 50, marginTop: 18 },
  text_heading: { fontSize: 30, fontWeight: '700', lineHeight: 45 },
  tutor: {
    textAlign: 'center',
    marginTop: 13,
    marginHorizontal: 20,
    color: '#000000'
  },

  text_para: {
    borderWidth:1,
    borderColor: '#F2F4F5',
    width: width/1.6,
    flexDirection: 'row',
    backgroundColor:'red',

    // backgroundColor: 'pink',
    marginHorizontal: 20,
    // backgroundColor: '#FFFFFF',

  },
  // para:{
  //   width: width / 2,
  //   // backgroundColor:'green',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginHorizontal: 2,
  // },
  text_para_heading:{
    marginHorizontal:30,
    width:width/1.5,
    lineHeight:16,
    fontWeight:'300',
  }

})