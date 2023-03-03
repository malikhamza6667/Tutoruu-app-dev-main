import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from "react-native-vector-icons/Ionicons"
import Colors from '../../../assets/Colors';






import ChatScreen from '../../screens/StudentFlow/Chat/ChatScreen';
import TutorDashboard from '../../screens/TutorFlow/TutorDashboard/TutorDashboard';
import Bubble from '../../components/IconBubble';

const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
}
const size = hp('2.5');
const color = Colors.orange;
const TutorRoot: React.FC<Props> = ({ navigation }) => {
  return (
    <Drawer.Navigator

      initialRouteName='Feed'
      screenOptions={({ navigation }) => ({
        headerLeft: () =>
          <Entypo
            name='menu'
            size={hp('3')}
            color={color}
            style={{ marginLeft: hp('1') }}
            onPress={navigation.toggleDrawer}
          />,
        drawerActiveBackgroundColor: Colors.lightorange,
        drawerActiveTintColor: Colors.black


      }

      )
      }
    >
      <Drawer.Screen
        name='TutorDashboard'
        component={TutorDashboard}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={Colors.black}
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
              }} />,
          headerTitleAlign: 'center',
          headerRight: () =>
            [<View style={styles.icon} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Bubble
                  icon={
                    <FontAwesome
                      name="bell-o"
                      size={size}
                      color={color}
                    // style={{ marginHorizontal: 10 }}
                    />} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}>
                <Bubble icon=
                  {<Ionicons
                    name="search-outline"
                    size={size}
                    color={color} />} />
              </TouchableOpacity>
            </View>
            ]
        }} />
      <Drawer.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{
          headerShown: (false),
          drawerLabel: 'Chat',
          drawerIcon: ({ focused, size }) => (
            <Entypo name="chat" size={24} color={color} />
          )
        }} />








    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    marginRight: hp(1)
  },
})

export default TutorRoot