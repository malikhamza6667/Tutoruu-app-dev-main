import React, { useState } from 'react'

import {View,Text, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../../assets/Colors'
import Header from '../../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from '../../../components/Buttonnn'

interface Props{
    navigation: any,
    route: any
}

const TutorApplicationConfirmation:React.FC<Props>=({navigation,route})=>{
    const {userName}=route.params
    const[buttonEnable,setButtonEnable]=useState(false)
    const[isOn,setIsOn]=useState(false)
    return(
<View className='flex-1 justify-evenly bg-white'>
    <SafeAreaView />
    <View className='top-3'>
   <Header headerTitle='Application Status'/>
    </View>
    <View className='flex-1 justify-evenly'>

   <View className='px-5 '>
    <View className='flex-row gap-1'>

                <Text style={{fontFamily:'PoppinsBold',textTransform:'capitalize'}} className='text-3xl' >Hey</Text>
                <Text style={{fontFamily:'PoppinsBold',textTransform:'capitalize',color:Colors.orange}} className='text-3xl' >{userName}</Text>
                <Text style={{fontFamily:'PoppinsBold',textTransform:'capitalize'}} className='text-3xl'>!</Text>
    </View>

                <Text  style={{fontFamily:'PoppinsBold',textTransform:'capitalize'}} className='text-3xl'>Welcome to the Tutoruu family </Text>

   </View>
   <View className='px-5 '>
    <Text style={{fontFamily:'PoppinsRegular'}} className='text-sm'>
    Before you begin your application, you’ll need to make sure you have read through our code of conduct below. Standardizing the quality of student-led tutoring sessions is foundational to the supportive, trustworthy community that we are building, and that you are part of! 
    </Text>
   </View>

   <View  className='px-5 gap-2'>
    <Text style={{fontFamily:'PoppinsBold',textTransform:'capitalize'}} className='text-base px-3'>Code Of Conduct</Text>

<View style={{height: hp('30%'),backgroundColor:'#FCF6EB'}} className='p-5  rounded-3xl'>

    <ScrollView>
        <Text style={{fontFamily:'Poppins'}} className='text-xs'>
        Lorem ipsum dolor sit amet consectetur. Adipiscing diam morbi erat rutrum interdum hendrerit turpis. Dolor ut auctor proin auctor vitae porttitor. Pellentesque gravida integer consectetur non id nunc sed enim. Malesuada amet rhoncus et donec imperdiet. Eget pellentesque augue vel felis. Semper quis vestibulum et lorem bibendum. Quisque proin ligula rutrum eget. Vulputate libero at sem odio blandit donec massa auctor cursus. Bibendum commodo laoreet a mollis eget. Cras ut dui sed nunc maecenas. Sollicitudin nisl eu tristique non eu arcu in blandit pharetra. Tellus faucibus vel sed ut mattis id feugiat.
In luctus vitae elit sit sollicitudin sed nibh. Pulvinar nunc massa quis molestie eget facilisis id. Iaculis sapien purus dui dis eleifend nunc elementum pharetra. Facilisis aliquet ullamcorper ac massa sapien ut enim. Tempus ac porta senectus nibh fermentum. Id blandit in auctor rutrum viverra odio sit. Lorem orci mauris augue purus adipiscing nibh purus ultrices. Dui ultrices pretium etiam feugiat habitant placerat. Facilisis enim amet sodales nisl tortor cras aliquet massa. Gravida fames egestas eget ipsum ultrices condimentum.
Eget a et auctor donec nunc semper est id vivamus. Tempor imperdiet elementum magnis aliquet nisl aliquet semper aenean erat. Nibh nisl velit in quisque netus. Amet ultrices volutpat purus pellentesque. Eu volutpat accumsan orci imperdiet. Orci viverra viverra nibh scelerisque eget diam pretium nunc. Luctus nisl mattis in morbi nisi rutrum eu euismod. Feugiat netus eget rhoncus in faucibus mi donec. Condimentum amet sed neque lorem ut praesent. Orci augue faucibus iaculis lorem. Volutpat suspendisse varius diam tellus. Facilisi et placerat iaculis nisl suspendisse montes. Massa quisque in sapien ut.
        </Text>
    </ScrollView>
</View>
   
   
   </View>

<View className='px-5  '>
    <View className='flex-row  gap-2'>
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
               
{!isOn && <Text style={{textAlign:'justify',width:wp('70%')}} >

<Text style={{fontFamily:'PoppinsRegular',textAlign:'center'}}>I have </Text>
<Text style={{fontFamily:'PoppinsRegular',color:Colors.red}}>not </Text>
<Text style={{fontFamily:'PoppinsRegular'}}>read & </Text>
<Text style={{fontFamily:'PoppinsRegular',color:Colors.red}}>donot </Text>


<Text style={{fontFamily:'PoppinsRegular',textAlign:'justify'}}>agree to the code of conduct</Text>
</Text>}

{isOn && <Text style={{textAlign:'justify',width:wp('70%')}} >

<Text style={{fontFamily:'PoppinsRegular',textAlign:'center'}}>I have </Text>

<Text style={{fontFamily:'PoppinsRegular'}}>read & </Text>



<Text style={{fontFamily:'PoppinsRegular',textAlign:'justify'}}>agree to the code of conduct</Text>
</Text>  } 


    </View>
    <Button
title='Start Tutor Application '
color={Colors.orange}
onPress={()=>{
    if(isOn){
        navigation.navigate('ApplicationStatus')
    }
    else{
        alert('Disabled')
    }
   }}
disabled={!isOn}

/>
</View>
    </View>
   
   </View>
    )
}
export default TutorApplicationConfirmation