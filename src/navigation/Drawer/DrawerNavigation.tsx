import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';

import Feed from '../../screens/Feed/Feed';
import Marketplace from '../../screens/Marketplace/Marketplace';

type DrawerParamList = {
  Feed: undefined;
  Marketplace: undefined;
};

type Props = {
  navigation?: DrawerNavigationProp<DrawerParamList>;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC<Props> = ({ navigation }) => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Marketplace" component={Marketplace} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
