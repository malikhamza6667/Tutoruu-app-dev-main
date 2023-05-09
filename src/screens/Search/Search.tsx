import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Text
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import tw from 'twrnc';
import ClassCard from "../../components/ClassCard/ClassCard";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Post from "../../components/Post/PostCard";
import Spacer from "../../components/Spacer/Spacer";
import TutorCard from "../../components/TutorCard/TutorCard";
import Details from "../../layouts/Details/Details";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import {
    TutorInfo,
    TutorSubjects,
    user,
    tutorData,
    ClassInfo,
    postsData
} from "../DummyData";
import { useNavigation } from "@react-navigation/native";
import Section from "../../layouts/Section/Section";
import Tag from "../../components/Tag/Tag";
import Colors from "../../../assets/Colors";


const HeaderFilters=[
    {
        id:0,
        tag: 'All'
    },
    {
        id: 1,
        tag: 'Classes'
    },
    {
        id:2,
        tag:'Tutors'
    },
    {
        id:3,
        tag: 'Posts'
    }

]
const Search = () => {
    const navigation= useNavigation()
    const renderItem = ({ item }) => (
        <Post
            text={item.text}
            user={item.user}
            date={item.date}
            comments_count={item.comments_count}
            likes_count={item.likes_count}
            dislikes_count={item.dislikes_count}
            is_liked={item.is_liked}
            is_disliked={item.is_disliked}
            is_saved={item.is_saved}
            on_dislike_Pressed={() => {
                setisDisLiked(!isDislike);
            }}
            on_like_Pressed={() => {
                setisLiked(!islike);
            }}
            onSaved={() => {
                setisSaved(!isSaved);
            }}
            is_anonymous={item.is_anonymous}
            tags={item.tags}
            attachement={item.attachement}
            key={item.id}

        />
    );
    const [email, setEmail] = useState('')
    const [islike, setisLiked] = useState(false)
    const [isDislike, setisDisLiked] = useState(false)
    const [isSaved, setisSaved] = useState(false)
    const [commented, setIsCommented] = useState(false)
    const[selectedFilter,setSelectedFilter]=useState(0)
    const[selectedFilterName,setSelectedFilterName]=useState('All')
    const[showPosts,setShowPosts]=useState(true)
    const[showClasses,setShowClasses]=useState(true)
    const[showTutors,setShowTutors]=useState(true)

    useEffect(()=>{
        if(selectedFilterName=='Posts'){
            setShowPosts(true)
            setShowClasses(false)
setShowTutors(false)
            
        }
        else  if(selectedFilterName=='Classes'){
            setShowPosts(false)
            setShowClasses(true)
setShowTutors(false)
            
        }
        else  if(selectedFilterName=='Tutors'){
            setShowPosts(false)
            setShowClasses(false)
setShowTutors(true)
            
        }
        else{
            setShowPosts(true)
            setShowClasses(true)
setShowTutors(true)
        }
        console.log('State Value Is ',selectedFilterName)
    },[selectedFilterName])
    return (
        <Details headerTitle="Search">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={[
                        tw`items-center`
                    ]}
                >
                    <Input
                        size='xlarge'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder='Search Anything'
                        height={hp('5')}
                        iconPosition='right'
                        icon={'AntDesign search1 20 gray'}
                    />
                </View>
                <View style={[tw`px-7 py-2`]}>
                    <HorizontalList
                    data={HeaderFilters}
                    renderItem={({item,index})=>{
                        return(
<TouchableOpacity
onPress={()=>{
    setSelectedFilter(index)
setSelectedFilterName(item.tag)
}}
style={[tw`rounded-full px-3 m-1 py-2`,{backgroundColor:selectedFilter==index?Colors.lightorange: Colors.gray}]}
>
    <Text style={[tw`text-xs`,{fontFamily:'PoppinsMedium',textTransform:'uppercase',color:selectedFilter==index?Colors.orange: Colors.black}]}>{item.tag}</Text>
</TouchableOpacity>
                        )                    }}
                    
                    />
                </View>
                <Spacer />
                {/* <Heading heading="Tutors" /> */}
{showTutors &&<Section title="Tutors">
    <View style={[tw`px-3`]}>

                <HorizontalList
                    data={tutorData}
                    renderItem={({ item }) => {
                        return (
                            <View style={[tw`pt-7`]}>
                                <TutorCard
                                    classes={TutorSubjects}
                                    user={item.user}
                                    num_sessions={item.num_sessions}
                                    rating={item.rating}
                                    onPress={()=>{navigation.navigate('TutorProfile')}}
                                    rate={item.rate}
                                    text={item.text}

                                />

                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}


                />
    </View>

</Section>}



                <Spacer />
              {showClasses &&  <Section title="Classes">
    <View style={[tw`px-3`]} >

    <HorizontalList
                    data={ClassInfo}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <ClassCard
                                    name={item.Title}
                                    onPress={()=>{
                                        const randomNum = Math.floor(Math.random() * 2) + 1;   
                                        console.log(randomNum)
                                        if(randomNum==1){

                                             navigation.navigate('Class',{
                                                isTutor:true
                                             })
                                        }
                                        else if(randomNum==2){
                                            navigation.navigate('Class',{
                                                isTutor:false
                                             })
                                        }
                                        else{
                                            navigation.navigate('Class',{
                                                isTutor:true
                                             }) 
                                        }
                                    }}
                                    desc={item.Desc}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}
                />
    </View>

</Section>}

                
                <Spacer />
          { showPosts && <Section title="Posts">

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={postsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
             </Section>}
            </ScrollView>
        </Details>
    )
}

export default Search