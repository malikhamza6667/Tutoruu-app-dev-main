import { View, Text, StyleSheet,TouchableOpacity,SafeAreaView ,FlatList,useWindowDimensions,ScrollView } from 'react-native'
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
import Button from '../../../components/Buttonnn';
import Divider from '../../../components/Divider';






interface Props{
  navigation: any
}

const TutorDashboard:React.FC<Props> = ({navigation}) => {
    const windowWidth = useWindowDimensions().width;
    const[rate,setRate]=useState('175')
    const[isOn,setIsOn]=useState(true)
    const[numColumns,setNumColumns]=useState(2)
    const[columns,setColumns]=useState(2)
    const[loading,setLoading]=useState(false)
    const[key,setKey]=useState('')
    const size = SubjectsOffered.length - 2;
    const label = '+' + size.toString()


    const [fullList, setFullList] = useState(false)
    const [moreLabel, setMoreLabel] = useState(label)
    const showFullListData = () => {
      setFullList(!fullList)
      if (fullList === true) {

          setMoreLabel('+' + size.toString())
      }
      else {
          setMoreLabel('-' + size.toString())
      }
  }

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
const renderItem=({ item }: { item: {id:number,name:string} })=>{
    
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
  
<View className='flex-1 justify-evenly' >
  <View>
<Username userType='Tutor'/>
<Divider/>
  </View>
  <View style={{top:hp('2%')}} className=' py-3'>

<Box text='Connect to your google calendar to sync your sessions with your schedule. '/>
  </View>
<View className='self-center py-3'>
<TouchableOpacity 
       style={{backgroundColor:Colors.orange}}
       className='gap-x-1 my-3 flex-row items-center self-center px-6 py-2.5 rounded-full'>
      
        <Text style={{fontFamily:'PoppinsBold',color:Colors.white}} >Update Schedule</Text>
       </TouchableOpacity>

</View>


<View className='px-5 my-2'>
<Text style={{fontFamily: 'PoppinsBold'}} className='text-base p-3'>Tutoruu Academy</Text>
    <View 
    className='p-5 px-10 m-1 self-center justify-evenly rounded-3xl ' style={{width:wp('95%'),
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    backgroundColor: Colors.white,
  }}
    >
        <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base'>
        Episode 1 - Starting out with Tutoruu Academy
        </Text>
        <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm'>
        This lesson is an introduction to our Tutoruu Academy series where you will learn essential lessons to succeed in your Tutoring Journey.
        </Text>
       <TouchableOpacity 
       style={{backgroundColor:Colors.orange}}
       className='gap-x-2  mt-3 flex-row items-center justify-center self-center px-4 py-2 rounded-full'>
      
       <Entypo name="video-camera" size={22} color={Colors.white}/>
        <Text style={{fontFamily:'PoppinsBold',color:Colors.white}} >Watch</Text>
       </TouchableOpacity>


    </View>
</View>
<View className='px-5 my-2'>
<Text style={{fontFamily: 'PoppinsBold'}} className='text-base p-3'>Upcoming Sessions</Text>
    <View 
    className='p-5 px-10 m-1 self-center justify-evenly rounded-3xl ' style={{width:wp('95%'),
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    backgroundColor: Colors.white,
  }}
    >
        <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base'>
        No upcoming sessions
        </Text>
        <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm'>
        Want to get more sessions? Watch Tutoruu academy videos to get the know-how.
        </Text>


    </View>
<TouchableOpacity className='self-center m-5'
onPress={()=>{navigation.navigate('TutorSessions')}}
>
  <Text
  style={{fontFamily: 'PoppinsBold',color:Colors.orange}}
  >View All Sessions</Text>
</TouchableOpacity>
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


{/* <SafeAreaView className='flex-1 justify-evenly '>
   
<View className='bg-green-400'>
   <Username userType='Tutor'/>
   <View className='border border-gray-400'></View>
    </View>

    <View className='bg-yellow-300 '>
    <Box text='Connect to your google calendar to sync your sessions with your schedule. '/>
    </View>
   <ScrollView contentContainerStyle={{paddingBottom:20}}>

  </View>   


  
   </ScrollView>
</SafeAreaView> */}