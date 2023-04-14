// import React from 'react';
// import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Fontisto from "react-native-vector-icons/Fontisto";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Entypo from 'react-native-vector-icons/Entypo'
// import Ionicons from "react-native-vector-icons/Ionicons"
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
// import Colors from '../../../assets/Colors';

// //  import AboutScreen from '../../screens/StudentFlow/AboutScreen';
// //  import SupportScreen from '../../screens/StudentFlow/SupportScreen';
// //  import ProfileScreen from '../../screens/StudentFlow/ProfileScreen';
// //  import SettingsScreen from '../../screens/StudentFlow/SettingsScreen';
// //  import MarketPlace from '../../screens/StudentFlow/MarketPlace/MarketPlace';
// //  import Bubble from '../../components/IconBubble';
// //  import SessionConfirmationMain from '../../screens/StudentFlow/SessionConfirmation/SessionMain';
// //  import ClassesMainScreen from '../../screens/StudentFlow/ClassScreen';
// // import ChatScreen from '../../screens/StudentFlow/Chat/ChatScreen';
// // import TutorApplicationFlowStack from './TeacherApplicationFlow';
// // import InboxScreenRunAI from '../../screens/StudentFlow/RunAi/RunAiInbox';

// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Marketplace from '../../screens/Marketplace/Marketplace';
// import Feed from '../../screens/Feed/Feed';
// // import BAPScreen from '../../screens/StudentFlow/Bap/BapScreen';
// // import UserList from '../../screens/StudentFlow/DummyScreenApi/DummyScreen';


// const Drawer = createDrawerNavigator();
// interface Props {
//   navigation: any;
// }
// const size = hp('2.5');
// const color = Colors.orange;
// const DrawerNav: React.FC<Props> = ({ navigation }) => {
//   return (
//     <Drawer.Navigator

//       initialRouteName='Feed'
//       screenOptions={({ navigation }) => ({
//         headerLeft: () =>
//           <Entypo
//             name='menu'
//             size={hp('3')}
//             color={color}
//             style={{ marginLeft: 10 }}
//             onPress={navigation.toggleDrawer}
//           />,
//         drawerActiveBackgroundColor: Colors.lightorange,
//         drawerActiveTintColor: Colors.black
//       })}
//     >
//       <Drawer.Screen
//         name='Feed'
//         component={Feed}
//         options={{

//           drawerIcon: ({ focused, size }) => (
//             <AntDesign
//               name="home"
//               size={size}
//               color={Colors.black}
//             />
//           ),
//           headerTitle: () =>
//             <Image
//               source={require('./../../../assets/logo.jpg')}
//               style={{
//                 height: hp('5'),
//                 width: wp('22'),
//                 alignSelf: 'center',
//                 resizeMode: 'contain'
//               }}
//             />,
//           headerTitleAlign: 'center',

//         }}
//       />
//       <Drawer.Screen
//         name='MarketPlace'
//         component={Marketplace}
//         options={{
//           drawerIcon: ({ focused, size }) => (
//             <Ionicons
//               name="library"
//               size={size}
//               color={Colors.black}
//             />
//           ),
//           headerTitle: () =>
//             <Image
//               source={require('./../../../assets/logo.jpg')}
//               style=
//               {{
//                 height: hp('5%'),
//                 width: wp('20%'),
//                 alignSelf: 'center'
//               }}
//               resizeMode='contain'
//             />,
//           headerTitleAlign: 'center',

//         }} />
//       {/* <Drawer.Screen
//          name='InboxScreenRunAI'
//          component={InboxScreenRunAI}
//          options={{
//            headerShown: (false),
//            drawerLabel: 'Ruu AI',
//            drawerIcon: ({ focused, size }) => (
//              <MaterialCommunityIcons name="bird" size={size} color="black" />
//            )
//          }} /> */}



//     </Drawer.Navigator>
//   )
// }
// const styles = StyleSheet.create({
//   icon: {
//     flexDirection: 'row',
//     marginRight: hp(1)
//   },
// })

// export default DrawerNav



// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// const DrawerNav=()=> {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default DrawerNav





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// interface DrawerItem {
//   label: string;
//   onPress: () => void;
// }

// const Drawer = ({ items }: { items: DrawerItem[] }) => {
//   return (
//     <View style={styles.drawer}>
//       {items.map((item, index) => (
//         <TouchableOpacity key={index} onPress={item.onPress} style={styles.drawerItem}>
//           <Text>{item.label}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const DrawerButton = ({ onPress }: { onPress: () => void }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.drawerButton}>
//       <Text>Open Drawer</Text>
//     </TouchableOpacity>
//   );
// };

// const DrawerNav = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerItemPress = (label: string) => {
//     console.log(`Pressed ${label}`);
//     setIsDrawerOpen(false);
//   };

//   const drawerItems = [
//     { label: 'Item 1', onPress: () => handleDrawerItemPress('Item 1') },
//     { label: 'Item 2', onPress: () => handleDrawerItemPress('Item 2') },
//     { label: 'Item 3', onPress: () => handleDrawerItemPress('Item 3') },
//   ];

//   return (
//     <View style={styles.container}>
//       <Drawer items={drawerItems} />
//       <DrawerButton onPress={() => setIsDrawerOpen(true)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   drawer: {
//     backgroundColor: '#f0f0f0',
//     height: '100%',
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: '80%',
//   },
//   drawerButton: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//   },
//   drawerItem: {
//     padding: 10,
//   },
// });

// export default DrawerNav;



// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';

// interface DrawerItem {
//   label: string;
//   icon: any;
//   onPress: () => void;
// }

// interface DrawerProps {
//   drawerItems: DrawerItem[];
// }

// const DrawerNav: React.FC<DrawerProps> = ({ drawerItems }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => setIsOpen(!isOpen);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.toggleButton} onPress={toggleDrawer}>
//         {/* Insert your custom drawer icon here */}
//       </TouchableOpacity>
//       {isOpen && (
//         <View style={styles.drawer}>
//           {drawerItems.map((item) => (
//             <TouchableOpacity key={item.label} style={styles.drawerItem} onPress={item.onPress}>
//               {/* Insert your custom drawer item icon here */}
//               {item.icon}
//               <Text style={styles.drawerLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   toggleButton: {
//     // Insert your custom drawer icon styles here
//   },
//   drawer: {
//     // Insert your custom drawer styles here
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   drawerLabel: {
//     marginLeft: 16,
//     // Insert your custom drawer label styles here
//   },
// });

// export default DrawerNav;




import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Props {
  drawerWidth: number;
  drawerItems: React.ReactNode;
  navigation: any;
}

const DrawerNav: React.FC<Props> = ({ drawerWidth, drawerItems, navigation }) => {
  const translateX = useRef(new Animated.Value(-drawerWidth)).current;

  const openDrawer = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(translateX, {
      toValue: -drawerWidth,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={closeDrawer} />
      <Animated.View style={[styles.drawer, { width: drawerWidth, transform: [{ translateX }] }]}>
        <View style={styles.drawerContent}>{drawerItems}</View>
      </Animated.View>
      <TouchableOpacity style={styles.drawerButton} onPress={openDrawer}>
        <View style={styles.drawerIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e5e5e5',
  },
  drawerContent: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  drawerButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerIcon: {
    width: 16,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#333',
  },
});

export default DrawerNav;
