import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem
} from '@react-navigation/drawer'
import Feed from "../../screens/Feed/Feed";
import Marketplace from "../../screens/Marketplace/Marketplace";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Feather, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from "../../../assets/Colors";

import tw from 'twrnc';
import { Icon } from "../../components/Icon/Icon";
import Profile from "../../screens/Profile/Profile";
import SavedPosts from "../../screens/SavedPosts/SavedPosts";
import TutorApplicationFlow from "../TutorApplicationFlow/TutorApplicationFlow";
import Settings from "../../screens/Settings/Settings";
import Support from "../../screens/Support/Support";
import BAP from "../../screens/BAP/BAP";
import RuuAiScreen from "../../screens/RuuAi/RuuAi";
import TestingScreen from "../../screens/TestingScreen/TestingScreen";


const drawer = createDrawerNavigator()
type Props = {
  navigation?: any;
}
const size = hp('2.5');
const color = Colors.orange;
const NavLinkUser: React.FC<Props> = ({ navigation }) => {

  const customeDrawerContent = (props: any) => {
    return (
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
  return (
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
        drawerActiveTintColor: Colors.orange,
        drawerActiveBackgroundColor: Colors.white,
        drawerInactiveBackgroundColor: Colors.white,
        drawerItemStyle: {
          marginLeft: hp('1'),
          marginTop: hp('-2'),
          fontFamily: 'PoppinsRegular'

        },
        drawerLabelStyle:{
          marginLeft:hp('-2.7')
        },
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
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

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
                style={[tw`p-2 mx-1 rounded-full`, { backgroundColor: Colors.lightorange, }]}
                onPress={() => { navigation.navigate('NotificationScreen') }}>

                <FontAwesome

                  name="bell-o"
                  size={20}
                  color={color}
                />

              </TouchableOpacity>
              <TouchableOpacity
                style={[tw`p-2 mx-1 rounded-full`, { backgroundColor: Colors.lightorange, }]}
                onPress={() => { navigation.navigate('Search') }}>
                <Ionicons
                  name="search-outline"
                  size={20}
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
          drawerLabel: 'Find Tutors',
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="AntDesign"
              name="home"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

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
                style={[tw`p-2 mx-1 rounded-full`, { backgroundColor: Colors.lightorange, }]}
                onPress={() => { navigation.navigate('NotificationScreen') }}>

                <FontAwesome

                  name="bell-o"
                  size={20}
                  color={color}
                />

              </TouchableOpacity>
              <TouchableOpacity
                style={[tw`p-2 mx-1 rounded-full`, { backgroundColor: Colors.lightorange, }]}
                onPress={() => { navigation.navigate('Search') }}>
                <Ionicons
                  name="search-outline"
                  size={20}
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
          drawerLabel: 'Profile',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="AntDesign"
              name="user"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),
        }}
      />

      <drawer.Screen

        name="SavedPosts"
        component={SavedPosts}
        options={{
          drawerLabel: 'Saved Posts',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="Entypo"
              name="bookmark"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),
        }}
      />
      <drawer.Screen

        name="TutorApplicationFlow"
        component={TutorApplicationFlow}
        options={{
          drawerLabel: 'Become A Tutor',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="MaterialIcons"
              name="collections-bookmark"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),
          // drawerItemStyle:{marginTop: hp('10')}




        }}
      />
      <drawer.Screen

        name="Settings"
        component={Settings}
        options={{
          drawerLabel: 'Settings',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="Ionicons"
              name="settings"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),




        }}
      />
      <drawer.Screen

        name="Support"
        component={Support}
        options={{
          drawerLabel: 'Support',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="MaterialCommunityIcons"
              name="alert"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),




        }}
      />
      {/* <drawer.Screen

        name="BAP"
        component={BAP}
        options={{
          drawerLabel: 'Brand Ambassadors',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="FontAwesome"
              name="star"
              color={focused ? Colors.orange : Colors.black}
              size="small"

            />


          ),




        }}
      /> */}



      <drawer.Screen

        name="RuuAiScreen"
        component={RuuAiScreen}
        options={{
          drawerLabel: 'Ruu Ai',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="MaterialCommunityIcons"
              name="bird"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),
          drawerItemStyle: {
            marginTop: hp('10'),
            marginBottom: hp('-12')
          }




        }}
      />
      <drawer.Screen

        name="TestingScreen"
        component={TestingScreen}
        options={{
          drawerLabel: 'TestingScreen',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (

            <Icon
              family="MaterialCommunityIcons"
              name="bird"
              color={focused ? Colors.orange : Colors.black}
              size="xsmall"

            />


          ),
          drawerItemStyle: { marginTop: hp('10.4') }




        }}
      />



    </drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    marginRight: hp('1'),

  },
})



export default NavLinkUser

