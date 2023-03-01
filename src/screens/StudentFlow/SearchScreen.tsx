import React, { useContext } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";


import Colors from "../../../assets/Colors";
import Bar from "../../components/Bar";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import CardList from "../../components/Flatlist";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
import HeaderCatagories from "../../components/HeaderCatagories";
import { SearchCatagories, TutorSubjects } from "./DummyData";
import TutorCard from "../../components/TutorCard";
import PostCard from "../../components/PostCard";


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
]

const SearchScreen: React.FC = () => {
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
    return (
       <SafeAreaView className="flex-1 justify-center">
            <View 
             style={{backgroundColor:Colors.white}}
            className="flex-1 top-2 justify-evenly ">
 
            <Header headerTitle="Search" />

 

            <Spacer />
            <Bar/>
    
            <View className="py-3 px-2">
        <HeaderCatagories activeBackgroundColor={Colors.lightorange} activeTitleColor={Colors.orange} data={SearchCatagories}/>
    </View>
            <Spacer />
    <ScrollView contentContainerStyle={{paddingTop:15,paddingBottom:10,paddingHorizontal:5}}>
    

           
            <View className='mx-1  mb-3 justify-center ' >
                            <Text
                               style={{fontFamily:'PoppinsMedium'}}
                                className='text-base text-center mx-3 self-start'>Tutor</Text>
                            <TutorCard
                                image='dp'
                                data={TutorSubjects}
                                name='Youssef Harron'
                                sessions='4'
                                text='PhD student in the Industrial & Systems Engineering Department…'
                                key={'hamza'}
                            />
                        </View>
                        <Spacer />
                        
            <CardList view={Strings.ST31} />
            <Spacer />
            <View className="py-2 my-2 justify-between">
            <Text style={{fontFamily: 'PoppinsMedium'}} className='text-base px-2 mx-3 my-1 '>Posts</Text>
           <PostCard data={messageDataClasses}/>
         </View>
            
    
            
</ScrollView>
                </View>

       </SafeAreaView>
   
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // backgroundColor:'red'
    },
    innerContainer: {
        width: '97%',
        height: '100%',
        alignSelf: 'center',
        // justifyContent: 'center',
        margin: 10,
        // backgroundColor:'red'
    },
})
export default SearchScreen