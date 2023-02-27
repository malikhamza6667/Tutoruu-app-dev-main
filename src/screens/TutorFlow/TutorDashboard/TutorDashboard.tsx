import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity ,FlatList,useWindowDimensions,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'

import { Entypo, FontAwesome,AntDesign,Fontisto,SimpleLineIcons,FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import DashboardHeader from '../../../components/DashboardHeader';
import Username from '../../../components/UserName';
import Box from '../../../components/Box';
import { SubjectsOffered } from '../../StudentFlow/DummyData';

import { Chip } from 'react-native-elements';
import Colors from '../../../../assets/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


import Input from '../../../components/TextInput';






const TutorDashboard = () => {
    const windowWidth = useWindowDimensions().width;
    const[rate,setRate]=useState('175')
    const[isOn,setIsOn]=useState(true)
    const[numColumns,setNumColumns]=useState(2)
    const[columns,setColumns]=useState(2)
    const[loading,setLoading]=useState(false)
    const[key,setKey]=useState('')
    const handleLayout = () => {
        const columnWidth =10;
        const maxNumColumns = Math.floor(windowWidth / columnWidth);
        console.log(maxNumColumns)
        setNumColumns(maxNumColumns);
   
      };
      useEffect(() => {
        setColumns(numColumns);
        setKey(key => (key === '1' ? '2' : '1'));
      }, [windowWidth]);
const renderItem=({item})=>{
    
    return(
        <Chip
        key={item.id}
        title={item.name}
        icon={{
          name: 'delete-outline',
          type: 'MaterialCommunityIcons',
          size: 20,
          color: Colors.red,
        }}
        iconRight
        
        buttonStyle={{backgroundColor:'#F2F4F5'}}
        titleStyle={{color:Colors.black,fontFamily:'PoppinsMedium',textTransform:'uppercase'}}
        containerStyle={{ marginVertical: 15,marginHorizontal:4, height: hp('5%') }}
        
         onPress={()=>{
            
            setLoading(true)
            SubjectsOffered.filter((obj)=>{return obj.id !== item.id})
        setLoading(false)
        }}
            
      />  
    )
    }

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
   


    <View className='self-center p-7 ' style={{width:wp('90%'),
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 15,
  backgroundColor: Colors.white,
}} >
    <Text style={{fontFamily: 'PoppinsBold'}} className='text-base'>Tutor Profile</Text>
  <View className=' justify-between  ' onLayout={handleLayout} >
 
{ !loading && <FlatList
data={SubjectsOffered}
showsHorizontalScrollIndicator={false}
contentContainerStyle={{padding:10}}
horizontal
renderItem={renderItem}
key={key}
keyExtractor={(item)=>{return item.id.toString()}}
/>}
    </View>      

<View className='flex-row  justify-center gap-x-20 items-center'>
  
    <View style={{width:wp('40%')}}>
    <Input
    value={rate}
onChangeText={(text)=>{setRate(text)}}
title='Rate'
    />
 </View>
 <View className='gap-2'>
<Text style={{fontFamily: 'PoppinsMedium'}}>{isOn? 'In Person': 'Online'}</Text>
    <TouchableOpacity
onPress={() => setIsOn(!isOn)}
// style={{ marginRight: wp('3%') }}
>
{isOn ?
    (<FontAwesome name="toggle-on" size={hp('4%')} color={Colors.orange} />)
    :
    (<FontAwesome name="toggle-off" size={hp('4%')} color={Colors.orange} />)
}
</TouchableOpacity>
 </View>
    </View>   
 <TouchableOpacity className='self-center   flex-row gap-x-2 mt-3  p-3'>
    <Text style={{fontFamily: 'PoppinsBold',color:Colors.orange}} className=''>Schedule</Text>
    <AntDesign name="gift" size={20} color={Colors.orange} />
 </TouchableOpacity>
    </View>


<View className='self-center p-7 ' style={{width:wp('90%'),
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 15,
  backgroundColor: Colors.white,
}}>
<Text style={{fontFamily: 'PoppinsBold'}} className='text-base'>Tutor Academy</Text>
    <View>
        <Text>
        Episode 1 - Starting out with Tutoruu Academy
        </Text>
        <Text>
        This lesson is an introduction to our Tutoruu Academy series where you will learn essential lessons to succeed in your Tutoring Journey.
        </Text>


    </View>
</View>
  
   
  
    




</View>
 </SafeAreaView>
  )
}

export default TutorDashboard

// const styles = StyleSheet.create({
//   dash_header: {
//     width: width / 1.3,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignContent: 'center',
//     // backgroundColor: 'pink',
//     marginHorizontal: 10,
//     backgroundColor: '#FFFFFF',

//   },
//   dash_headerView: {
//     paddingBottom: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: '#F2F4F5'
//   },
//   heading: {
//     width: width / 2,
//     // backgroundColor:'green',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginHorizontal: 2,


//   },
//   dot: { width: 12, height: 12, backgroundColor: '#F2F4F5', borderRadius: 50, marginTop: 18 },
//   text_heading: { fontSize: 30, fontWeight: '700', lineHeight: 45 },
//   tutor: {
//     textAlign: 'center',
//     marginTop: 13,
//     marginHorizontal: 20,
//     color: '#000000'
//   },

//   text_para: {
//     borderWidth:1,
//     borderColor: '#F2F4F5',
//     width: width/1.6,
//     flexDirection: 'row',
//     backgroundColor:'red',

//     // backgroundColor: 'pink',
//     marginHorizontal: 20,
//     // backgroundColor: '#FFFFFF',

//   },
//   // para:{
//   //   width: width / 2,
//   //   // backgroundColor:'green',
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-around',
//   //   marginHorizontal: 2,
//   // },
//   text_para_heading:{
//     marginHorizontal:30,
//     width:width/1.5,
//     lineHeight:16,
//     fontWeight:'300',
//   }

// })