import React, { useContext } from 'react'

import {View,Text, SafeAreaView} from 'react-native'
import Header from '../../../components/Header';
import Languages from '../../../languages';
import LanguageContext from '../../../languages/languageContext';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Props{
    navigation: any
}
const BAPScreen:React.FC<Props>=({navigation})=>{
    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {
  
      const language = contextState.language
      if (language === 'en') {
        Strings = Languages[0].texts

      }
      else if (language === 'es') {
        Strings = Languages[1].texts
      }
      else {
        //default language if not any language provided
        Strings = Languages[0].texts
      }
    }
  
    return(
 <SafeAreaView className='flex-1 justify-center bg-white'>
<View className='flex-1 justify-between'>
    <View className=' justify-start' style={{height:hp('10%'),top: hp('3%')}}>
    <Header headerTitle='About'/>

    </View>
    <View className='px-5 justify-start gap-y-5 order-1' style={{height:hp('85%')}}>
     <Text style={{fontFamily: 'PoppinsBold',lineHeight: 24,alignSelf: 'stretch',}} className=' pr-3 text-base'>{Strings.ST85}</Text>
     <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm '>{Strings.ST86}</Text>
     <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm'>{Strings.ST87}</Text>
     <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm'>{Strings.ST88}</Text>
     <Text style={{fontFamily: 'PoppinsRegular'}} className='text-sm'>{Strings.ST89}</Text>

    </View>

</View>
 </SafeAreaView>
           
    )
}

export default BAPScreen