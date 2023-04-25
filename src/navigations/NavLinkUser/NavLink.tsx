import React from "react";
import { View,Image,Text ,TouchableOpacity,StyleSheet} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import Feed from "../../screens/Feed/Feed";
import Marketplace from "../../screens/Marketplace/Marketplace";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons,MaterialIcons,AntDesign,Feather,Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';
import Colors from "../../../assets/Colors";

import tw from 'twrnc';
import { Icon } from "../../components/Icon/Icon";
import Profile from "../../screens/Profile/Profile";
const drawer= createDrawerNavigator()
type Props= {
    navigation?: any;
  }
  const size = hp('2.5');
  const color = Colors.orange;
const NavLinkUser:React.FC<Props>=({navigation})=>{

  const customeDrawerContent=(props:any)=>{
    return(
      <DrawerContentScrollView {...props}>
      <View style={tw`self-start p-5`}>
      <Image
                source={require('./../../../assets/logo.jpg')}
                style={{
                  height: hp('5'),
                  width: wp('22'),
                  alignSelf: 'center',
                  resizeMode: 'contain'
                }}
              />
      </View>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
    )
  }
return(
    <drawer.Navigator
    drawerContent={customeDrawerContent}
    initialRouteName='Feed'
    screenOptions={({ navigation }) => ({
      headerLeft: () =>
        <Entypo
          name='menu'
          size={hp('4')}
          color={color}
          style={{ marginLeft: 10 }}
          onPress={navigation.toggleDrawer}
        />,
      drawerInactiveTintColor: Colors.black,
      drawerActiveTintColor:  Colors.orange,
      drawerActiveBackgroundColor: Colors.white,
      drawerInactiveBackgroundColor: Colors.white,


    }

    )
    }
    >
        <drawer.Screen 
        name="Feed"
        component={Feed} 
        options={{

            drawerIcon: ({ focused, size }) => (
            
                <Icon
                family="FontAwesome5"
                name="newspaper"
                color={focused? Colors.orange: Colors.black}
                size="small"
                
                />
              
            ),
            headerTitle: () =>
              <Image
                source={require('./../../../assets/logo.jpg')}
                style={{
                  height: hp('5'),
                  width: wp('22'),
                  alignSelf: 'center',
                  resizeMode: 'contain'
                }}
              />,
            headerTitleAlign: 'center',
            headerRight: () =>
              [<View style={styles.icon} >
                <TouchableOpacity
                style={[tw`p-2 mx-1 rounded-full`,{backgroundColor: Colors.lightorange,}]}
                  onPress={() => navigation.navigate('Notification')}>
                 <Icon
                 family="FontAwesome"
                 name="bell-o"
                 size="small"
                 color={color}
                 />
                      
                </TouchableOpacity>
                <TouchableOpacity
                 style={[tw`p-2 mx-1 rounded-full`,{backgroundColor: Colors.lightorange,}]}
                  onPress={() => navigation.navigate('Search')}>
                   <Icon
                 family="Ionicons"
                 name="search-outline"
                 size="small"
                 color={color}
                 />
                    
                 
                </TouchableOpacity>
              </View>
              ],
             
              
          }} 
        
        
        
        
        
        />
        <drawer.Screen 
        name="Marketplace" 
        component={Marketplace} 
        options={{
drawerLabel:'Find Tutors',
          drawerIcon: ({ focused, size }) => (
        
            <Icon
            family="AntDesign"
            name="home"
            color={focused? Colors.orange: Colors.black}
            size="small"
            
            />
              
            
          ),
          headerTitle: () =>
            <Image
              source={require('./../../../assets/logo.jpg')}
              style={{
                height: hp('5'),
                width: wp('22'),
                alignSelf: 'center',
                resizeMode: 'contain'
              }}
            />,
          headerTitleAlign: 'center',
          headerRight: () =>
            [<View style={styles.icon} >
              <TouchableOpacity
              style={[tw`p-2 mx-1 rounded-full`,{backgroundColor: Colors.lightorange,}]}
                onPress={() => navigation.navigate('Notification')}>
               <Icon
               family="FontAwesome"
               name="bell-o"
               size="small"
               color={color}
               />
                    
              </TouchableOpacity>
              <TouchableOpacity
               style={[tw`p-2 mx-1 rounded-full`,{backgroundColor: Colors.lightorange,}]}
                onPress={() => navigation.navigate('Search')}>
                 <Icon
               family="Ionicons"
               name="search-outline"
               size="small"
               color={color}
               />
                  
               
              </TouchableOpacity>
            </View>
            ],
           
            
        }} 
        
        />
<drawer.Screen

name="Profile"
component={Profile}
options={{
  drawerLabel:'Profile',
  headerShown:false,
            drawerIcon: ({ focused, size }) => (
            
              <Icon
              family="FontAwesome"
              name="user"
              color={focused? Colors.orange: Colors.black}
              size="small"
              
              />
                
              
            ),
           
            
             
              
          }} 
/>

        
    </drawer.Navigator>
)
}

const styles = StyleSheet.create({
    icon: {
      flexDirection: 'row',
      marginRight:hp(1)
    },
  })
  


export default NavLinkUser

