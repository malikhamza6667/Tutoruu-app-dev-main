import React, { useState } from "react";

import {View,Text,ImageBackground, TouchableOpacity,Image} from 'react-native'
import { Card } from "../../layouts/Card/Card";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Colors from "../../../assets/Colors";
import tw from 'twrnc';
import StarRatings from "../StarRatings/StarRatings";
import Button from "../Button/Button";
type User={
    id: number,
    name: string,
    image: string
}
type Props= {
    text: string;
    user: User;
    num_sessions: number
    classes: any
    rating: number
    rate: string
    onPress: ()=>void
}
interface ListData {
    name: string
    id: number
}

const TutorCard:React.FC<Props>=({
    text,
    user,
    rate,
    num_sessions,
    classes,
    rating,
    onPress
}) =>{
    const[showFullList,setShowFullList]=useState(false)
const[classesList,setClassesList]=useState(classes)
const size = classes.length - 2;
const label = '+' + size.toString()
const [moreLabel, setMoreLabel] = useState(label)
const showFullListData = () => {
    setShowFullList(!showFullList)
    if (showFullList === true) {

        setMoreLabel('+' + size.toString())
    }
    else {
        setMoreLabel('-' + size.toString())
    }
}
    return(
        <Card>
            <View style={tw`p-2`}>
            <View style={[tw`flex-row justify-between`]}>
            <View
              style={[tw`flex-row flex-grow-0 `,{width:wp('65%')}]}
            >
{
    showFullList ? 
    <HorizontalList
    data={classesList}
      renderItem={({ item }: { item: ListData }) => 
      <TouchableOpacity

      style={{ backgroundColor: Colors.lightorange }}
      className=' rounded-full self-center py-2 px-2    m-0.5  items-center '>
      <Text

          style={{ color: Colors.orange, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
          className='text-sm '>{item.name}</Text>
  </TouchableOpacity>
     
      }
      keyExtractor={(item: { id: { toString: () => any } }) => { return item.id.toString() }}
    />
:
<HorizontalList
data={classesList.slice(0, 2)}
renderItem={({ item }: { item: ListData }) => 
<TouchableOpacity

style={{ backgroundColor: Colors.lightorange }}
className=' rounded-full self-center py-2 px-2    m-0.5  items-center '>
<Text

    style={{ color: Colors.orange, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
    className='text-sm '>{item.name}</Text>
</TouchableOpacity>

}
keyExtractor={(item: { id: { toString: () => any } }) => { return item.id.toString() }}

/>

    
}
<TouchableOpacity
                        onPress={() => { showFullListData() }}
                        style={{ backgroundColor: Colors.lightorange, }}
                        className=' rounded-full self-center py-2 px-4    m-0.5  items-center '>
                        <Text
                            style={{ color: Colors.orange, textTransform: "capitalize", fontFamily: 'PoppinsMedium' }}
                            className='text-sm self-center '>{moreLabel}</Text>
                    </TouchableOpacity>
            </View> 
            <ImageBackground
                style={{ height: hp('11%'), width: wp('18%'), justifyContent: 'center', bottom: hp('5%'), alignSelf: 'flex-end' }}
                source={require('./../../../assets/Egp.png')}
                resizeMode='contain'
            >
                <View >
                    <Text className="self-center text-sm " style={{ fontFamily: 'PoppinsBold' }}>{rate}</Text>

                </View>

            </ImageBackground>
            </View>
            

          

         
            <View style={tw`justify-between flex-row`}>
                <View
                    style={tw`px-3 py-1 flex-row`}>
                    <Image
                        source={{uri: user.image}}
                        style={tw`rounded-full h-10 w-10 self-end`}
                       resizeMode='contain'
                    />
                    <View style={tw`justify-center`}>
                        <Text
                            style={[tw`text-base  mx-2`,{ fontFamily: 'PoppinsBold' }]}
                        >{user.name}</Text>
                        <Text
                            style={[tw`text-xs  mx-2`,{ fontFamily: 'Poppins' }]}
                            >from {num_sessions} sessions</Text>
                    </View>

                </View>
                <View style={tw`self-center`}>
<StarRatings rating={rating}/>
                </View>
            </View>


            <View style={tw` px-4 py-2 justify-center`}>
                <Text
                    style={{ fontFamily: 'PoppinsMedium' }}
                    className="text-sm  ">Bio</Text>
                <Text
                    style={{ fontFamily: 'PoppinsRegular' }}
                    className="text-xs  ">{text}</Text>
            </View>

<View>
    <Button
    shape="default"
    backgroundColor={Colors.orange}
text='View Profile'
height={hp('5%')}
width={wp('40%')}  
onPress={onPress}  
    />
</View>
           
            </View>
        
        
        </Card>

    )
}

export default TutorCard