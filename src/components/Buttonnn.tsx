import React from "react";
import { TouchableOpacity, Text,Image,View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../assets/Colors";

interface Props {
    title: string
    onPress: () => void
    image?: string,
    color: string
    titleColor?: string
textSize?: number
disabled?:boolean
width?:any
height?:any
alignSelfText?:any
elevation?: any
}



const Button: React.FC<Props> = (props) => {
    let buttonColor= Colors.white
    if(props.color=='orange'){
        buttonColor=Colors.orange
    }
    //const[path,setPath]=useState('../../assets/googlelogo.png')
   let path=require('../../assets/facebooklogo.png')
    if(props.image != undefined){
        if(props.image ==='facebooklogo'){
            path=require('../../assets/facebooklogo.png')
        }
        else if(props.image ==='googlelogo'){
            path=require('../../assets/googlelogo.png')
            
        }
        else if(props.image==='arrowright'){
            path=require('../../assets/arrowright.png')

        }

    }

    return (
        

        <TouchableOpacity
        style={{backgroundColor: props.disabled? Colors.gray: props.color,elevation:props.elevation?props.elevation: 0,
            height: props.height?props.height: hp('7%'),
            width:props.width?props.width: wp('90%')}}
            className=" px-3 my-2 rounded-full justify-center"
            onPress={props.onPress}
        >
         {
props.image == undefined || null? <Text
style={{color: props.titleColor?props.titleColor:'white' ,alignSelf:'center',fontFamily:'PoppinsSemiBold',fontSize:props.textSize?props.textSize:18}}
className=" text-white">
    {props.title}
</Text> 
        :
        <View className="flex-row  items-center">
<View style={{width:wp('15%')}}>
<Image 
          
          source={path}
            resizeMode='contain'
            className='rounded-full h-7 w-7 self-start'
            />
</View>
           
           <View className= " items-center justify-center" style={{width:wp('60%')}}>

            <Text
            style={{color: props.titleColor?props.titleColor:'white',fontSize:props.textSize?props.textSize:14,fontFamily:'PoppinsBold',textAlign:'center',alignSelf:props.alignSelfText?props.alignSelfText: 'center'}}
            className="  mx-1 text-white  text-right">
                {props.title}
            </Text>
           </View>
          </View>
         }
         

                
        </TouchableOpacity>
        
    )
}
export default Button;