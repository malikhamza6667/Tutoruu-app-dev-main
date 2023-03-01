import React, { useContext } from "react";

import {View,Text, SafeAreaView,Image,TouchableOpacity} from 'react-native'
import Colors from "../../../../assets/Colors";
import Header from "../../../components/Header";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import LanguageContext from "../../../languages/languageContext";
import Languages from "../../../languages";
import CardList from "../../../components/Flatlist";
import PostCard from "../../../components/PostCard";
import Divider from "../../../components/Divider";

interface Props{
    navigation: any,
    route: any
}

const messageDataClasses=[
    {
        id: 1,
        sender: 'Victoria Hanson',
        email: '@vicky23hanson',
        text: 'Lorem ipsum dolor sit amit dolor connectsur?',
        senderType: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU',
        comments: 32,
        likes: '1k',
        dislikes: 7,
        share:7,
        categories:[
            {
                id: 0,
                name: 'Auc'
            },
            {
                id: 1,
                name: 'Notes'
            }
        ],
        time: '5 mins ago'
        //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
      },
    {
        id: 2,
        sender: 'Victoria Hanson',
        email: '@vicky23hanson',
        text: 'Lorem ipsum dolor sit amit dolor connectsur?',
        senderType: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU',
        comments: 32,
        likes: '1k',
        dislikes: 7,
        share:7,
        categories:[
            {
                id: 0,
                name: 'Auc'
            },
            {
                id: 1,
                name: 'Notes'
            }
        ],
        time: '5 mins ago'
        //image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
      },
]

const StudentProfileScreen: React.FC<Props>=({navigation,route})=>{

    const{name}=route.params

    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return(

       <SafeAreaView className="flex-1 justify-center">
        
<View className="flex-1 justify-evenly bg-white">
<Header headerTitle={name} ChatIcon={true}/>
<View
        className=' py-4 px-5 flex-row'
        >
            
        <Image
        source={require('../../../../assets/dp.jpg')}
        resizeMode='contain'
        className='h-20 w-20 rounded-full'
        />
        <View className='px-3 justify-center'   >
            <View style={{backgroundColor:Colors.lightorange}} className='self-start px-3 py-1 rounded-full'>

        <Text style={{fontFamily:'PoppinsMedium',textTransform:'uppercase',color:Colors.orange}} className='text-xs'>Auc</Text>
            </View>
        <Text style={{fontFamily:'PoppinsBold'}} className='text-xl pb-2'>{name}</Text>
      <View className="flex-row justify-between">
        <View className="flex-row gap-x-2 items-start">
        <Text style={{fontFamily:'PoppinsBold',textTransform:'uppercase'}} className='text-xs'>360</Text>
        <Feather name="check-circle" size={18} color={Colors.orange} />
        </View>
        <View className="flex-row gap-x-2 items-start">
        <Text style={{fontFamily:'PoppinsBold',textTransform:'uppercase'}} className='text-xs'>2</Text>
        <FontAwesome name="thumbs-up" size={18} color={Colors.orange} />
        </View>
        <View className="flex-row gap-x-2 items-start">
        <Text style={{fontFamily:'PoppinsBold',textTransform:'uppercase'}} className='text-xs'>3</Text>
        <FontAwesome name="thumbs-down" size={18} color={Colors.orange}/>
        </View>

      </View>

        

        </View>
      </View>
    

<View className="px-5 gap-y-1 ">
    <Text style={{fontFamily:'PoppinsMedium',textTransform:'capitalize',}} className='text-base' >Bio</Text>
    <Text style={{fontFamily:'PoppinsRegular',}} className='text-sm'>Mi velit sollicitudin bibendum semper non arcu fames viverra dicyum</Text>
</View>
<Divider/>
<View  className="px-2">

<CardList title="Classes Ragnar’s taking" view={Strings.ST31} />
</View>

<View className="py-2 gap-y-2 my-2 justify-between">
            <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base px-2 mx-3 my-1 '>Recent Posts</Text>
           <PostCard data={messageDataClasses}/>
         </View>

</View>
       </SafeAreaView>
    )
}

export default StudentProfileScreen