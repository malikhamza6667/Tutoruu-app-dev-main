import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
const size = 25;
const color = Colors.orange;
const TutorRoot: React.FC<Props> = ({ navigation }) => {
  return (
    <Drawer.Navigator

      initialRouteName='Feed'
      screenOptions={({ navigation }) => ({
        headerLeft: () =>
          <Entypo
            name='menu'
            size={size}
            color={color}
            style={{ marginLeft: 10 }}
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
              style={{ height: 38, width: 99, alignSelf: 'center' }} />,
              headerTitleAlign:'center',
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
                      style={{ marginHorizontal: 10 }}
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
          drawerLabel:'Chat',
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
  },
})

export default TutorRoot