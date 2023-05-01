import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Details from "../../layouts/Details/Details";
import SlotsCard from "../../components/SlotsCard/SlotsCard";
import Button from "../../components/Button/Button";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Colors from "../../../assets/Colors";
import Tag from "../../components/Tag/Tag";
type Props = {
    navigation?: any
}
const data = [
    {
        id: 1,
        topic: 'Exam Revisions',
        slots: 3,
        date: '2020-01-01'
    },
    {
        id: 2,
        topic: 'Assignments',
        slots: 3,
        date: '2020-01-01'
    },
    {
        id: 3,
        topic: 'Essays',
        slots: 3,
        date: '2020-01-09'

    },

]
const TimeSelectionArray=[
    {
        id: 0,
        data: 
  {     date: '2020-01-05', 
       available_times: [12, 13, 14]  } 
    },
    {
        id: 1,
       data:{date: '2020-01-04', 
       available_times: [11,8,9, 12, 13]  } 
    },
    {
        id: 2,
      data : { date: '2020-01-01', 
       available_times: [10,11,12, 13, 14]  } 
    },
]
const TimeSelection: React.FC<Props> = ({ navigation }) => {
    const [focused, setFocused] = useState(0);
    const [focusedTime, setFocusedTime] = useState(0);

    
    return (
        <Details headerTitle="Pick A Time">
            <HorizontalList
                horizontal={false}
                data={TimeSelectionArray}
                renderItem={({ item,index }) => {
                    // const background = item.id === focused ? styles.activeCard : styles.card;
                    const text = item.id === focused ? Colors.orange : Colors.black;
                    return (

                     
<TouchableOpacity
style={{backgroundColor:Colors.white}}
onPress={()=>{setFocused(index)}}
>

    <SlotsCard 
    isFocused={index==focused?true:false}
 slots={item.data}
    
    />
    {
        focused==index && <View style={[tw`items-center`]}>
            <HorizontalList
            data={item.data.available_times}
            contentContainerStyle={{paddingHorizontal:hp('2%'),paddingVertical:hp('2%')}}
            renderItem={({item,index})=>{
                return(
                    <TouchableOpacity

                    onPress={() => { setFocusedTime(index) }}
                    style={[
                        tw`rounded-3xl self-center py-3 px-5  m-0.5 mx-1 my-2 items-center`,
                        {
                        backgroundColor: index == focusedTime ? Colors.lightorange : Colors.gray,
                        width:wp('20%')


                    }]}
                    
                    >
                    <Text

                        style={[tw`text-sm`,{ color: index == focusedTime ? Colors.orange : Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }]}
                        >{item}</Text>
                </TouchableOpacity>
                )
            }}
            keyExtractor={(item,index)=>{return index.toString()}}
            
            />
        </View>
    }
</TouchableOpacity>
                       
                           
                       


                        // <TouchableOpacity
                        //     onPress={() => { setFocused(item.id) }}
                        //     key={item.id}
                        //     style={item.id === focused ? styles.activeCard : styles.card}
                        // >
                        //     {/* <Card> */}
                        //     <View
                        //     // style={[tw`justify-center items-center`, { paddingHorizontal: wp('3%'), paddingVertical: hp('2%') }]}
                        //     >
                        //         <Text style={[tw`text-sm text-center`, { color: text, fontFamily: 'PoppinsRegular',}]}>{item.slots} Slots</Text>
                        //         <Text style={[tw`text-base`, { color: text, fontFamily: 'PoppinsMedium' }]}>{item.date}</Text>
                        //     </View>
                        //     {/* </Card> */}
                        //     {/* <SlotsCard slots={[{ date: '2020-01-01', available_times: [12, 13, 14] }]}   /> */}
                        //     {/* <SlotsCard slots={[{ date: '2020-01-01', available_times: [12, 13, 14] }]}   /> */}
                        // </TouchableOpacity>
                    )
                }}
            />

            {/* <SlotsCard  slots={0} /> */}
            <View
                style={[tw` p-2 w-95 self-center`]}
            >

                <Button
                    onPress={() => { navigation.navigate('SessionConfirmation') }}
                    shape="full"
                    text="Next"

                />
            </View>
        </Details>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: wp('99%'),
        height: hp('85%'),
        alignSelf: 'center',
        paddingBottom: hp('2%')
    },
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
        // backgroundColor:'pink',
        padding: wp('4%')
    },
    activeCard: {
        backgroundColor: Colors.lightorange,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: wp('4%'),
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
    },
    topic: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    text: {
        fontSize: hp('2%'),
        fontWeight: '500',
        lineHeight: 24
    },
    view: {
        // backgroundColor: 'pink',
        width: wp('90%'),
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp('1%')
    },
    slots: {
        fontWeight: '400',
        fontSize: hp('2%'),
        lineHeight: 24
    }
})
export default TimeSelection